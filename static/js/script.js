// Activar clase active en el nav según la sección visible
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  const sections = Array.from(navLinks).map(l => document.querySelector(l.getAttribute('href')));

  function onScroll() {
    const scrollPos = window.scrollY + 90;
    sections.forEach((sec, idx) => {
      if (!sec) return;
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(n => n.classList.remove('active'));
        navLinks[idx].classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});