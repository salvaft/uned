// JavaScript Document
// En vez de ponerlo inline se puede hacer en el scirpt. Otra forma usando addEventListener
window.addEventListener("load", () => {
  setInterval(cambiarFoto, 2000);
});

import fotoDerecho from "../img/fotoDerecho.webp";
import fotoGeografiaHistoria from "../img/fotoGeografiaHistoria.webp";
import fotoFilosofia from "../img/fotoFilosofia.webp";
import fotoPsicologia from "../img/fotoPsicologia.webp";
import fotoIndustriales130 from "../img/fotoIndustriales130.webp";
import fotoCiencias from "../img/fotoCiencias.webp";
import fotoEconomicas from "../img/fotoEconomicas.webp";
import fotoFilologia from "../img/fotoFilologia.webp";
import fotoEducacion from "../img/fotoEducacion.webp";
import fotoInformatica from "../img/fotoInformatica.webp";

const bldgs = [
  [fotoDerecho, "Facultad de Derecho"],
  [fotoGeografiaHistoria, "Facultad de Geografia e Historia"],
  [fotoFilosofia, "Facultad de Filosofia"],
  [fotoPsicologia, "Facultad de Psicologia"],
  [fotoIndustriales130, "Facultad de Industriales"],
  [fotoCiencias, "Facultad de Ciencias"],
  [fotoEconomicas, "Facultad de Economicas"],
  [fotoFilologia, "Facultad de Filologia"],
  [fotoEducacion, "Facultad de Educacion"],
  [fotoInformatica, "Facultad de Informatica"],
];

// Preload de imágenes para que el carrusel no de saltos.
// Lo que hago es guardar el elemento imagen en un array. De esta manera aunque el usuario tenga la cache desactivada, la imagen no se vuelve a descargar.
const imgs = bldgs.map((edificio) => {
  const foto = edificio[0];
  const preloadedImg = new Image();
  preloadedImg.id = "facultades";
  preloadedImg.src = foto;
  preloadedImg.width = 770;
  preloadedImg.height = 130;
  return preloadedImg;
});

const heading = document.getElementById("titulos");

function cambiarFoto() {
  // Random number between 0 and bldgs.length
  const randomPick = Math.floor(Math.random() * bldgs.length);

  // Cambiamos el elemento imagen segun el indice aleatorio.
  // Si en vez de reemplazar el elemento imagen, replazo el src, puede que la imagen se vuelva a descargar si el usuario tiene la cache desactivada.
  // img.src = imgs[randomPick].src;

  const img = document.getElementById("facultades");
  img.replaceWith(imgs[randomPick]);

  // Cogemos el heading
  // Cambiamos el texto del heading segun el indice aleatorio
  heading.innerText = bldgs[randomPick][1];
}
