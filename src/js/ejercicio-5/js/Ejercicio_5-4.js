"use strict";
// JavaScript Document
// Img elements
const imgs = [
  "ImagenInicial.webp",
  "Imagen01_000.webp",
  "Imagen02_007.webp",
  "Imagen03_012.webp",
  "Imagen04_017.webp",
  "Imagen05_023.webp",
  "Imagen06_027.webp",
  "Imagen07_031.webp",
  "Imagen08_032.webp",
];
// Gathering DOM Elements
// Video player
const video = document.getElementById("player");
// Video controls
const btnPlay = document.getElementById("play");
btnPlay.addEventListener("click", videoPlay);
const btnSm = document.getElementById("sm");
btnSm.addEventListener("click", resizeSm);
const btnLg = document.getElementById("lg");
btnLg.addEventListener("click", resizeLg);
const btnNormal = document.getElementById("normal");
btnNormal.addEventListener("click", resizeNormal);

// Video cursor
const spanCursor = document.getElementById("tiempo");

// Diapo
const diapo = document.getElementById("diapo");

// Regexp to match timestamp in the image path
const currentTimeRegExp = new RegExp(/(?<=_0)\d{2}/);
// Video player's handlers
let isPlaying = false;
video.addEventListener("playing", () => {
  isPlaying = true;
});
video.addEventListener("pause", () => {
  isPlaying = false;
});
video.addEventListener("timeupdate", () => {
  const instantCursor = video.currentTime;
  const cursor = Math.floor(instantCursor).toString();
  spanCursor.textContent = instantCursor.toString();
  // No hardcoding of timestamp logic
  // No need to rewrite logic if "timestamped" imgs are added
  // Remember to update imgs array...
  for (const img of imgs) {
    // Matching regex on timestamp
    const imgMatched = img.match(currentTimeRegExp);
    if (imgMatched !== null) {
      cursor.padStart(2, "0") === imgMatched[0]
        ? (diapo.src = `img/${img}`)
        : null;
    }
  }
});
// Video player controllers' handlers
function videoPlay() {
  isPlaying ? video.pause() : video.play();
}
function resizeSm() {
  video.width = 480;
}
function resizeLg() {
  video.width = 840;
}
function resizeNormal() {
  video.width = 720;
}
