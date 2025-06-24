const form = document.getElementById('publisher-form');
const out = document.getElementById('publisher-output');

function savePublisher(data) {
  const stored = JSON.parse(localStorage.getItem('extraPublishers') || '[]');
  stored.push(data);
  localStorage.setItem('extraPublishers', JSON.stringify(stored));
}

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(form).entries());
    const record = {
      id: Date.now(),
      name: raw.name,
      type: raw.type,
      accountManager: raw.account,
      numberOfWebsites: Number(raw.sites)
    };
    savePublisher(record);
    out.textContent = JSON.stringify(record, null, 2);
    form.reset();
  });
}
