"use strict";
// JavaScript Document
import open from "../img/open.webp";
import close from "../img/close.webp";
$(() => {
  $(".answer").hide();
  // Using vanilla js
  // const headings = document.querySelectorAll("#preguntas > h2");
  // for (let heading of headings) {
  //     heading.addEventListener("click", () => {
  //         const siblingAnswer = heading.nextElementSibling;
  //         if (siblingAnswer &&
  //             siblingAnswer.classList.contains("answer") &&
  //             "style" in siblingAnswer) {
  //             if (siblingAnswer.style.display === "none") {
  //                 siblingAnswer.style.display = "block";
  //                 heading.firstElementChild?.setAttribute("src", "img/close.webp");
  //             }
  //             else {
  //                 siblingAnswer.style.display = "none";
  //                 heading.firstElementChild?.setAttribute("src", "img/open.webp");
  //             }
  //         }
  //     });
  // }
  // Using jquery
  for (let heading of $("#preguntas > h2")) {
    $(heading).on("click", () => {
      if ($(heading).next(".answer").is(":hidden")) {
        $(heading).next(".answer").slideDown();
        $(heading).children("img").attr("src", close);
      } else {
        $(heading).next(".answer").slideUp();
        $(heading).children("img").attr("src", open);
      }
    });
  }
});
