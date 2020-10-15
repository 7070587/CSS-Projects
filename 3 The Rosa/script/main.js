// show menu

const menuToggle = document.querySelector(".nav__menu-toggle-button");
const body = document.querySelector("body");

menuToggle.addEventListener("click", showNav);

function showNav() {
  body.classList.toggle("open");
}
