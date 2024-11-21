/* Desaparicion del menu al clickear los links - movil */
const menuCheckbox = document.getElementById("hamburger-menu");
const menuLinks = document.querySelectorAll(".header__list-item-link");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuCheckbox.checked = false;
  });
});

/* Desaparicion del area de contacto al scrollear - pc */
const contactContent = document.querySelector(".header__contact-content");
const navContent = document.querySelector(".header__nav-content");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    contactContent.classList.add("oculto");
  } else {
    contactContent.classList.remove("oculto");
  }
});

/* Contacto boton y modal */

const btn = document.getElementById("contact__btn");
const allInputs = document.querySelectorAll(".contact__form-label");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const modal = document.getElementById("modal");
const btnModal = document.querySelector(".contact__modal-btn");

console.log(btnModal);
console.log(telefono);
console.log(apellido);
console.log(nombre);
console.log(mensaje);
console.log(correo);

function clickBtn() {
  event.preventDefault();
  const nombreValue = nombre.value;
  const apellidoValue = apellido.value;
  const correoValue = correo.value;
  const telefonoValue = telefono.value;
  const mensajeValue = mensaje.value;

  if (
    !nombreValue ||
    !apellidoValue ||
    !correoValue ||
    !telefonoValue ||
    !mensajeValue
  ) {
    console.log("return;");
    return;
  } else {
    modal.style.opacity = "1";
    modal.style.pointerEvents = "unset";
  }
}

function closeBtn() {
  modal.style.opacity = "0";
  modal.style.pointerEvents = "none";

  nombre.value = "";
   apellido.value = "";
   telefono.value = "";
   correo.value = "";
   mensaje.value = "";
}

btn.addEventListener("click", clickBtn);
btnModal.addEventListener("click", closeBtn);
