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