// script.js
document.querySelectorAll('.menu-image').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1)';
    item.style.transition = 'transform 0.3s ease';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale
