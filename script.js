// Scroll animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.animate').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('fade-in-up');
    }
  });
});
