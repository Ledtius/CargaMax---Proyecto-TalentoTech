const distancia = document.getElementById("distancia");

const distanciaAlert = document.getElementById("input__alert");

const consumoVehicular = document.getElementById("consumo-vehicular");

const consumoVehicularAlert = document.getElementById("input__alert-2");

const precioCombustible = document.getElementById("precio-combustible");

const precioCombustibleAlert = document.getElementById("input__alert-3");

const btnCalculator = document.getElementById("main__btn");

const calculator = document.querySelector(".main__calculator");

const selectorUnidadesDistancia = document.querySelector("#unidades-distancia");

const inputDistancia = document.getElementById("distancia");

const selectorUnidadesConsumo = document.querySelector("#unidades-cv");

const inputConsumo = document.getElementById("consumo-vehicular");

const selectorUnidadesPrecio = document.getElementById("unidades-p/c");

const inputPrecio = document.getElementById("precio-combustible");

calculator.addEventListener("submit", function () {
  event.preventDefault();

  /* Valores de los inputs */

  const inputDistanciaValue = Number(inputDistancia.value);
  const inputConsumoValue = Number(inputConsumo.value);
  const inputPrecioValue = Number(inputPrecio.value);

  /* Convercion de unidades */

  let km = inputDistanciaValue;
  let mi = km * 1.60934;

  let kmPorL = inputConsumoValue;
  let LPor100Km = 100 / kmPorL;

  let copPorL = inputPrecioValue;
  let copPorGal = copPorL * 3.78541;

  console.log(`Km: ${km}`);
  console.log(`Mi: ${mi}`);
  console.log(`Km/L: ${kmPorL}`);
  console.log(`L/100Km: ${LPor100Km}`);
  console.log(`COP$/L: ${copPorL}`);
  console.log(`COP$/Gal: ${copPorGal}`);
});
