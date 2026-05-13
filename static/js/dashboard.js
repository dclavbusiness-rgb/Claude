'use strict';

// ── State ──────────────────────────────────────────────────────────────────
let chart = null;
let candleSeries = null;
let volumeSeries = null;
let currentSymbol = 'AAPL';
let currentInterval = '1d';
let searchTimer = null;

// ── DOM refs ───────────────────────────────────────────────────────────────
const tvChart       = document.getElementById('tv-chart');
const chartSymbol   = document.getElementById('chart-symbol');
const chartPrice    = document.getElementById('chart-price');
const chartChange   = document.getElementById('chart-change');
const chartChangePct= document.getElementById('chart-change-pct');
const ohlcO         = document.getElementById('ohlc-o');
const ohlcH         = document.getElementById('ohlc-h');
const ohlcL         = document.getElementById('ohlc-l');
const ohlcC         = document.getElementById('ohlc-c');
const ohlcV         = document.getElementById('ohlc-v');
const watchlistEl   = document.getElementById('watchlist');
const searchInput   = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const statsEl       = document.getElementById('stats-panel');
const spinner       = document.getElementById('chart-spinner');
const toast         = document.getElementById('toast');

// ── Chart init ─────────────────────────────────────────────────────────────
function initChart() {
  chart = LightweightCharts.createChart(tvChart, {
    layout: {
      background: { color: '#0d1117' },
      textColor: '#8b949e',
    },
    grid: {
      vertLines: { color: '#21262d' },
      horzLines: { color: '#21262d' },
    },
    crosshair: {
      mode: LightweightCharts.CrosshairMode.Normal,
      vertLine: { color: '#484f58', labelBackgroundColor: '#21262d' },
      horzLine: { color: '#484f58', labelBackgroundColor: '#21262d' },
    },
    rightPriceScale: {
      borderColor: '#30363d',
    },
    timeScale: {
      borderColor: '#30363d',
      timeVisible: true,
      secondsVisible: false,
    },
  });

  // Volume pane (20% height)
  volumeSeries = chart.addHistogramSeries({
    priceFormat: { type: 'volume' },
    priceScaleId: 'volume',
  });
  chart.priceScale('volume').applyOptions({
    scaleMargins: { top: 0.8, bottom: 0 },
    borderVisible: false,
  });

  // Candles
  candleSeries = chart.addCandlestickSeries({
    upColor: '#3fb950',
    downColor: '#f85149',
    borderUpColor: '#3fb950',
    borderDownColor: '#f85149',
    wickUpColor: '#3fb950',
    wickDownColor: '#f85149',
    priceScaleId: 'right',
  });
  chart.priceScale('right').applyOptions({
    scaleMargins: { top: 0.05, bottom: 0.22 },
  });

  // Crosshair OHLC tooltip
  chart.subscribeCrosshairMove(param => {
    if (!param.time || !param.seriesData) return;
    const bar = param.seriesData.get(candleSeries);
    const vol = param.seriesData.get(volumeSeries);
    if (bar) {
      ohlcO.textContent = fmt(bar.open);
      ohlcH.textContent = fmt(bar.high);
      ohlcL.textContent = fmt(bar.low);
      ohlcC.textContent = fmt(bar.close);
    }
    if (vol) {
      ohlcV.textContent = fmtVol(vol.value);
    }
  });

  // Resize observer
  new ResizeObserver(() => {
    chart.applyOptions({ width: tvChart.clientWidth, height: tvChart.clientHeight });
  }).observe(tvChart);
}

// ── Load chart data ────────────────────────────────────────────────────────
async function loadChart(symbol, interval) {
  symbol = symbol.toUpperCase();
  showSpinner(true);
  try {
    const res = await fetch(`/api/chart/${symbol}?interval=${interval}`);
    if (!res.ok) {
      const err = await res.json();
      showToast(err.detail || 'Failed to load data', true);
      return;
    }
    const data = await res.json();

    candleSeries.setData(data.candles);
    volumeSeries.setData(data.volume);
    chart.timeScale().fitContent();

    currentSymbol = symbol;
    currentInterval = interval;

    // Header
    chartSymbol.textContent = symbol;
    if (data.last_price != null) {
      chartPrice.textContent = fmt(data.last_price);
    }

    // OHLC from last bar
    if (data.candles.length) {
      const last = data.candles[data.candles.length - 1];
      ohlcO.textContent = fmt(last.open);
      ohlcH.textContent = fmt(last.high);
      ohlcL.textContent = fmt(last.low);
      ohlcC.textContent = fmt(last.close);
      if (data.volume.length) {
        ohlcV.textContent = fmtVol(data.volume[data.volume.length - 1].value);
      }
    }

    await loadQuote(symbol);
    await loadStats(symbol);
    highlightWatchlistItem(symbol);
  } catch (e) {
    showToast('Network error', true);
  } finally {
    showSpinner(false);
  }
}

// ── Quote ──────────────────────────────────────────────────────────────────
async function loadQuote(symbol) {
  try {
    const res = await fetch(`/api/quote/${symbol}`);
    if (!res.ok) return;
    const q = await res.json();
    if (q.last_price != null) {
      chartPrice.textContent = fmt(q.last_price);
    }
    const up = q.change != null && q.change >= 0;
    const cls = up ? 'positive' : 'negative';
    chartChange.className = cls;
    chartChangePct.className = cls;
    chartChange.textContent = q.change != null
      ? (q.change >= 0 ? '+' : '') + fmt(q.change)
      : '—';
    chartChangePct.textContent = q.change_pct != null
      ? (q.change_pct >= 0 ? '+' : '') + q.change_pct + '%'
      : '';
  } catch (_) {}
}

