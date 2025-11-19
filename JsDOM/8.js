// Custom dropdown (no select tag)

const dropBtn = document.getElementById("dropBtn");
const options = document.getElementById("options");
const dropdown = document.getElementById("dropdown");

// Toggle dropdown
dropBtn.addEventListener("click", () => {
  options.hidden = !options.hidden;
});

// Click option
options.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    dropBtn.textContent = e.target.dataset.value;
    options.hidden = true;
  }
});

// Close dropdown on outside click (capturing phase)
document.addEventListener("click", e => {
  if (!dropdown.contains(e.target)) {
    options.hidden = true;
  }
}, true); // <-- capturing phase
