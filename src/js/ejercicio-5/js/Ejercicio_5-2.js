"use strict";
// JavaScript Document
// Registering handlers

import Goofi_1 from "../img/Goofi_1.webp";
import Goofi_2 from "../img/Goofi_2.webp";
import Donald_1 from "../img/Donald_1.webp";
import Donald_2 from "../img/Donald_2.webp";
window.addEventListener("load", registraEventos);

function registraEventos() {
  // Event handlers
  function handleClick() {
    img.src = Goofi_1;
  }
  function handleDblClick() {
    img.src = Goofi_2;
  }
  function handleMouseOver() {
    img.src = Donald_2;
  }
  function handleMouseOut() {
    img.src = Donald_1;
  }
  const img = document.getElementById("donald");
  const eventsAndListeners = {
    click: handleClick,
    dblclick: handleDblClick,
    mouseover: handleMouseOver,
    mouseout: handleMouseOut,
  };
  for (const [k, v] of Object.entries(eventsAndListeners)) {
    img.addEventListener(k, v);
  }
}
