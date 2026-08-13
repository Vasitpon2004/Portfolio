// Show the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle the mobile menu when the button is clicked
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

// Close the mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
  });
});