// ── Stats panel ────────────────────────────────────────────────────────────
async function loadStats(symbol) {
  try {
    const res = await fetch(`/api/quote/${symbol}`);
    if (!res.ok) return;
    const q = await res.json();
    statsEl.innerHTML = `
      <div class="stat-row"><span class="stat-label">Last</span><span class="stat-value">${q.last_price != null ? fmt(q.last_price) : '—'}</span></div>
      <div class="stat-row"><span class="stat-label">Prev Close</span><span class="stat-value">${q.prev_close != null ? fmt(q.prev_close) : '—'}</span></div>
      <div class="stat-row"><span class="stat-label">Change</span><span class="stat-value ${q.change >= 0 ? 'positive' : 'negative'}">${q.change != null ? (q.change >= 0 ? '+' : '') + fmt(q.change) : '—'}</span></div>
      <div class="stat-row"><span class="stat-label">Change %</span><span class="stat-value ${q.change_pct >= 0 ? 'positive' : 'negative'}">${q.change_pct != null ? (q.change_pct >= 0 ? '+' : '') + q.change_pct + '%' : '—'}</span></div>
      <div class="stat-row"><span class="stat-label">Currency</span><span class="stat-value">${q.currency || '—'}</span></div>
    `;
  } catch (_) {}
}

// ── Watchlist ──────────────────────────────────────────────────────────────
async function loadWatchlist() {
  try {
    const res = await fetch('/api/watchlist');
    if (!res.ok) return;
    const items = await res.json();
    watchlistEl.innerHTML = '';
    for (const item of items) {
      const el = document.createElement('div');
      el.className = 'watchlist-item' + (item.symbol === currentSymbol ? ' active' : '');
      el.dataset.symbol = item.symbol;

      const up = item.change != null && item.change >= 0;
      const cls = item.change != null ? (up ? 'positive' : 'negative') : '';
      const chg = item.change_pct != null
        ? (item.change_pct >= 0 ? '+' : '') + item.change_pct + '%'
        : '—';

      el.innerHTML = `
        <span class="watchlist-symbol">${item.symbol}</span>
        <span class="watchlist-price">${item.last_price != null ? fmt(item.last_price) : '—'}</span>
        <span class="watchlist-change">&nbsp;</span>
        <span class="watchlist-change ${cls}">${chg}</span>
      `;
      el.addEventListener('click', () => {
        loadChart(item.symbol, currentInterval);
      });
      watchlistEl.appendChild(el);
    }
  } catch (_) {}
}

function highlightWatchlistItem(symbol) {
  document.querySelectorAll('.watchlist-item').forEach(el => {
    el.classList.toggle('active', el.dataset.symbol === symbol);
  });
}

// ── Interval buttons ───────────────────────────────────────────────────────
document.querySelectorAll('.interval-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.interval-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    loadChart(currentSymbol, btn.dataset.interval);
  });
});

// ── Search ─────────────────────────────────────────────────────────────────
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  const q = searchInput.value.trim();
  if (!q) { closeSearch(); return; }
  searchTimer = setTimeout(() => doSearch(q), 300);
});

searchInput.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSearch();
  if (e.key === 'Enter') {
    const q = searchInput.value.trim();
    if (q) loadChart(q, currentInterval);
    closeSearch();
    searchInput.value = '';
  }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrapper')) closeSearch();
});

async function doSearch(q) {
  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    const results = await res.json();
    searchResults.innerHTML = '';
    if (!results.length) {
      searchResults.innerHTML = '<div class="search-result-item"><span class="name">No results</span></div>';
    } else {
      for (const r of results) {
        const el = document.createElement('div');
        el.className = 'search-result-item';
        el.innerHTML = `<span class="sym">${r.symbol}</span><span class="name">${r.name || ''}</span>`;
        el.addEventListener('click', () => {
          loadChart(r.symbol, currentInterval);
          searchInput.value = '';
          closeSearch();
        });
        searchResults.appendChild(el);
      }
    }
    searchResults.classList.add('open');
  } catch (_) {}
}

function closeSearch() {
  searchResults.classList.remove('open');
  searchResults.innerHTML = '';
}

// ── Helpers ────────────────────────────────────────────────────────────────
function fmt(n) {
  if (n == null) return '—';
  if (n >= 1000) return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (n >= 1) return n.toFixed(2);
  return n.toFixed(4);
}

function fmtVol(n) {
  if (n == null) return '—';
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(2) + 'K';
  return n.toLocaleString();
}

function showSpinner(on) {
  spinner.style.display = on ? 'flex' : 'none';
}

let toastTimer = null;
function showToast(msg, isError = false) {
  toast.textContent = msg;
  toast.className = 'show' + (isError ? ' error' : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.className = '', 3000);
}

// ── Boot ───────────────────────────────────────────────────────────────────
(async function boot() {
  initChart();
  loadWatchlist();
  await loadChart(currentSymbol, currentInterval);
})();
