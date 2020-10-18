// show menu

const menuToggle = document.querySelector(".nav__menu-toggle-button");
const body = document.querySelector("body");

menuToggle.addEventListener("click", showNav);

function showNav() {
  body.classList.toggle("open");
}

// use 套件 ScrollReveal.js or AOS - Animate On Scroll library
// animate scroll reveal
window.sr = ScrollReveal();
sr.reveal(".animate__left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate__right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate__top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate__bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
