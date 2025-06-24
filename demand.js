let demandCampaigns = [];
const dtbody = document.querySelector('#demand-table tbody');
const dtitle = document.getElementById('demand-title');
const statsContainer = document.getElementById('demand-stats');

function draw(status) {
  dtbody.innerHTML = '';
  demandCampaigns
    .filter(c => status === 'all' || c.campaignState === status)
    .forEach(c => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${c.campaignName}</td>
        <td class="right">${c.campaignState}</td>
        <td class="right">${c.impression}</td>
        <td class="right">${c.grossRevenue.toFixed(2)}</td>`;
      tr.addEventListener('click', () => {
        window.location = `campaign.html?id=${c.id}`;
      });
      dtbody.appendChild(tr);
    });
  dtitle.textContent = status === 'all' ? 'All campaigns' : status.charAt(0).toUpperCase() + status.slice(1);
  showStats();
}

function showStats() {
  if (!statsContainer) return;
  const totals = demandCampaigns.reduce((acc, c) => {
    acc.imps += c.impression;
    acc.rev += c.grossRevenue;
    return acc;
  }, { imps: 0, rev: 0 });
  statsContainer.innerHTML = `
    <div class="stats-block">Campaigns ${demandCampaigns.length}</div>
    <div class="stats-block">Total imp ${totals.imps}</div>
    <div class="stats-block">Revenue €${totals.rev.toFixed(2)}</div>`;
}

function loadExtra() {
  try {
    return JSON.parse(localStorage.getItem('extraCampaigns')) || [];
  } catch (e) {
    return [];
  }
}

fetch('data.json')
  .then(r => r.json())
  .then(data => {
    demandCampaigns = data.concat(loadExtra());
    draw('all');
  })
  .catch(err => console.error(err));

document.querySelectorAll('.status').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    draw(a.dataset.status);
  });
});
