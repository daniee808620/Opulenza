const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menuContent');
const closeMenu = document.getElementById('closeMenu');

// Open the menu
hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  setTimeout(() => {
    menu.style.transform = 'translateX(0)';
  }, 10);
});

// Close the menu
closeMenu.addEventListener('click', () => {
  menu.style.transform = 'translateX(100%)';
  setTimeout(() => {
    menu.style.display = 'none';
  }, 300); // Wait for the animation to finish
});
