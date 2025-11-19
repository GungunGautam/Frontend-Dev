// q5-gallery.js
// Image gallery with modal preview, close on outside click, stopPropagation for inner clicks.

const gallery = document.getElementById('gallery');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalImage = document.getElementById('modalImage');

// Click handler on gallery (event delegation)
gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img.thumb');
  if (!img) return;
  openModal(img.src, img.alt);
});

function openModal(src, alt) {
  modalImage.src = src.replace('/200/130', '/800/520') || src; // try larger placeholder
  modalImage.alt = alt || 'preview';
  modalOverlay.hidden = false;
}

// Clicking overlay closes modal
modalOverlay.addEventListener('click', () => {
  closeModal();
});

// Prevent clicks inside modal content from closing
modalContent.addEventListener('click', (e) => {
  e.stopPropagation(); // important: stops overlay click handler
});

// Close modal (also clears src)
function closeModal() {
  modalOverlay.hidden = true;
  modalImage.src = '';
}

// Escape key closes modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modalOverlay.hidden) closeModal();
});
