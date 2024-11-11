/* Menu links */
const menuCheckbox = document.getElementById("hamburger-menu");
const menuLinks = document.querySelectorAll(".header__list-item-link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuCheckbox.checked = false;
  });
});


const contactContent = document.querySelector(".header__contact-content");
const navContent = document.querySelector(".header__nav-content");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    contactContent.classList.add("oculto");
  } else {
    contactContent.classList.remove("oculto");
  }
});

