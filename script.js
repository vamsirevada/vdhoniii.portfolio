// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active section in nav
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Contact form validation (basic)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    e.preventDefault();
  }
}); 