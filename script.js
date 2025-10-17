
// Brian Pham – Portfolio scripts
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  const btn = document.getElementById('menu-button');
  const nav = document.getElementById('mobile-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => nav.classList.toggle('hidden'));
  }
});
