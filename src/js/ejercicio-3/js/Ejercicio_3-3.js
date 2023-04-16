// Escribir en este fichero la función calculoMax2() pedida en el enunciado
const calculoMax2 = function (num1, num2) {
  // Input type is number so no isNaN validation required
  return Math.max(num1, num2);
};

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("resultado").value = calculoMax2(
    document.getElementById("dato1").value,
    document.getElementById("dato2").value
  );
});

console.log(btn);
