const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.bot-hd .menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});