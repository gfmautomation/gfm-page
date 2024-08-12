const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle("menu-open");
  hamburger.classList.toggle("menu-open");
}
