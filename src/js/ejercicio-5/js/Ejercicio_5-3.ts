// JavaScript Document
function comprobar() {
  const input = document.getElementById("textoDNI") as HTMLInputElement;
  if (input.value.length === 8) {
    escribirLetra();
    cambiarTexto();
    cambiarColorFondo();
  }
}

function cambiarTexto() {
  document.getElementById("capaTextoId")!.innerHTML = "DNI completo";
}
function cambiarColorFondo() {
  document.getElementById("form")!.style.backgroundColor = "#81F7D8";
}
function escribirLetra() {
  const inputDni = <HTMLInputElement>document.getElementById("textoDNI");
  const dni = parseInt(inputDni.value);
  // Validation is not a requirement...
  const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
  const posicion = dni % 23;
  const letra = letras.charAt(posicion);
  inputDni.value = dni + "-" + letra;
}
