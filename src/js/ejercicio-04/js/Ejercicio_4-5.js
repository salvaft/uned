// JavaScript Document
const form = document.getElementById("form--dni");

form.onsubmit = (e) => {
  e.preventDefault();
  obtenerLetra();
};

function obtenerLetra() {
  //  TRWAGMYFPDXBNJZSQVHLCKET
  // No se pide verificar el input
  const alfabetoDNI = "TRWAGMYFPDXBNJZSQVHLCKET";
  const inputField = document.getElementsByName("DNI")[0][0];
  const dni = parseInt(inputField.value);
  const letra = alfabetoDNI.charAt(dni % 23);

  inputField.value = `${dni}${letra} `;
}
