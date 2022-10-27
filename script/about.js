// Popup menu

const menuIcon = document.querySelector('.burger-image');
const hideIcon = document.querySelector('.close-image');
const menuBox = document.querySelector('.mobile-menu-box');
const menuItems = document.querySelectorAll('.mobile-menu-item');

menuIcon.addEventListener('click', () => {
  menuBox.classList.toggle('open-menu');
});

hideIcon.addEventListener('click', () => {
  menuBox.classList.toggle('open-menu');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuBox.classList.toggle('open-menu');
  });
});