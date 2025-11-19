// Track mouse movement + drop red dots on double-click

const box = document.getElementById("box");
const coordsBox = document.getElementById("coords");

box.addEventListener("mousemove", e => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  coordsBox.textContent = `X: ${x}, Y: ${y}`;
});

// Drop red dot at double-click
box.addEventListener("dblclick", e => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dot = document.createElement("div");
  dot.className = "red-dot";
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  box.appendChild(dot);
});
