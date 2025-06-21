// Interactive Navigation
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Update Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();