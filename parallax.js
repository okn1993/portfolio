// Simple parallax for the hero background
(function () {
  const bg = document.querySelector('.hero__bg');
  if (!bg) return;

  function onScroll() {
    const y = window.scrollY;
    bg.style.transform = 'translateY(' + (y * 0.35) + 'px)';
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
