// JavaScript Document
// En vez de ponerlo inline se puede hacer en el scirpt. Otra forma usando addEventListener
window.addEventListener("load", () => {
  setInterval(cambiarFoto, 2000);
});

const bldgs = [
  ["fotoDerecho.webp", "Facultad de Derecho"],
  ["fotoGeografiaHistoria.webp", "Facultad de Geografia e Historia"],
  ["fotoFilosofia.webp", "Facultad de Filosofia"],
  ["fotoPsicologia.webp", "Facultad de Psicologia"],
  ["fotoIndustriales130.webp", "Facultad de Industriales"],
  ["fotoCiencias.webp", "Facultad de Ciencias"],
  ["fotoEconomicas.webp", "Facultad de Economicas"],
  ["fotoFilologia.webp", "Facultad de Filologia"],
  ["fotoEducacion.webp", "Facultad de Educacion"],
  ["fotoInformatica.webp", "Facultad de Informatica"],
];

// Preload de imágenes para que el carrusel no de saltos.
// Lo que hago es guardar el elemento imagen en un array. De esta manera aunque el usuario tenga la cache desactivada, la imagen no se vuelve a descargar.
const imgs = bldgs.map((edificio) => {
  const foto = edificio[0];
  const preloadedImg = new Image();
  preloadedImg.id = "facultades";
  preloadedImg.src = `/img/${foto}`;
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
