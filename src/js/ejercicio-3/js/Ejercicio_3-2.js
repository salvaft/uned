// Escribir en este fichero las funciones factorial() y convertir() pedidas en el enunciado

function factorial(num) {
  // Input is type number so no isNaN validation required
  // parsing int straight away
  num = parseInt(num);
  if (num < 0) {
    return "Input no valido";
  } else if (num === 0) {
    return 1;
  } else {
    console.log("calculating factorial");
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }
}

function convertir(farenheit) {
  // Input is type number so no isNaN validation required
  return farenheit * 1.8 - 32;
}

const btn_Fahren = document.getElementById("btn-fahren");

btn_Fahren.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("idFahrenheit").value = convertir(
    document.getElementById("idCentigrados").value
  );
});
const btn_fact = document.getElementById("btn-fact");

btn_fact.addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("resultado").value = factorial(
    document.getElementById("num1").value
  );
});
