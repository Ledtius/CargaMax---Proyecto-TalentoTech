
const distancia = document.getElementById("distancia");

const consumoVehicular = document.getElementById("consumo-vehicular");

const precioCombustible = document.getElementById("precio-combustible");

const btn = document.getElementById("btn");

const resultado = document.getElementById("resultado");
// alert(distancia * consumoVehicular);

function clickForm() {
    event.preventDefault();
    const distanciaValue = distancia.value;
    const consumoVehicularValue = consumoVehicular.value;
    const precioCombustibleValue = precioCombustible.value;
    
    const constoTotal =
    (distanciaValue / consumoVehicularValue) * precioCombustibleValue;
    
    
    resultado.textContent = constoTotal;
}

btn.addEventListener("click", clickForm);
