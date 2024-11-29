const distancia = document.getElementById("distancia");

const distanciaAlert = document.getElementById("input__alert");

const consumoVehicular = document.getElementById("consumo-vehicular");

const consumoVehicularAlert = document.getElementById("input__alert-2");

const precioCombustible = document.getElementById("precio-combustible");

const precioCombustibleAlert = document.getElementById("input__alert-3");

const btnCalculator = document.getElementById("main__btn");

const form = document.querySelector(".main__calculator");

const selectorUnidadesDistancia = document.querySelector(".main__select--1");

const unidadesDistancia = document.querySelectorAll(".main__option--distance");

// console.log(selectorUnidadesDistancia);
// console.log(unidadesDistancia);

const unidadHijo = selectorUnidadesDistancia.children[1];


selectorUnidadesDistancia.addEventListener("click", function (event) {
  if (event.target === unidadHijo) {
    console.log("Hi world");
  }
});
// console.log(unidadHijo);

// unidadHijo.addEventListener("click", function () {
//   console.log("Hi world");
// });

console.log();

function indice(item, index) {
  // console.log(`${item.value}\n${index}`);

  if (index === 1) {
    // console.log(item);

    let itemValue = item.value;

    item.addEventListener("click", function () {
      console.log("millas clickeadas");
    });

    // console.log(`${item.value}\n${index}`);
  }
}

unidadesDistancia.forEach(indice);

selectorUnidadesDistancia.addEventListener("click", function () {
  console.log("s");

  // function index(item, index) {
  //   console.log(item);
  //   console.log(index);
  // }
  // unidadesDistancia.forEach(index);
});
