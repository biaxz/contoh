const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navMenuItems = document.querySelectorAll('.nav-menu-item');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
