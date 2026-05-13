from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from typing import Optional
import yfinance as yf
import pandas as pd

app = FastAPI(title="Trading Dashboard")

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

DEFAULT_WATCHLIST = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "BTC-USD", "ETH-USD", "SPY"]

INTERVALS = {
    "1m": ("1d", "1m"),
    "5m": ("5d", "5m"),
    "15m": ("5d", "15m"),
    "1h": ("1mo", "1h"),
    "1d": ("1y", "1d"),
    "1wk": ("5y", "1wk"),
}


@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/api/chart/{symbol}")
async def get_chart_data(symbol: str, interval: str = "1d"):
    symbol = symbol.upper()
    if interval not in INTERVALS:
        raise HTTPException(status_code=400, detail=f"Invalid interval. Choose from: {list(INTERVALS.keys())}")

    period, tf = INTERVALS[interval]
    try:
        ticker = yf.Ticker(symbol)
        df = ticker.history(period=period, interval=tf)
        if df.empty:
            raise HTTPException(status_code=404, detail=f"No data found for symbol: {symbol}")

        df = df.reset_index()
        time_col = "Datetime" if "Datetime" in df.columns else "Date"

        candles = []
        volume = []
        for _, row in df.iterrows():
            ts = int(pd.Timestamp(row[time_col]).timestamp())
            candles.append({
                "time": ts,
                "open": round(float(row["Open"]), 4),
                "high": round(float(row["High"]), 4),
                "low": round(float(row["Low"]), 4),
                "close": round(float(row["Close"]), 4),
            })
            volume.append({
                "time": ts,
                "value": round(float(row["Volume"]), 0),
                "color": "#26a69a" if row["Close"] >= row["Open"] else "#ef5350",
            })

        info = ticker.fast_info
        return {
            "symbol": symbol,
            "candles": candles,
            "volume": volume,
            "currency": getattr(info, "currency", "USD"),
            "last_price": round(float(info.last_price), 4) if hasattr(info, "last_price") else None,
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/quote/{symbol}")
async def get_quote(symbol: str):
    symbol = symbol.upper()
    try:
        ticker = yf.Ticker(symbol)
        info = ticker.fast_info
        hist = ticker.history(period="2d", interval="1d")

        prev_close = None
        last_price = None
        change = None
        change_pct = None

        if not hist.empty and len(hist) >= 1:
            last_price = round(float(hist["Close"].iloc[-1]), 4)
            if len(hist) >= 2:
                prev_close = round(float(hist["Close"].iloc[-2]), 4)
                change = round(last_price - prev_close, 4)
                change_pct = round((change / prev_close) * 100, 2)

        return {
            "symbol": symbol,
            "last_price": last_price,
            "prev_close": prev_close,
            "change": change,
            "change_pct": change_pct,
            "currency": getattr(info, "currency", "USD"),
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/watchlist")
async def get_watchlist_quotes():
    results = []
    for symbol in DEFAULT_WATCHLIST:
        try:
            ticker = yf.Ticker(symbol)
            hist = ticker.history(period="2d", interval="1d")
            last_price = prev_close = change = change_pct = None
            if not hist.empty and len(hist) >= 1:
                last_price = round(float(hist["Close"].iloc[-1]), 4)
                if len(hist) >= 2:
                    prev_close = round(float(hist["Close"].iloc[-2]), 4)
                    change = round(last_price - prev_close, 4)
                    change_pct = round((change / prev_close) * 100, 2)
            results.append({
                "symbol": symbol,
                "last_price": last_price,
                "change": change,
                "change_pct": change_pct,
            })
        except Exception:
            results.append({"symbol": symbol, "last_price": None, "change": None, "change_pct": None})
    return results


@app.get("/api/search")
async def search_symbol(q: str):
    try:
        results = yf.Search(q, max_results=8)
        quotes = results.quotes if hasattr(results, "quotes") else []
        return [
            {"symbol": r.get("symbol", ""), "name": r.get("shortname", r.get("longname", ""))}
            for r in quotes
            if r.get("symbol")
        ]
    except Exception:
        return []
