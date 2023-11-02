console.log(JSON.parse(localStorage.getItem("business-data")));
console.log(JSON.parse(localStorage.getItem("searchData")));

const mobileMenu = document.getElementById("mobile-menu");
const burgerButton = document.getElementById("navbar-burger");

burgerButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");
});
