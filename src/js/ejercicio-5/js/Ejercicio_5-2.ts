// JavaScript Document
// Registering handlers
window.addEventListener("load", registraEventos);
function registraEventos() {
  const img = document.getElementsByTagName("img")[0];

  type keys = "click" | "dblclick" | "mouseover" | "mouseout";
  const eventsAndListeners: Record<keys, () => void> = {
    click: handleClick,
    dblclick: handleDblClick,
    mouseover: handleMouseOver,
    mouseout: handleMouseOut,
  };

  for (const [k, v] of Object.entries(eventsAndListeners)) {
    img.addEventListener(k, v);
  }

  // Event handlers
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
}
