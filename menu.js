const wrapper = document.getElementById('wrapper');
const opener = document.getElementById('menu-opener');
if (opener) {
  opener.addEventListener('click', e => {
    e.preventDefault();
    wrapper.classList.toggle('open');
  });
}
