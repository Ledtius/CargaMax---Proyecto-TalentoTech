const distancia = document.getElementById("distancia");

const distanciaAlert = document.getElementById("input__alert");

const consumoVehicular = document.getElementById("consumo-vehicular");

const consumoVehicularAlert = document.getElementById("input__alert-2");

const precioCombustible = document.getElementById("precio-combustible");

const precioCombustibleAlert = document.getElementById("input__alert-3");

const btnCalculator = document.getElementById("main__btn");

const form = document.querySelector(".main__calculator");

const selectorUnidadesDistancia = document.querySelector("#unidades-distancia");

const inputDistancia = document.getElementById("distancia");

const selectorUnidadesConsumo = document.querySelector("#unidades-cv");

const inputConsumo = document.getElementById("consumo-vehicular");

const selectorUnidadesPrecio = document.getElementById("unidades-p/c");

const inputPrecio = document.getElementById("precio-combustible");

selectorUnidadesDistancia.addEventListener("change", function distancias() {
  const opcionSeleccionada =
    selectorUnidadesDistancia.options[selectorUnidadesDistancia.selectedIndex];

  const valorDistancia = opcionSeleccionada.textContent.trim();

  if (valorDistancia === "Millas") {
    const km = 1.60934;
  }
});

selectorUnidadesConsumo.addEventListener("change", function () {
  const opcionSeleccionada =
    selectorUnidadesConsumo.options[selectorUnidadesConsumo.selectedIndex];

  console.log(opcionSeleccionada.textContent.trim());
});

selectorUnidadesPrecio.addEventListener("change", function () {
  const opcionSeleccionada =
    selectorUnidadesPrecio.options[selectorUnidadesPrecio.selectedIndex];

  console.log(opcionSeleccionada.textContent.trim());
});

inputDistancia.addEventListener("input", function () {
  console.log(inputDistancia.value);
});

btnCalculator.addEventListener("click", function () {
  let inputDistanciaValue = Number(inputDistancia.value);
  let inputConsumoValue = Number(inputConsumo.value);
  event.preventDefault();
  console.log(inputDistanciaValue);
  console.log(inputConsumoValue);
});
