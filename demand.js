let demandCampaigns = [];
const dtbody = document.querySelector('#demand-table tbody');
const dtitle = document.getElementById('demand-title');

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
