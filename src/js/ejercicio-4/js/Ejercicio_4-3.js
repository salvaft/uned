// JavaScript Document

window.onload = function () {
  // COMPLETAR ESTA FUNCION
  const anchorTags = document.querySelectorAll("p>a");
  // Numero de enlaces de la pagina
  const num = anchorTags.length;
  // Dirección a la que enlaza el TERCER enlace
  const thirdLink = anchorTags[2].href;
  // Numero de enlaces que NO enlazan a http://prueba
  const notPrueba = Array.from(anchorTags).filter((a) => {
    return !(a.href === "http://prueba/");
  }).length;
  // Número de enlaces del SEGUNDO párrafo
  const paragraphs = document.getElementsByTagName("p");
  const anchorTagsP2 = paragraphs[1].getElementsByTagName("a").length;

  document.getElementById(
    "informacion"
  ).innerHTML = `Número de enlaces de la página: ${num} (Sin contar el de navegación de vuelta)<br> 
  Dirección a la que enlaza el tercer enlace: ${thirdLink}<br>
  Numero de enlaces que no enlazan a http://prueba: ${notPrueba}<br>
  Número de enlaces del segundo párrafo: ${anchorTagsP2}<br>
  `;
};
