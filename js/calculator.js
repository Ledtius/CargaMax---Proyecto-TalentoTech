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

const resultadoPantalla = document.getElementById("resultado");

function observadorOpcionDistancia() {
  let opcionSeleccionada =
    selectorUnidadesDistancia.options[selectorUnidadesDistancia.selectedIndex];

  opcionSeleccionadaValue = opcionSeleccionada.textContent.trim();

  // console.log(opcionSeleccionadaValue);

  return opcionSeleccionadaValue;
}

function observadorOpcionConsumo() {
  let opcionSeleccionada =
    selectorUnidadesConsumo.options[selectorUnidadesConsumo.selectedIndex];

  opcionSeleccionadaValue = opcionSeleccionada.textContent.trim();

  return opcionSeleccionadaValue;
}

function observadorOpcionPrecio() {
  let opcionSeleccionada =
    selectorUnidadesPrecio.options[selectorUnidadesPrecio.selectedIndex];

  let opcionSeleccionadaValue = opcionSeleccionada.textContent.trim();

  return opcionSeleccionadaValue;
}

// selectorUnidadesDistancia.addEventListener("change", observadorOpcionDistancia);

calculator.addEventListener("submit", function () {
  event.preventDefault();

  /* Valores de los inputs */

  const inputDistanciaValue = Number(inputDistancia.value);
  const inputConsumoValue = Number(inputConsumo.value);
  const inputPrecioValue = Number(inputPrecio.value);

  /* Declaracion de varibles de unidades */

  let valorDistancia;
  let valorConsumo;
  let valorPrecio;

  /* Defino las variables de convercion de unidades */

  let km = inputDistanciaValue;
  let mi = km * 1.60934;

  let kmPorL = inputConsumoValue;
  let LPor100Km = 100 / kmPorL;

  let copPorL = inputPrecioValue;
  let copPorGal = copPorL * 3.78541;

  // console.log(`Mi: ${mi}`);
  // console.log(`Km/L: ${kmPorL}`);
  // console.log(`L/100Km: ${LPor100Km}`);
  // console.log(`COP$/L: ${copPorL}`);
  // console.log(`COP$/Gal: ${copPorGal}`);

  /*Almaceno la unidad de la f(x) en la variable */

  let opcionDistancia = observadorOpcionDistancia();

  console.log(`Seleccionaste: ${opcionDistancia}`);

  /* Se hace la covercion */

  if (opcionDistancia === "Km") {
    /* Se llama la variable unidad y se hace la convercion */

    valorDistancia = km;
    console.log(`Km: ${valorDistancia}`);
  } else {
    valorDistancia = mi;
    console.log(`Mi: ${valorDistancia}`);
  }

  let opcionConsumo = observadorOpcionConsumo();

  console.log(`Seleccionaste: ${opcionConsumo}`);

  if (opcionConsumo === "Km/L") {
    valorConsumo = kmPorL;
    console.log(`Km/L: ${valorConsumo}`);
  } else {
    valorConsumo = LPor100Km;
    console.log(`L/100Km: ${valorConsumo}`);
  }

  let opcionPrecio = observadorOpcionPrecio();

  console.log(`Seleccionaste: ${opcionPrecio}`);

  if (opcionPrecio === "COP$/L") {
    valorPrecio = copPorL;
    console.log(`COP$/L: ${valorPrecio}`);
  } else {
    valorPrecio = copPorGal;
    console.log(`COP$/Gal: ${valorPrecio}`);
  }

  let resultado = (valorDistancia / valorConsumo) * valorPrecio;

  resultadoPantalla.innerHTML = resultado;
});

/* NOTA: */
/* Para los estilos si tengo que usar un addEventListener para cambiar el laberl y el placeholder del input */
