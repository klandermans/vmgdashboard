const form = document.getElementById('campaign-form');
const out = document.getElementById('output');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    out.textContent = JSON.stringify(data, null, 2);
    form.reset();
  });
}
