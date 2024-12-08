const distanciaUnit = document.querySelector(".main__unit-chage--distace");

const distancia = document.getElementById("distancia");

const distanciaAlert = document.getElementById("input__alert");

const consumoVehicular = document.getElementById("consumo-vehicular");

const consumoVehicularUnit = document.querySelector(".main__unit-chage--spend");

const consumoVehicularAlert = document.getElementById("input__alert-2");

const precioCombustible = document.getElementById("precio-combustible");

const precioCombustibleUnit = document.querySelector(
  ".main__unit-chage--moneyl"
);

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

/* Alertas de ingreso de valores */

btnCalculator.addEventListener("click", function () {
  if (!inputDistancia.value) {
    distanciaAlert.innerHTML =
      '<strong style="color:#ff8906">Ingrese valor</strong>';
  } else {
    distanciaAlert.innerHTML = "";
  }

  if (!consumoVehicular.value) {
    consumoVehicularAlert.innerHTML =
      '<strong style="color:#ff8906">Ingrese valor</strong>';
  } else if (Number(consumoVehicular.value) === 0) {
    consumoVehicularAlert.innerHTML =
      '<strong style= "color:#9d111e">Valor invalido</strong>';
  } else {
    consumoVehicularAlert.innerHTML = "";
  }

  if (!precioCombustible.value) {
    precioCombustibleAlert.innerHTML =
      '<strong style= "color:#ff8906">Ingrese valor</strong>';
  } else {
    precioCombustibleAlert.innerHTML = "";
  }
});

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

  console.log(valorDistancia);

  if (valorConsumo === 0) return;

  let resultado = (valorDistancia / valorConsumo) * valorPrecio;

  resultadoPantalla.innerText = "$ " + resultado + " COP";
});

/* Escuchadores de cambios de selects a labels*/

selectorUnidadesDistancia.addEventListener("change", function () {
  let opcionSeleccionada =
    selectorUnidadesDistancia.options[selectorUnidadesDistancia.selectedIndex];

  if (opcionSeleccionada.textContent.trim() === "Mi") {
    inputDistancia.setAttribute("placeholder", "Mi");
    distanciaUnit.innerText = " (Mi)";
  } else {
    inputDistancia.setAttribute("placeholder", "Km");
    distanciaUnit.innerText = " (Km)";
  }
});

selectorUnidadesConsumo.addEventListener("change", function () {
  let opcionSeleccionada =
    selectorUnidadesConsumo.options[selectorUnidadesConsumo.selectedIndex];

  if (opcionSeleccionada.textContent.trim() === "L/100Km") {
    consumoVehicularUnit.innerText = "(L/100km)";
    inputConsumo.setAttribute("placeholder", "L/100km");
  } else {
    consumoVehicularUnit.innerText = "(Km/L)";
    inputConsumo.setAttribute("placeholder", "Km/L");
  }
});

selectorUnidadesPrecio.addEventListener("change", function () {
  let opcionSeleccionada =
    selectorUnidadesPrecio.options[selectorUnidadesPrecio.selectedIndex];

  if (opcionSeleccionada.textContent.trim() === "COP$/Gal") {
    precioCombustibleUnit.innerText = "(COP$/Gal)";
    inputPrecio.setAttribute("placeholder", "COP$/Gal");
  } else {
    precioCombustibleUnit.innerText = "(COP$/L)";
    inputPrecio.setAttribute("placeholder", "COP$/L");
  }
});


