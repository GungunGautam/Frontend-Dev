// q3-multistep.js
// Simple 3-step form with validation, Next/Back, and summary.

const form = document.getElementById('multiStepForm');
const steps = Array.from(document.querySelectorAll('.step'));
const summaryEl = document.getElementById('summary');
const summaryContent = document.getElementById('summaryContent');
const editAllBtn = document.getElementById('editAllBtn');

let currentStepIndex = 0;

function showStep(index) {
  steps.forEach((s, i) => {
    s.hidden = i !== index;
  });
  currentStepIndex = index;
  summaryEl.hidden = true;
}

function validateStep(index) {
  const inputs = Array.from(steps[index].querySelectorAll('input'));
  return inputs.every((input) => input.reportValidity ? input.reportValidity() !== false : input.checkValidity());
}

// wire next buttons
document.querySelectorAll('.next-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const idx = currentStepIndex;
    if (validateStep(idx)) {
      const next = idx + 1;
      if (next < steps.length) {
        showStep(next);
      }
    }
  });
});

// wire back buttons
document.querySelectorAll('.back-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const prev = Math.max(0, currentStepIndex - 1);
    showStep(prev);
  });
});

// submit -> show summary
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // validate final step as well
  if (!validateStep(currentStepIndex)) return;

  const formData = new FormData(form);
  const summary = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: '●'.repeat((formData.get('password') || '').length),
  };

  summaryContent.textContent = JSON.stringify(summary, null, 2);
  summaryEl.hidden = false;
  // hide all steps
  steps.forEach(s => s.hidden = true);
});

// Edit all -> go back to step 1
editAllBtn.addEventListener('click', () => {
  showStep(0);
});

// initialize
showStep(0);
