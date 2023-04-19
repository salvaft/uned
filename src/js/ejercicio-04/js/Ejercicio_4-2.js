// JavaScript Document

document.body.onload = ponhora;
// La función escribe() tiene un parámetro de entrada con una cadena de texto con el código
// HTML que se quiere mostrar dentro de la capa con ID "cuadro_texto". Esta función el alumno
// tiene que usarla pero no es necesario modificarla
function escribe(texto) {
  document.getElementById("cuadro_texto").innerHTML = texto;
}

function ponhora() {
  // Aqui se tiene que poner el código que haga lo que pide el enunciado.
  const date = new Date();
  const hora = date.getHours().toString().padStart(2, "0");
  const mins = date.getMinutes().toString().padStart(2, "0");
  const secs = date.getSeconds().toString().padStart(2, "0");
  escribe(`${hora}:${mins}:${secs}`);
  setTimeout(() => {
    ponhora();
  }, 500);
}
