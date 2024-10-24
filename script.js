const menuActive = document.querySelector(".menu");
const burger = document.querySelector(".burger-btn");

function mergeMenu() {
  menuActive.classList.toggle("hidden-menu");
}

burger.addEventListener("click", mergeMenu);
