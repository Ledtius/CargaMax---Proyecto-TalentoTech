const distancia = document.getElementById("distancia");

const distanciaAlert = document.getElementById("input__alert");

const consumoVehicular = document.getElementById("consumo-vehicular");

const consumoVehicularAlert = document.getElementById("input__alert-2");

const precioCombustible = document.getElementById("precio-combustible");

const precioCombustibleAlert = document.getElementById("input__alert-3");

const btnCalculator = document.getElementById("main__btn");

const form = document.querySelector(".main__calculator");

const selects = document.querySelectorAll(".main__select");

const select = document.querySelector(".main__select");

const options = document.querySelectorAll(".main__option");
const option = document.querySelector(".main__option");

function optionsValues(unit, index) {
  /* Seleccion de las opciones dentro del select */
  if (index <= 1) {
    console.log(`Unit: ${unit.value}\nIndex: ${index}`);

    option.addEventListener("click", function sadf() {
      console.log("Entro");
      if (index === 1) {
        console.log(`Elejiste millas:${unit.value}`);
      }
    });
  }

  // console.log(unit);

  // if (index === 2 && index < 5) {
  //   console.log(`Unit: ${unit.value}\nIndex: ${index}`);
  // }
}

function selectsValues(topic, index) {
  // console.log(`Topic: ${topic.id}\nIndex: ${index}`);

  // if (index === 0) {
  //   topic.addEventListener("click", function asd() {
  //     options.forEach(optionsValues);
  //   });
  // }
  if (index === 0) {
    topic.addEventListener("click", function asd() {
      options.forEach(optionsValues);
    });
  }

  // select.addEventListener("click", selectGeneral);
}
selects.forEach(selectsValues);

function selectGeneral() {}

selectGeneral();

function submitForm() {
  /* Calcular valores de entrada */

  event.preventDefault();

  console.log(options);
  alert("Se envio el formulario");
}

form.addEventListener("submit", submitForm);
