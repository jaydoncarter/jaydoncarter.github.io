// TODO: Finish implementing slideshow for index
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

// Image Slideshow
const images = [
      {src: "assets/meadow.jpg", title: "Apline meadow on the Forsyth backpacking trail in Pine Valley wilderness area." },
      {src: "assets/desert-morning.jpg", title: "A beautiful sunrise on Church Rocks MTB trail near St. George." },
      {src: "assets/hills.jpg", title: "Facing south-east from the top of the Breaks trail near Cedar City." },
      {src: "assets/snow-forest.jpg", title: "Taken while nordic skiing in Deer Hollow in Dixie National Forest." }
    ];

const imgElement = document.getElementById("randomImage");
const titleElement = document.getElementById("imageTitle");

function changeImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  imgElement.src = images[randomIndex].src;
  titleElement.textContent = images[randomIndex].title;
}

setInterval(changeImage, 5000);
changeImage();