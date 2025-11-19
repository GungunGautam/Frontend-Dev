// q1-products.js
// Dynamic Product List Manager using event delegation, inline edit, auto-save on outside click.

const productInput = document.getElementById('productInput');
const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');

let editingItem = null; // currently editing <li>

// create a product <li> element
function createProductListItem(name) {
  const li = document.createElement('li');
  li.className = 'product-item';
  li.setAttribute('data-name', name);

  const nameSpan = document.createElement('span');
  nameSpan.className = 'product-name';
  nameSpan.textContent = name;
  nameSpan.setAttribute('tabindex', '0'); // make focusable

  const controls = document.createElement('div');

  const editBtn = document.createElement('button');
  editBtn.className = 'btn edit-btn';
  editBtn.textContent = 'Edit';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn delete-btn';
  deleteBtn.textContent = 'Delete';

  controls.append(editBtn, deleteBtn);
  li.append(nameSpan, controls);
  return li;
}

// Add product handler
function addProduct() {
  const value = productInput.value.trim();
  if (!value) return;
  const li = createProductListItem(value);
  productList.appendChild(li);
  productInput.value = '';
  productInput.focus();
}

addBtn.addEventListener('click', addProduct);
productInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addProduct();
});

// Event delegation for Edit and Delete
productList.addEventListener('click', (e) => {
  const editBtn = e.target.closest('.edit-btn');
  const deleteBtn = e.target.closest('.delete-btn');
  const clickedLi = e.target.closest('li');

  if (deleteBtn && clickedLi) {
    // Delete product
    clickedLi.remove();
    if (editingItem === clickedLi) editingItem = null;
  } else if (editBtn && clickedLi) {
    // Start inline editing
    startEditing(clickedLi);
  }
});

// Start editing inline: replace span with input
function startEditing(li) {
  // If another item is being edited, save it first
  if (editingItem && editingItem !== li) {
    finishEditing(editingItem);
  }
  if (editingItem === li) return; // already editing

  const nameSpan = li.querySelector('.product-name');
  const currentValue = nameSpan.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'inline-input';
  input.value = currentValue;
  input.style.width = '100%';

  nameSpan.replaceWith(input);
  li.classList.add('editing');
  input.focus();
  // save reference
  editingItem = li;

  // handle Enter to save, Escape to cancel
  input.addEventListener('keydown', inlineInputKeydown);
  // handle blur to finish editing
  input.addEventListener('blur', () => finishEditing(li));
}

function inlineInputKeydown(e) {
  if (e.key === 'Enter') {
    // Prevent blur from interfering: explicitly finish
    finishEditing(editingItem);
  } else if (e.key === 'Escape') {
    // cancel edit (restore old text)
    cancelEditing(editingItem);
  }
}

// Finish editing and save
function finishEditing(li) {
  if (!li) return;
  const input = li.querySelector('.inline-input');
  if (!input) return;
  const newValue = input.value.trim() || 'Untitled Product';

  const nameSpan = document.createElement('span');
  nameSpan.className = 'product-name';
  nameSpan.textContent = newValue;
  nameSpan.setAttribute('tabindex', '0');

  input.replaceWith(nameSpan);
  li.setAttribute('data-name', newValue);
  li.classList.remove('editing');
  editingItem = null;
}

// Cancel editing (restore original value)
function cancelEditing(li) {
  if (!li) return;
  const input = li.querySelector('.inline-input');
  if (!input) return;
  const original = li.getAttribute('data-name') || 'Untitled Product';

  const nameSpan = document.createElement('span');
  nameSpan.className = 'product-name';
  nameSpan.textContent = original;
  nameSpan.setAttribute('tabindex', '0');

  input.replaceWith(nameSpan);
  li.classList.remove('editing');
  editingItem = null;
}

// Auto-save when clicking outside any edited item
document.addEventListener('click', (e) => {
  if (!editingItem) return;
  const clickedInsideEditing = editingItem.contains(e.target);
  if (!clickedInsideEditing) {
    finishEditing(editingItem);
  }
});

// Optional: double-click the name to edit
productList.addEventListener('dblclick', (e) => {
  const li = e.target.closest('li');
  if (li) startEditing(li);
});
