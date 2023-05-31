// JavaScript Document
//
//
//

import Goofi_1 from "../img/Goofi_1.webp";
import Goofi_2 from "../img/Goofi_2.webp";
import Donald_1 from "../img/Donald_1.webp";
import Donald_2 from "../img/Donald_2.webp";

function handleClick(img) {
  img.src = Goofi_1;
}
function handleDblClick(img) {
  img.src = Goofi_2;
}
function handleMouseOver(img) {
  img.src = Donald_1;
}
function handleMouseOut(img) {
  img.src = Donald_2;
}

// Prevent bundler treeshaking
window.handleClick = handleClick;
window.handleDblClick = handleDblClick;
window.handleMouseOver = handleMouseOver;
window.handleMouseOut = handleMouseOut;
