import './components/navbar.js';
import './components/hero.js';
import './components/services.js';
import './components/news.js';
import './components/accessibility-summary.js';
import './components/contact-form.js';
import './components/footer.js';

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  const shouldShowButton = window.scrollY > 500;
  backToTopButton.classList.toggle('is-visible', shouldShowButton);
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
