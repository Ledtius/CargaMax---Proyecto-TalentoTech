/* Modal */

const contact__btn = document.getElementById("contact__btn");
const allInputs = document.querySelectorAll(".contact__form-label");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const modal = document.getElementById("modal");
const btnModal = document.querySelector(".contact__modal-btn");

/* Alertas del formmulario */

const nombreAlert = document.querySelector(".contact__alert-name");

const apellidoAlert = document.querySelector(".contact__alert-lastname");

const correoAlert = document.querySelector(".contact__alert-email");

const telefonoAlert = document.querySelector(".contact__alert-phone");

const mensajeAlert = document.querySelector(".contact__alert-message");

function clickBtn() {
  event.preventDefault();
  const nombreValue = nombre.value;
  const apellidoValue = apellido.value;
  const correoValue = correo.value;
  const telefonoValue = telefono.value;
  const mensajeValue = mensaje.value;

  if (!nombreValue) {
    nombreAlert.innerHTML =
      '<strong style= "color:#ff8906">Ingrese su nombre</strong>';
  } else {
    nombreAlert.innerHTML = "";
  }

  if (!apellidoValue) {
    apellidoAlert.innerHTML =
      '<strong style= "color:#ff8906">Ingrese su apellido</strong>';
  } else {
    apellidoAlert.innerHTML = "";
  }

  if (!correoValue) {
    correoAlert.innerHTML =
      '<strong style= "color:#ff8906">Ingrese su correo</strong>';
  } else {
    correoAlert.innerHTML = "";
  }

  if (!telefonoValue) {
    telefonoAlert.innerHTML =
      '<strong style="color:#ff8906">Ingrese su telefono</strong>';
  } else {
    telefonoAlert.innerHTML = "";
  }

  if (!mensajeValue) {
    mensajeAlert.innerHTML =
      '<strong style="color:#ff8906">Ingrese su mensaje</strong>';
  } else {
    mensajeAlert.innerHTML = "";
  }

  if (
    !nombreValue ||
    !apellidoValue ||
    !correoValue ||
    !telefonoValue ||
    !mensajeValue
  ) {
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

/* 21px */

contact__btn.addEventListener("click", clickBtn);
btnModal.addEventListener("click", closeBtn);
