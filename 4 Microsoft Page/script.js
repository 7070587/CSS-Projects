const menuBtn = document.querySelector(".nav__menu-btn");
const mainMenu = document.querySelector(".nav__main-menu");

menuBtn.addEventListener("click", showMenu);

function showMenu() {
  mainMenu.classList.toggle("nav__main-menu-show");
}
