// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    document.querySelector('#main-header').style.opacity = 0.95;
  } else {
    document.querySelector('#main-header').style.opacity = 1.0;
  }
})