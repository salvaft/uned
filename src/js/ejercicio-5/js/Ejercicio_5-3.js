"use strict";
// JavaScript Document
const capaTexto = document.getElementById("capaTextoId");
const form = document.getElementById("form");
const input = document.getElementById("textoDNI");

function cambiarTexto() {
  capaTexto.innerText = "DNI completo";
}
function colorSuccess() {
  form.style.backgroundColor = "#81F7D8";
}
function colorError() {
  form.style.backgroundColor = "red";
}
function resetBg() {
  if (input.value.length === 0) {
    form.style.backgroundColor = "";
  }
}
input.addEventListener("keyup", comprobar);
input.addEventListener("input", resetBg);

function escribirLetra(dni) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
  const posicion = dni % 23;
  const letra = letras.charAt(posicion);
  input.value = `${dni}-${letra}`;
}
function comprobar() {
  if (input.value.length === 8) {
    const dni = parseInt(input.value);
    if (isNaN(input.value)) {
      colorError();
      capaTexto.innerText = "Input error";
      return;
    }
    escribirLetra(dni);
    cambiarTexto();
    colorSuccess();
  }
}
