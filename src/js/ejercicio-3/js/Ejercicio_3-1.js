const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () => {
  mensaje1();
});

btn2.addEventListener("click", () => {
  mensaje2();
});

// Escribir en este fichero las funciones mensaje1() y mensaje2()
function mensaje1() {
  document.getElementById("texto").innerHTML = "<p>Ha pulsado el boton 1</p>";
}

function mensaje2() {
  document.getElementById("texto").innerHTML = "<p>Ha pulsado el boton 2</p>";
}
