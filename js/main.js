// Interactive Navigation
const currentPath = window.location.pathname;

const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname;

  if (
    (linkPath === '/index.html' && currentPath === '/') ||
    linkPath === currentPath
  ) {
    link.classList.add('active');
  }
});

// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Light Mode Toggle
const checkbox = document.getElementById('theme-checkbox');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  }
});
