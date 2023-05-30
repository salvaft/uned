// JavaScript Document

console.log($("input"));

for (let input of $("input")) {
  input.addEventListener("focus", () => {
    input.style.border = "solid 2px steelblue";
    input.style.backgroundColor = "#ccc";

    // input.style.outline = "none";
    // Moved rule to stylsheet
  });
  input.addEventListener("focusout", () => {
    input.style.border = "solid 1px green";
    input.style.backgroundColor = "#ffffee";
  });
}
