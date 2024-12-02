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

selectorUnidadesDistancia.addEventListener("change", function distancias() {
  const selectedOption =
    selectorUnidadesDistancia.options[selectorUnidadesDistancia.selectedIndex];

  const valorDistancia = selectedOption.textContent.trim();

  if (valorDistancia === "Millas") {
    const km = 1.60934;
  }
});

selectorUnidadesConsumo.addEventListener("change", fun);

btnCalculator.addEventListener("click", function () {
  let inputDistanciaValue = Number(inputDistancia.value);
  event.preventDefault();
  console.log(inputDistanciaValue);
});
