function torresDeHanoi(n, desde = "A", hacia = "C", usando = "B") {
  if (n > 8) {
    document.getElementById("error").innerText = "Demasiados discos...";
    return;
  }
  //isnan not required because input n is type number...
  let solucion = document.getElementById("solucion");
  n = parseInt(n);
  if (n <= 0) {
    solucion.innerHTML = "No se puede jugar con un numero de discos negativo";
    return;
  }
  if (n === 1) {
    solucion.innerHTML += `Mueve el disco 1 de ${desde} a ${hacia} </br>`;
    return;
  }
  torresDeHanoi(n - 1, desde, usando, hacia);
  solucion.innerHTML += `Mueve el disco ${n} de ${desde} a ${hacia} </br>`;
  torresDeHanoi(n - 1, usando, hacia, desde);
}

const btn = document.getElementById("btn");
const discosInput = document.getElementById("discos");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("solucion").innerHTML = "";
  torresDeHanoi(discosInput.value);
});

discosInput.addEventListener("input", () => {
  document.getElementById("error").innerText = "";
});
