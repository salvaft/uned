"use strict";
// JavaScript Document
// Registering handlers
window.addEventListener("load", registraEventos);
function registraEventos() {
    const img = document.getElementsByTagName("img")[0];
    const eventsAndListeners = {
        click: handleClick,
        dblclick: handleDblClick,
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
    };
    for (const [k, v] of Object.entries(eventsAndListeners)) {
        img.addEventListener(k, v);
    }
    // Event handlers
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
}
