const formEl = document.getElementById('wizard-form');
const outputEl = document.getElementById('wizard-output');
let stepIndex = 0;
const steps = Array.from(document.querySelectorAll('.step'));

function showStep(i) {
  steps.forEach((s, idx) => s.classList.toggle('active', idx === i));
  stepIndex = i;
}

if (formEl) {
  formEl.addEventListener('click', e => {
    if (e.target.classList.contains('next')) {
      e.preventDefault();
      showStep(Math.min(stepIndex + 1, steps.length - 1));
    }
    if (e.target.classList.contains('prev')) {
      e.preventDefault();
      showStep(Math.max(stepIndex - 1, 0));
    }
  });

  formEl.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formEl).entries());
    outputEl.textContent = JSON.stringify(data, null, 2);
    showStep(0);
    formEl.reset();
  });
}
