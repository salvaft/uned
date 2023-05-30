// JavaScript Document

const img = document.getElementsByTagName("img")[0];
function handleClick(): void {
  img.src = "img/Goofi_1.png";
  console.log(img);
}

function handleDblClick(): void {
  img.src = "img/Goofi_2.png";
}

function handleMouseOver(): void {
  img.src = "img/Donald_2.png";
}

function handleMouseOut(): void {
  img.src = "img/Donald_1.png";
}
