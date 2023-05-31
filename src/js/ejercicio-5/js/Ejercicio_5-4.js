"use strict";
// JavaScript Document
// Img elements
import imgUrl0 from "../img/ImagenInicial.webp";
import imgUrl1 from "../img/Imagen01_000.webp";
import imgUrl2 from "../img/Imagen02_007.webp";
import imgUrl3 from "../img/Imagen03_012.webp";
import imgUrl4 from "../img/Imagen04_017.webp";
import imgUrl5 from "../img/Imagen05_023.webp";
import imgUrl6 from "../img/Imagen06_027.webp";
import imgUrl7 from "../img/Imagen07_031.webp";
import imgUrl8 from "../img/Imagen08_032.webp";
const imgs = [
  imgUrl0,
  imgUrl1,
  imgUrl2,
  imgUrl3,
  imgUrl4,
  imgUrl5,
  imgUrl6,
  imgUrl7,
  imgUrl8,
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
const currentTimeRegExp = new RegExp(/(?<=\d_)\d{3}/);
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
  for (const img of imgs) {
    // Matching regex on timestamp
    const imgMatched = img.match(currentTimeRegExp);
    if (imgMatched !== null) {
      if (cursor.padStart(3, "0") === imgMatched[0]) {
        diapo.src = img;
      }
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
