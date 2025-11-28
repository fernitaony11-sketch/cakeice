// script.js
document.querySelector('img').addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.1)';
  this.style.transition = 'transform 0.3s ease';
});

document.querySelector('img').addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1)';
});
