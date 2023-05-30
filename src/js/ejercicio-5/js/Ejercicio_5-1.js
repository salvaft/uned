"use strict";
// JavaScript Document
//
//
//
const img = document.getElementById("img");
img.addEventListener("click", handleClick);
img.addEventListener("dblclick", handleDblClick);
img.addEventListener("mouseover", handleMouseOver);
img.addEventListener("mouseout", handleMouseOut);
function handleClick() {
  img.src = "img/Goofi_1.webp";
  console.log(img);
}
function handleDblClick() {
  img.src = "img/Goofi_2.webp";
}
function handleMouseOver() {
  img.src = "img/Donald_2.webp";
}
function handleMouseOut() {
  img.src = "img/Donald_1.webp";
}
