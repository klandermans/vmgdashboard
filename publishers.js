let publishers = [];
const pbody = document.querySelector('#publishers-table tbody');

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
    pbody.appendChild(tr);
  });
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
