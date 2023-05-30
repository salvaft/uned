// JavaScript Document
// Img elements
const imgs = [
  "ImagenInicial.png",
  "Imagen01_000.jpg",
  "Imagen02_007.jpg",
  "Imagen03_012.jpg",
  "Imagen04_017.jpg",
  "Imagen05_023.jpg",
  "Imagen06_027.jpg",
  "Imagen07_031.jpg",
  "Imagen08_032.jpg",
] as const;

// Gathering DOM Elements

// Video player
const video: HTMLVideoElement = document.getElementById(
  "player"
) as HTMLVideoElement;
// Video controls
const btnPlay = document.getElementById("play") as HTMLButtonElement;
const btnSm = document.getElementById("sm") as HTMLButtonElement;
const btnLg = document.getElementById("lg") as HTMLButtonElement;
const btnNormal = document.getElementById("normal") as HTMLButtonElement;
const spanCursor = document.getElementById("tiempo") as HTMLSpanElement;
// Diapo
const diapo = document.getElementById("diapo") as HTMLImageElement;
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
function videoPlay(): void {
  isPlaying ? video.pause() : video.play();
}
function resizeSm(): void {
  video.width = 480;
}
function resizeLg(): void {
  video.width = 840;
}
function resizeNormal(): void {
  video.width = 720;
}
