/**
 * NOKO TEAM DIRECTORY DATA
 * ========================
 * To add or edit employees, update the TEAM_DATA array below.
 *
 * Each entry format:
 * { name: "First Last", role: "Job Title", dept: "Department", start: "YYYY-MM-DD", email: "email@nokobenefits.com" }
 *
 * Available departments:
 *   Front of House | Back of House | Bar | Management | Operations | Events
 */

const TEAM_DATA = [
  // ── Management ──────────────────────────────────────────────────────────
  { name: "Jordan Park",       role: "General Manager",           dept: "Management",    start: "2019-03-15", email: "jpark@nokobenefits.com" },
  { name: "Mia Tanaka",        role: "Assistant General Manager", dept: "Management",    start: "2020-06-01", email: "mtanaka@nokobenefits.com" },
  { name: "Rafael Ortega",     role: "HR Manager",                dept: "Management",    start: "2021-01-10", email: "rortega@nokobenefits.com" },
  { name: "Simone Delacroix",  role: "Director of Operations",    dept: "Operations",    start: "2020-09-20", email: "sdelacroix@nokobenefits.com" },
  { name: "Kenji Watanabe",    role: "Executive Chef",            dept: "Back of House", start: "2019-03-15", email: "kwatanabe@nokobenefits.com" },
  { name: "Priya Nair",        role: "Sous Chef",                 dept: "Back of House", start: "2020-04-12", email: "pnair@nokobenefits.com" },
  { name: "Marcus Bell",       role: "Bar Director",              dept: "Bar",           start: "2019-08-05", email: "mbell@nokobenefits.com" },
  { name: "Lily Chen",         role: "Events Manager",            dept: "Events",        start: "2021-02-14", email: "lchen@nokobenefits.com" },

  // ── Front of House ───────────────────────────────────────────────────────
  { name: "Amara Williams",    role: "Head Server",               dept: "Front of House", start: "2020-05-18", email: "awilliams@nokobenefits.com" },
  { name: "Declan Murphy",     role: "Server",                    dept: "Front of House", start: "2021-07-01", email: "dmurphy@nokobenefits.com" },
  { name: "Zara Ahmed",        role: "Server",                    dept: "Front of House", start: "2022-01-10", email: "zahmed@nokobenefits.com" },
  { name: "Tomás Reyes",       role: "Server",                    dept: "Front of House", start: "2022-03-22", email: "treyes@nokobenefits.com" },
  { name: "Nina Kowalski",     role: "Server",                    dept: "Front of House", start: "2021-11-15", email: "nkowalski@nokobenefits.com" },
  { name: "Cameron Ellis",     role: "Server",                    dept: "Front of House", start: "2023-02-01", email: "cellis@nokobenefits.com" },
  { name: "Isabelle Fontaine", role: "Server",                    dept: "Front of House", start: "2022-09-09", email: "ifontaine@nokobenefits.com" },
  { name: "Aaron Cho",         role: "Server",                    dept: "Front of House", start: "2023-04-17", email: "acho@nokobenefits.com" },
  { name: "Fatima Hassan",     role: "Server",                    dept: "Front of House", start: "2023-06-01", email: "fhassan@nokobenefits.com" },
  { name: "Dylan Scott",       role: "Server",                    dept: "Front of House", start: "2022-12-05", email: "dscott@nokobenefits.com" },
  { name: "Leila Patel",       role: "Food Runner",               dept: "Front of House", start: "2023-01-20", email: "lpatel@nokobenefits.com" },
  { name: "Owen Carroll",      role: "Food Runner",               dept: "Front of House", start: "2023-05-12", email: "ocarroll@nokobenefits.com" },
  { name: "Marisol Vega",      role: "Food Runner",               dept: "Front of House", start: "2022-08-30", email: "mvega@nokobenefits.com" },
  { name: "Ethan Brooks",      role: "Food Runner",               dept: "Front of House", start: "2024-01-08", email: "ebrooks@nokobenefits.com" },
  { name: "Jasmine King",      role: "Host",                      dept: "Front of House", start: "2022-06-14", email: "jking@nokobenefits.com" },
  { name: "Caleb Torres",      role: "Host",                      dept: "Front of House", start: "2023-03-01", email: "ctorres@nokobenefits.com" },
  { name: "Anika Singh",       role: "Host",                      dept: "Front of House", start: "2023-07-22", email: "asingh@nokobenefits.com" },
  { name: "Bryce Walker",      role: "Host",                      dept: "Front of House", start: "2024-02-19", email: "bwalker@nokobenefits.com" },
  { name: "Sophia Lim",        role: "Server Assistant",          dept: "Front of House", start: "2023-09-05", email: "slim@nokobenefits.com" },
  { name: "Marcus Davis",      role: "Server Assistant",          dept: "Front of House", start: "2023-10-11", email: "mdavis@nokobenefits.com" },
  { name: "Chloe Park",        role: "Server Assistant",          dept: "Front of House", start: "2024-03-14", email: "cpark@nokobenefits.com" },
  { name: "James Okafor",      role: "Server Assistant",          dept: "Front of House", start: "2024-04-01", email: "jokafor@nokobenefits.com" },

  // ── Back of House ────────────────────────────────────────────────────────
  { name: "Hiroshi Yamamoto",  role: "Line Cook — Grill",         dept: "Back of House", start: "2020-07-01", email: "hyamamoto@nokobenefits.com" },
  { name: "Elena Vasquez",     role: "Line Cook — Sauté",         dept: "Back of House", start: "2021-03-08", email: "evasquez@nokobenefits.com" },
  { name: "Jerome Baptiste",   role: "Line Cook — Cold Station",  dept: "Back of House", start: "2021-06-15", email: "jbaptiste@nokobenefits.com" },
  { name: "Yuki Matsuda",      role: "Line Cook — Pantry",        dept: "Back of House", start: "2022-02-01", email: "ymatsuda@nokobenefits.com" },
  { name: "Ravi Kumar",        role: "Line Cook",                 dept: "Back of House", start: "2022-07-18", email: "rkumar@nokobenefits.com" },
  { name: "Tanya Ford",        role: "Line Cook",                 dept: "Back of House", start: "2023-01-05", email: "tford@nokobenefits.com" },
  { name: "Sebastian Diaz",    role: "Line Cook",                 dept: "Back of House", start: "2023-04-22", email: "sdiaz@nokobenefits.com" },
  { name: "Monica Lee",        role: "Line Cook",                 dept: "Back of House", start: "2023-08-07", email: "mlee@nokobenefits.com" },
  { name: "Patrick Dunn",      role: "Line Cook",                 dept: "Back of House", start: "2024-01-15", email: "pdunn@nokobenefits.com" },
  { name: "Aaliyah Moore",     role: "Pastry Chef",               dept: "Back of House", start: "2021-09-01", email: "amoore@nokobenefits.com" },
  { name: "Daniel Kim",        role: "Pastry Cook",               dept: "Back of House", start: "2022-04-10", email: "dkim@nokobenefits.com" },
  { name: "Grace Huang",       role: "Prep Cook",                 dept: "Back of House", start: "2022-10-03", email: "ghuang@nokobenefits.com" },
  { name: "Luca Romano",       role: "Prep Cook",                 dept: "Back of House", start: "2023-02-20", email: "lromano@nokobenefits.com" },
  { name: "Keisha Thompson",   role: "Prep Cook",                 dept: "Back of House", start: "2023-06-12", email: "kthompson@nokobenefits.com" },
  { name: "Victor Salazar",    role: "Prep Cook",                 dept: "Back of House", start: "2023-09-25", email: "vsalazar@nokobenefits.com" },
  { name: "Brigid O'Sullivan", role: "Dishwasher / Utility",      dept: "Back of House", start: "2022-05-01", email: "bosullivan@nokobenefits.com" },
  { name: "Andre White",       role: "Dishwasher / Utility",      dept: "Back of House", start: "2023-03-10", email: "awhite@nokobenefits.com" },
  { name: "Mei-Lin Zhao",      role: "Dishwasher / Utility",      dept: "Back of House", start: "2023-11-01", email: "mzhao@nokobenefits.com" },
  { name: "Elijah Grant",      role: "Dishwasher / Utility",      dept: "Back of House", start: "2024-02-05", email: "egrant@nokobenefits.com" },
  { name: "Nadia Petrov",      role: "Kitchen Manager",           dept: "Back of House", start: "2021-05-17", email: "npetrov@nokobenefits.com" },

  // ── Bar ──────────────────────────────────────────────────────────────────
  { name: "Tobias Roth",       role: "Head Bartender",            dept: "Bar",           start: "2019-09-01", email: "troth@nokobenefits.com" },
  { name: "Alicia Santos",     role: "Bartender",                 dept: "Bar",           start: "2020-11-12", email: "asantos@nokobenefits.com" },
  { name: "Noah Freeman",      role: "Bartender",                 dept: "Bar",           start: "2021-04-06", email: "nfreeman@nokobenefits.com" },
  { name: "Yara Al-Rashid",    role: "Bartender",                 dept: "Bar",           start: "2022-01-18", email: "yalrashid@nokobenefits.com" },
  { name: "Cole Henderson",    role: "Bartender",                 dept: "Bar",           start: "2022-06-29", email: "chenderson@nokobenefits.com" },
  { name: "Tessa Nguyen",      role: "Bartender",                 dept: "Bar",           start: "2023-02-14", email: "tnguyen@nokobenefits.com" },
  { name: "Isaiah Foster",     role: "Barback",                   dept: "Bar",           start: "2022-08-08", email: "ifoster@nokobenefits.com" },
  { name: "Claudia Jimenez",   role: "Barback",                   dept: "Bar",           start: "2023-05-30", email: "cjimenez@nokobenefits.com" },
  { name: "Ryan Blackwood",    role: "Barback",                   dept: "Bar",           start: "2023-09-11", email: "rblackwood@nokobenefits.com" },
  { name: "Stella Park",       role: "Barback",                   dept: "Bar",           start: "2024-01-22", email: "spark@nokobenefits.com" },

  // ── Operations ───────────────────────────────────────────────────────────
  { name: "Darius Jackson",    role: "Operations Coordinator",    dept: "Operations",    start: "2021-08-01", email: "djackson@nokobenefits.com" },
  { name: "Hana Suzuki",       role: "Inventory Manager",         dept: "Operations",    start: "2022-03-15", email: "hsuzuki@nokobenefits.com" },
  { name: "William Carter",    role: "Supply Chain Coordinator",  dept: "Operations",    start: "2022-07-07", email: "wcarter@nokobenefits.com" },
  { name: "Paige Morris",      role: "Administrative Assistant",  dept: "Operations",    start: "2021-10-20", email: "pmorris@nokobenefits.com" },
  { name: "Leo Garza",         role: "Facilities Coordinator",    dept: "Operations",    start: "2020-12-01", email: "lgarza@nokobenefits.com" },
  { name: "Renee Powell",      role: "Bookkeeper",                dept: "Operations",    start: "2021-02-08", email: "rpowell@nokobenefits.com" },
  { name: "Finn Callahan",     role: "IT & POS Support",          dept: "Operations",    start: "2022-09-19", email: "fcallahan@nokobenefits.com" },
  { name: "Jade Washington",   role: "Marketing Coordinator",     dept: "Operations",    start: "2023-01-09", email: "jwashington@nokobenefits.com" },
  { name: "Matteo Ferrari",    role: "Social Media Manager",      dept: "Operations",    start: "2022-11-14", email: "mferrari@nokobenefits.com" },
  { name: "Camille Dupont",    role: "Graphic Designer",          dept: "Operations",    start: "2023-04-03", email: "cdupont@nokobenefits.com" },

  // ── Events ───────────────────────────────────────────────────────────────
  { name: "Samantha Rhodes",   role: "Senior Events Coordinator", dept: "Events",        start: "2021-06-01", email: "srhodes@nokobenefits.com" },
  { name: "Oliver Grant",      role: "Events Coordinator",        dept: "Events",        start: "2022-02-28", email: "ogrant@nokobenefits.com" },
  { name: "Bianca Torres",     role: "Events Coordinator",        dept: "Events",        start: "2022-08-15", email: "btorres@nokobenefits.com" },
  { name: "Drew Nakamura",     role: "Events Setup & Logistics",  dept: "Events",        start: "2023-03-07", email: "dnakamura@nokobenefits.com" },
  { name: "Vivienne Lamont",   role: "Events Setup & Logistics",  dept: "Events",        start: "2023-07-19", email: "vlamont@nokobenefits.com" },

  // ── Additional Front of House ─────────────────────────────────────────────
  { name: "Xavier Flores",     role: "Server",                    dept: "Front of House", start: "2024-03-01", email: "xflores@nokobenefits.com" },
  { name: "Naomi Adeyemi",     role: "Server",                    dept: "Front of House", start: "2024-04-15", email: "nadeyemi@nokobenefits.com" },
  { name: "Elliot Barnes",     role: "Server",                    dept: "Front of House", start: "2024-05-20", email: "ebarnes@nokobenefits.com" },
  { name: "Iris Coleman",      role: "Server",                    dept: "Front of House", start: "2024-01-30", email: "icoleman@nokobenefits.com" },
  { name: "Hugo Benitez",      role: "Food Runner",               dept: "Front of House", start: "2024-04-08", email: "hbenitez@nokobenefits.com" },
  { name: "Serena Walsh",      role: "Food Runner",               dept: "Front of House", start: "2024-05-01", email: "swalsh@nokobenefits.com" },
  { name: "Lorenzo Ricci",     role: "Host",                      dept: "Front of House", start: "2024-02-12", email: "lricci@nokobenefits.com" },
  { name: "Penelope Shaw",     role: "Host",                      dept: "Front of House", start: "2024-03-25", email: "pshaw@nokobenefits.com" },
  { name: "Archer Nguyen",     role: "Server Assistant",          dept: "Front of House", start: "2024-05-06", email: "anguyen@nokobenefits.com" },
  { name: "Imani Reid",        role: "Server Assistant",          dept: "Front of House", start: "2024-06-01", email: "ireid@nokobenefits.com" },

  // ── Additional Back of House ──────────────────────────────────────────────
  { name: "Ryusei Tanaka",     role: "Line Cook",                 dept: "Back of House", start: "2024-02-01", email: "rtanaka@nokobenefits.com" },
  { name: "Camille Bernard",   role: "Line Cook",                 dept: "Back of House", start: "2024-03-18", email: "cbernard@nokobenefits.com" },
  { name: "Ola Adebayo",       role: "Prep Cook",                 dept: "Back of House", start: "2024-04-22", email: "oadebayo@nokobenefits.com" },
  { name: "Kasimir Nowak",     role: "Dishwasher / Utility",      dept: "Back of House", start: "2024-05-14", email: "knowak@nokobenefits.com" },

  // ── Additional Bar ────────────────────────────────────────────────────────
  { name: "Ramona Castillo",   role: "Bartender",                 dept: "Bar",           start: "2024-02-20", email: "rcastillo@nokobenefits.com" },
  { name: "Flynn McCarthy",    role: "Barback",                   dept: "Bar",           start: "2024-04-10", email: "fmccarthy@nokobenefits.com" },

  // ── Additional Operations ─────────────────────────────────────────────────
  { name: "Zoe Hartman",       role: "HR Coordinator",            dept: "Operations",    start: "2023-08-01", email: "zhartman@nokobenefits.com" },
  { name: "Malik Johnson",     role: "Operations Assistant",      dept: "Operations",    start: "2023-10-15", email: "mjohnson@nokobenefits.com" },
  { name: "Ingrid Holm",       role: "Payroll Specialist",        dept: "Operations",    start: "2022-12-01", email: "iholm@nokobenefits.com" },
  { name: "Barrett Young",     role: "Purchasing Coordinator",    dept: "Operations",    start: "2023-05-08", email: "byoung@nokobenefits.com" },
];
