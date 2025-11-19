// q4-theme.js
// Theme switcher: sets body attribute using setAttribute, saves current theme in data-theme.

const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

// On load, restore theme if set
const savedTheme = body.getAttribute('data-theme') || 'light';
body.setAttribute('data-theme', savedTheme);

// Clicking a theme button
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.getAttribute('data-theme');
    // apply theme by setting custom attribute
    body.setAttribute('data-theme', theme);
  });
});
