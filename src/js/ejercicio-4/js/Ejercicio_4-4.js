// JavaScript Document

const enlace = document.getElementById("enlace");
enlace.addEventListener("click", handleHiddenParagraph);
function handleHiddenParagraph() {
  // COMPLETAR ESTA FUNCION
  const hiddenSpan = document.getElementById("adicional");
  hiddenSpan.className = "visible";

  const anchor = document.getElementById("enlace");
  anchor.className = "oculto";
}
