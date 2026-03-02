const iconMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector(".nav-links");
const menuItem = document.querySelectorAll(".nav-links li a");

iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("hide");
  closeMenu.classList.toggle("hide");
  menu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("hide");
  closeMenu.classList.toggle("hide");
  menu.classList.toggle("show");
});

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", () => {
    iconMenu.classList.toggle("hide");
    closeMenu.classList.toggle("hide");
    menu.classList.toggle("show");
  });
}
