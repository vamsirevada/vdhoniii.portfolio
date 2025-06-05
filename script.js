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

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 // Trigger when 30% of the element is visible
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Intersection Observer for Fade-in Animation
const fadeInElements = document.querySelectorAll('.fade-in-element'); // Select elements with this class

const fadeInObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 10% of the element is visible
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
}, fadeInObserverOptions);

fadeInElements.forEach(element => {
  fadeInObserver.observe(element);
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