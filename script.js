let campaigns = [];
const tbody = document.querySelector('#campaign-table tbody');
const title = document.getElementById('table-title');

function render(filter) {
  tbody.innerHTML = '';
  campaigns
    .filter(c => filter === 'all' || c.type === filter)
    .forEach(c => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${c.dsp}</td>
        <td>${c.campaignName}</td>
        <td class="right">${c.numberOfPo}</td>
        <td class="right">${c.impressionsYesterday}</td>
        <td class="right">${c.grossRevenueYesterday.toFixed(2)}</td>
        <td class="right">${c.impression}</td>
        <td class="right">${c.grossRevenue.toFixed(2)}</td>
        <td>${c.startDate}</td>
        <td>${c.endDate}</td>`;
      tr.addEventListener('click', () => {
        window.location = `campaign.html?id=${c.id}`;
      });
      tbody.appendChild(tr);
    });
  if (filter === 'direct') {
    title.textContent = 'Direct campaigns';
  } else if (filter === 'deal') {
    title.textContent = 'Deals';
  } else {
    title.textContent = 'All campaigns';
  }
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
    campaigns = data.concat(loadExtra());
    render('all');
  })
  .catch(err => console.error('Failed to load data', err));

document.querySelectorAll('.filter').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    render(a.dataset.filter);
  });
});
