/* Menu links */
const menuCheckbox = document.getElementById("hamburger-menu");
const menuLinks = document.querySelectorAll(".header__list-item-link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuCheckbox.checked = false;
  });
});
