/* ── Mobile nav toggle ── */
function toggleNav() {
  const nav = document.getElementById('site-nav');
  nav.classList.toggle('open');
}

/* Close nav when a link is clicked */
document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('site-nav').classList.remove('open');
  });
});

/* ── Team Directory ── */
function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function renderTeam(data) {
  const tbody = document.getElementById('team-tbody');
  const noResults = document.getElementById('no-results');
  const countEl  = document.getElementById('result-count');

  if (data.length === 0) {
    tbody.innerHTML = '';
    noResults.style.display = 'block';
    countEl.textContent = '0 results';
    return;
  }

  noResults.style.display = 'none';
  countEl.textContent = `${data.length} of ${TEAM_DATA.length} employees`;

  tbody.innerHTML = data.map(e => `
    <tr>
      <td>${e.name}</td>
      <td>${e.role}</td>
      <td><span class="dept-badge">${e.dept}</span></td>
      <td>${formatDate(e.start)}</td>
      <td><a href="mailto:${e.email}">${e.email}</a></td>
    </tr>
  `).join('');
}

function filterTeam() {
  const query = document.getElementById('search-input').value.toLowerCase().trim();
  const dept  = document.getElementById('dept-filter').value;

  const filtered = TEAM_DATA.filter(e => {
    const matchesDept  = !dept || e.dept === dept;
    const matchesQuery = !query ||
      e.name.toLowerCase().includes(query) ||
      e.role.toLowerCase().includes(query) ||
      e.dept.toLowerCase().includes(query) ||
      e.email.toLowerCase().includes(query);
    return matchesDept && matchesQuery;
  });

  // Sort by last name
  filtered.sort((a, b) => {
    const lastA = a.name.split(' ').pop();
    const lastB = b.name.split(' ').pop();
    return lastA.localeCompare(lastB);
  });

  renderTeam(filtered);
}

/* Initial render on page load */
document.addEventListener('DOMContentLoaded', () => {
  filterTeam();
});

/* ── Smooth active nav highlight on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));
