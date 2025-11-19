// q2-charcounter.js
// Live character counter with warning and preventDefault behavior.

const MAX_CHARS = 100;
const WARNING_THRESHOLD = 20; // when remaining <= 20 -> yellow
const messageBox = document.getElementById('messageBox');
const remainingEl = document.getElementById('remaining');
const resetBtn = document.getElementById('resetBtn');

function updateRemainingCount() {
  const used = messageBox.value.length;
  const remaining = Math.max(0, MAX_CHARS - used);
  remainingEl.textContent = remaining;

  // update styling on the parent .status
  const status = remainingEl.parentElement;
  status.classList.remove('warning', 'danger');

  if (remaining === 0) {
    status.classList.add('danger');
  } else if (remaining <= WARNING_THRESHOLD) {
    status.classList.add('warning');
  }
}

// Prevent further typing when at limit using keydown preventDefault
messageBox.addEventListener('keydown', (e) => {
  const atLimit = messageBox.value.length >= MAX_CHARS;
  const isControlKey = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'].includes(e.key);
  // Allow navigation/deletion keys even at limit
  if (atLimit && !isControlKey && !e.ctrlKey && !e.metaKey && !e.altKey) {
    e.preventDefault();
  }
});

// paste should also be constrained
messageBox.addEventListener('paste', (e) => {
  const pasteText = (e.clipboardData || window.clipboardData).getData('text');
  const allowed = MAX_CHARS - messageBox.value.length;
  if (pasteText.length > allowed) {
    // insert only allowed amount
    e.preventDefault();
    const slice = pasteText.slice(0, allowed);
    const start = messageBox.selectionStart;
    const end = messageBox.selectionEnd;
    const newValue = messageBox.value.slice(0, start) + slice + messageBox.value.slice(end);
    messageBox.value = newValue;
    updateRemainingCount();
  }
});

messageBox.addEventListener('input', updateRemainingCount);

// Reset button
resetBtn.addEventListener('click', () => {
  messageBox.value = '';
  updateRemainingCount();
});

// Initialize
updateRemainingCount();
