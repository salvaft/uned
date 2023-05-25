// JavaScript Document

// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla

document.body.onload = ponfecha;

function escribe(texto) {
  document.getElementById("cuadro_texto").innerHTML += texto;
}

function ponfecha() {
  // Aqui se tiene que poner el código que haga lo que pide el enunciado.
  const date = new Date();

  const monthName = months[date.getMonth()];
  const weekday = weekdays[date.getDay()];

  escribe(
    `Hoy es <b>${weekday}, ${date.getDate()} de ${monthName} de ${date.getFullYear()}</b>`
  );
  escribe(
    `Hoy es <b>${weekdayName(
      weekday
    )}, ${date.getDate()} de ${monthName} de ${date.getFullYear()}</b>`
  );
}

// Usando un objeto
const weekdays = {
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
  7: "Domingo",
};
// Usando un array
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Funcion usando switch que es el que menos me gusta
function weekdayName(n) {
  let dayName;
  console.log(n);
  switch (parseInt(n)) {
    case 1:
      dayName = "Lunes";
      break;
    case 2:
      dayName = "Martes";
      break;
    case 3:
      dayName = "Miercoles";
      break;
    case 4:
      dayName = "Jueves";
      break;
    case 5:
      dayName = "Viernes";
      break;
    case 6:
      dayName = "Sabado";
      break;
    case 7:
      dayName = "Domingo";
  }
  return dayName;
}
