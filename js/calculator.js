const distancia = document.getElementById("distancia");

const distanciaAlert = document.getElementById("input__alert");

const consumoVehicular = document.getElementById("consumo-vehicular");

const consumoVehicularAlert = document.getElementById("input__alert-2");

const precioCombustible = document.getElementById("precio-combustible");

const precioCombustibleAlert = document.getElementById("input__alert-3");

const btnCalculator = document.getElementById("main__btn");

const resultado = document.getElementById("resultado");
// alert(distancia * consumoVehicular);

function clickForm() {
  event.preventDefault();
  const distanciaValue = distancia.value;
  const consumoVehicularValue = consumoVehicular.value;
  const precioCombustibleValue = precioCombustible.value;

  if (!distanciaValue) {
    distanciaAlert.innerHTML =
      '<strong style="color:#ff8906">Ingrese un valor</storng>';
    console.log(distanciaAlert);
    // return;
  } else {
    distanciaAlert.innerHTML = "";
  }

  if (!precioCombustibleValue) {
    precioCombustibleAlert.innerHTML =
      '<strong style="color:#ff8906">Ingrese un valor</strong>';
    // return;
  } else {
    precioCombustibleAlert.innerHTML = "";
  }

  if (consumoVehicularValue === "") {
    consumoVehicularAlert.innerHTML =
      '<strong style="color:#ff8906">Ingrese un valor</strong>';
    return;
  } else {
    consumoVehicularAlert.innerHTML = "";
  }

  const consumoVehicularValueInt = Number(consumoVehicularValue);

  if (consumoVehicularValueInt === 0) {
    consumoVehicularAlert.innerHTML =
      '<strong style="color:red">Valor invalido</strong>';
    // return;
  }

  const constoTotal =
    (distanciaValue / consumoVehicularValue) * precioCombustibleValue;

  resultado.textContent = "$" + constoTotal + " COP";
}

btnCalculator.addEventListener("click", clickForm);
