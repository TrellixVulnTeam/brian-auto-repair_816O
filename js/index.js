// Mobile Menu
let hamburger = document.querySelector(".header__hamburger");
let mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu--active");
});

console.log(hamburger);
