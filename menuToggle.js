const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menuContent');
const closeMenu = document.getElementById('closeMenu');

// Open the menu
hamburger.addEventListener('click', () => {
  menu.classList.add('show');  // Add the class to show the menu
});

// Close the menu
closeMenu.addEventListener('click', () => {
  menu.classList.remove('show');  // Remove the class to hide the menu
});
