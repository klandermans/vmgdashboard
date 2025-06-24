let publishers = [];
const pbody = document.querySelector('#publishers-table tbody');
const statsContainer = document.getElementById('publishers-stats');

function renderPublishers() {
  pbody.innerHTML = '';
  publishers.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>${p.type}</td>
      <td>${p.accountManager}</td>
      <td class="right">${p.numberOfWebsites}</td>`;
    tr.addEventListener('click', () => {
      window.location = `publisher.html?id=${p.id}`;
    });
    pbody.appendChild(tr);
  });
  showStats();
}

function loadExtra() {
  try {
    return JSON.parse(localStorage.getItem('extraPublishers')) || [];
  } catch (e) {
    return [];
  }
}

fetch('publishers.json')
  .then(r => r.json())
  .then(data => {
    publishers = data.concat(loadExtra());
    renderPublishers();
  })
  .catch(err => console.error(err));

function showStats() {
  if (!statsContainer) return;
  const totalSites = publishers.reduce((a, p) => a + p.numberOfWebsites, 0);
  statsContainer.innerHTML = `
    <div class="stats-block">Publishers ${publishers.length}</div>
    <div class="stats-block">Websites ${totalSites}</div>`;
}
