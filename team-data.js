/**
 * NOKO TEAM DIRECTORY DATA
 * ========================
 * To add or edit employees, update the TEAM_DATA array below.
 *
 * Each entry format:
 * { name: "First Last", role: "Job Title", dept: "Department", start: "YYYY-MM-DD", email: "email@nokonashville.com" }
 *
 * Available departments:
 *   Front of House | Back of House | Bar | Management | Operations | Events
 */

const TEAM_DATA = [
  // ── Management ──────────────────────────────────────────────────────────
  { name: "Jordan Park",       role: "General Manager",           dept: "Management",    start: "2019-03-15", email: "jpark@nokonashville.com" },
  { name: "Mia Tanaka",        role: "Assistant General Manager", dept: "Management",    start: "2020-06-01", email: "mtanaka@nokonashville.com" },
  { name: "Rafael Ortega",     role: "HR Manager",                dept: "Management",    start: "2021-01-10", email: "rortega@nokonashville.com" },
  { name: "Simone Delacroix",  role: "Director of Operations",    dept: "Operations",    start: "2020-09-20", email: "sdelacroix@nokonashville.com" },
  { name: "Kenji Watanabe",    role: "Executive Chef",            dept: "Back of House", start: "2019-03-15", email: "kwatanabe@nokonashville.com" },
  { name: "Priya Nair",        role: "Sous Chef",                 dept: "Back of House", start: "2020-04-12", email: "pnair@nokonashville.com" },
  { name: "Marcus Bell",       role: "Bar Director",              dept: "Bar",           start: "2019-08-05", email: "mbell@nokonashville.com" },
  { name: "Lily Chen",         role: "Events Manager",            dept: "Events",        start: "2021-02-14", email: "lchen@nokonashville.com" },

  // ── Front of House ───────────────────────────────────────────────────────
  { name: "Amara Williams",    role: "Head Server",               dept: "Front of House", start: "2020-05-18", email: "awilliams@nokonashville.com" },
  { name: "Declan Murphy",     role: "Server",                    dept: "Front of House", start: "2021-07-01", email: "dmurphy@nokonashville.com" },
  { name: "Zara Ahmed",        role: "Server",                    dept: "Front of House", start: "2022-01-10", email: "zahmed@nokonashville.com" },
  { name: "Tomás Reyes",       role: "Server",                    dept: "Front of House", start: "2022-03-22", email: "treyes@nokonashville.com" },
  { name: "Nina Kowalski",     role: "Server",                    dept: "Front of House", start: "2021-11-15", email: "nkowalski@nokonashville.com" },
  { name: "Cameron Ellis",     role: "Server",                    dept: "Front of House", start: "2023-02-01", email: "cellis@nokonashville.com" },
  { name: "Isabelle Fontaine", role: "Server",                    dept: "Front of House", start: "2022-09-09", email: "ifontaine@nokonashville.com" },
  { name: "Aaron Cho",         role: "Server",                    dept: "Front of House", start: "2023-04-17", email: "acho@nokonashville.com" },
  { name: "Fatima Hassan",     role: "Server",                    dept: "Front of House", start: "2023-06-01", email: "fhassan@nokonashville.com" },
  { name: "Dylan Scott",       role: "Server",                    dept: "Front of House", start: "2022-12-05", email: "dscott@nokonashville.com" },
  { name: "Leila Patel",       role: "Food Runner",               dept: "Front of House", start: "2023-01-20", email: "lpatel@nokonashville.com" },
  { name: "Owen Carroll",      role: "Food Runner",               dept: "Front of House", start: "2023-05-12", email: "ocarroll@nokonashville.com" },
  { name: "Marisol Vega",      role: "Food Runner",               dept: "Front of House", start: "2022-08-30", email: "mvega@nokonashville.com" },
  { name: "Ethan Brooks",      role: "Food Runner",               dept: "Front of House", start: "2024-01-08", email: "ebrooks@nokonashville.com" },
  { name: "Jasmine King",      role: "Host",                      dept: "Front of House", start: "2022-06-14", email: "jking@nokonashville.com" },
  { name: "Caleb Torres",      role: "Host",                      dept: "Front of House", start: "2023-03-01", email: "ctorres@nokonashville.com" },
  { name: "Anika Singh",       role: "Host",                      dept: "Front of House", start: "2023-07-22", email: "asingh@nokonashville.com" },
  { name: "Bryce Walker",      role: "Host",                      dept: "Front of House", start: "2024-02-19", email: "bwalker@nokonashville.com" },
  { name: "Sophia Lim",        role: "Server Assistant",          dept: "Front of House", start: "2023-09-05", email: "slim@nokonashville.com" },
  { name: "Marcus Davis",      role: "Server Assistant",          dept: "Front of House", start: "2023-10-11", email: "mdavis@nokonashville.com" },
  { name: "Chloe Park",        role: "Server Assistant",          dept: "Front of House", start: "2024-03-14", email: "cpark@nokonashville.com" },
  { name: "James Okafor",      role: "Server Assistant",          dept: "Front of House", start: "2024-04-01", email: "jokafor@nokonashville.com" },

  // ── Back of House ────────────────────────────────────────────────────────
  { name: "Hiroshi Yamamoto",  role: "Line Cook — Grill",         dept: "Back of House", start: "2020-07-01", email: "hyamamoto@nokonashville.com" },
  { name: "Elena Vasquez",     role: "Line Cook — Sauté",         dept: "Back of House", start: "2021-03-08", email: "evasquez@nokonashville.com" },
  { name: "Jerome Baptiste",   role: "Line Cook — Cold Station",  dept: "Back of House", start: "2021-06-15", email: "jbaptiste@nokonashville.com" },
  { name: "Yuki Matsuda",      role: "Line Cook — Pantry",        dept: "Back of House", start: "2022-02-01", email: "ymatsuda@nokonashville.com" },
  { name: "Ravi Kumar",        role: "Line Cook",                 dept: "Back of House", start: "2022-07-18", email: "rkumar@nokonashville.com" },
  { name: "Tanya Ford",        role: "Line Cook",                 dept: "Back of House", start: "2023-01-05", email: "tford@nokonashville.com" },
  { name: "Sebastian Diaz",    role: "Line Cook",                 dept: "Back of House", start: "2023-04-22", email: "sdiaz@nokonashville.com" },
  { name: "Monica Lee",        role: "Line Cook",                 dept: "Back of House", start: "2023-08-07", email: "mlee@nokonashville.com" },
  { name: "Patrick Dunn",      role: "Line Cook",                 dept: "Back of House", start: "2024-01-15", email: "pdunn@nokonashville.com" },
  { name: "Aaliyah Moore",     role: "Pastry Chef",               dept: "Back of House", start: "2021-09-01", email: "amoore@nokonashville.com" },
  { name: "Daniel Kim",        role: "Pastry Cook",               dept: "Back of House", start: "2022-04-10", email: "dkim@nokonashville.com" },
  { name: "Grace Huang",       role: "Prep Cook",                 dept: "Back of House", start: "2022-10-03", email: "ghuang@nokonashville.com" },
  { name: "Luca Romano",       role: "Prep Cook",                 dept: "Back of House", start: "2023-02-20", email: "lromano@nokonashville.com" },
  { name: "Keisha Thompson",   role: "Prep Cook",                 dept: "Back of House", start: "2023-06-12", email: "kthompson@nokonashville.com" },
  { name: "Victor Salazar",    role: "Prep Cook",                 dept: "Back of House", start: "2023-09-25", email: "vsalazar@nokonashville.com" },
  { name: "Brigid O'Sullivan", role: "Dishwasher / Utility",      dept: "Back of House", start: "2022-05-01", email: "bosullivan@nokonashville.com" },
  { name: "Andre White",       role: "Dishwasher / Utility",      dept: "Back of House", start: "2023-03-10", email: "awhite@nokonashville.com" },
  { name: "Mei-Lin Zhao",      role: "Dishwasher / Utility",      dept: "Back of House", start: "2023-11-01", email: "mzhao@nokonashville.com" },
  { name: "Elijah Grant",      role: "Dishwasher / Utility",      dept: "Back of House", start: "2024-02-05", email: "egrant@nokonashville.com" },
  { name: "Nadia Petrov",      role: "Kitchen Manager",           dept: "Back of House", start: "2021-05-17", email: "npetrov@nokonashville.com" },

  // ── Bar ──────────────────────────────────────────────────────────────────
  { name: "Tobias Roth",       role: "Head Bartender",            dept: "Bar",           start: "2019-09-01", email: "troth@nokonashville.com" },
  { name: "Alicia Santos",     role: "Bartender",                 dept: "Bar",           start: "2020-11-12", email: "asantos@nokonashville.com" },
  { name: "Noah Freeman",      role: "Bartender",                 dept: "Bar",           start: "2021-04-06", email: "nfreeman@nokonashville.com" },
  { name: "Yara Al-Rashid",    role: "Bartender",                 dept: "Bar",           start: "2022-01-18", email: "yalrashid@nokonashville.com" },
  { name: "Cole Henderson",    role: "Bartender",                 dept: "Bar",           start: "2022-06-29", email: "chenderson@nokonashville.com" },
  { name: "Tessa Nguyen",      role: "Bartender",                 dept: "Bar",           start: "2023-02-14", email: "tnguyen@nokonashville.com" },
  { name: "Isaiah Foster",     role: "Barback",                   dept: "Bar",           start: "2022-08-08", email: "ifoster@nokonashville.com" },
  { name: "Claudia Jimenez",   role: "Barback",                   dept: "Bar",           start: "2023-05-30", email: "cjimenez@nokonashville.com" },
  { name: "Ryan Blackwood",    role: "Barback",                   dept: "Bar",           start: "2023-09-11", email: "rblackwood@nokonashville.com" },
  { name: "Stella Park",       role: "Barback",                   dept: "Bar",           start: "2024-01-22", email: "spark@nokonashville.com" },

  // ── Operations ───────────────────────────────────────────────────────────
  { name: "Darius Jackson",    role: "Operations Coordinator",    dept: "Operations",    start: "2021-08-01", email: "djackson@nokonashville.com" },
  { name: "Hana Suzuki",       role: "Inventory Manager",         dept: "Operations",    start: "2022-03-15", email: "hsuzuki@nokonashville.com" },
  { name: "William Carter",    role: "Supply Chain Coordinator",  dept: "Operations",    start: "2022-07-07", email: "wcarter@nokonashville.com" },
  { name: "Paige Morris",      role: "Administrative Assistant",  dept: "Operations",    start: "2021-10-20", email: "pmorris@nokonashville.com" },
  { name: "Leo Garza",         role: "Facilities Coordinator",    dept: "Operations",    start: "2020-12-01", email: "lgarza@nokonashville.com" },
  { name: "Renee Powell",      role: "Bookkeeper",                dept: "Operations",    start: "2021-02-08", email: "rpowell@nokonashville.com" },
  { name: "Finn Callahan",     role: "IT & POS Support",          dept: "Operations",    start: "2022-09-19", email: "fcallahan@nokonashville.com" },
  { name: "Jade Washington",   role: "Marketing Coordinator",     dept: "Operations",    start: "2023-01-09", email: "jwashington@nokonashville.com" },
  { name: "Matteo Ferrari",    role: "Social Media Manager",      dept: "Operations",    start: "2022-11-14", email: "mferrari@nokonashville.com" },
  { name: "Camille Dupont",    role: "Graphic Designer",          dept: "Operations",    start: "2023-04-03", email: "cdupont@nokonashville.com" },

  // ── Events ───────────────────────────────────────────────────────────────
  { name: "Samantha Rhodes",   role: "Senior Events Coordinator", dept: "Events",        start: "2021-06-01", email: "srhodes@nokonashville.com" },
  { name: "Oliver Grant",      role: "Events Coordinator",        dept: "Events",        start: "2022-02-28", email: "ogrant@nokonashville.com" },
  { name: "Bianca Torres",     role: "Events Coordinator",        dept: "Events",        start: "2022-08-15", email: "btorres@nokonashville.com" },
  { name: "Drew Nakamura",     role: "Events Setup & Logistics",  dept: "Events",        start: "2023-03-07", email: "dnakamura@nokonashville.com" },
  { name: "Vivienne Lamont",   role: "Events Setup & Logistics",  dept: "Events",        start: "2023-07-19", email: "vlamont@nokonashville.com" },

  // ── Additional Front of House ─────────────────────────────────────────────
  { name: "Xavier Flores",     role: "Server",                    dept: "Front of House", start: "2024-03-01", email: "xflores@nokonashville.com" },
  { name: "Naomi Adeyemi",     role: "Server",                    dept: "Front of House", start: "2024-04-15", email: "nadeyemi@nokonashville.com" },
  { name: "Elliot Barnes",     role: "Server",                    dept: "Front of House", start: "2024-05-20", email: "ebarnes@nokonashville.com" },
  { name: "Iris Coleman",      role: "Server",                    dept: "Front of House", start: "2024-01-30", email: "icoleman@nokonashville.com" },
  { name: "Hugo Benitez",      role: "Food Runner",               dept: "Front of House", start: "2024-04-08", email: "hbenitez@nokonashville.com" },
  { name: "Serena Walsh",      role: "Food Runner",               dept: "Front of House", start: "2024-05-01", email: "swalsh@nokonashville.com" },
  { name: "Lorenzo Ricci",     role: "Host",                      dept: "Front of House", start: "2024-02-12", email: "lricci@nokonashville.com" },
  { name: "Penelope Shaw",     role: "Host",                      dept: "Front of House", start: "2024-03-25", email: "pshaw@nokonashville.com" },
  { name: "Archer Nguyen",     role: "Server Assistant",          dept: "Front of House", start: "2024-05-06", email: "anguyen@nokonashville.com" },
  { name: "Imani Reid",        role: "Server Assistant",          dept: "Front of House", start: "2024-06-01", email: "ireid@nokonashville.com" },

  // ── Additional Back of House ──────────────────────────────────────────────
  { name: "Ryusei Tanaka",     role: "Line Cook",                 dept: "Back of House", start: "2024-02-01", email: "rtanaka@nokonashville.com" },
  { name: "Camille Bernard",   role: "Line Cook",                 dept: "Back of House", start: "2024-03-18", email: "cbernard@nokonashville.com" },
  { name: "Ola Adebayo",       role: "Prep Cook",                 dept: "Back of House", start: "2024-04-22", email: "oadebayo@nokonashville.com" },
  { name: "Kasimir Nowak",     role: "Dishwasher / Utility",      dept: "Back of House", start: "2024-05-14", email: "knowak@nokonashville.com" },

  // ── Additional Bar ────────────────────────────────────────────────────────
  { name: "Ramona Castillo",   role: "Bartender",                 dept: "Bar",           start: "2024-02-20", email: "rcastillo@nokonashville.com" },
  { name: "Flynn McCarthy",    role: "Barback",                   dept: "Bar",           start: "2024-04-10", email: "fmccarthy@nokonashville.com" },

  // ── Additional Operations ─────────────────────────────────────────────────
  { name: "Zoe Hartman",       role: "HR Coordinator",            dept: "Operations",    start: "2023-08-01", email: "zhartman@nokonashville.com" },
  { name: "Malik Johnson",     role: "Operations Assistant",      dept: "Operations",    start: "2023-10-15", email: "mjohnson@nokonashville.com" },
  { name: "Ingrid Holm",       role: "Payroll Specialist",        dept: "Operations",    start: "2022-12-01", email: "iholm@nokonashville.com" },
  { name: "Barrett Young",     role: "Purchasing Coordinator",    dept: "Operations",    start: "2023-05-08", email: "byoung@nokonashville.com" },
];
