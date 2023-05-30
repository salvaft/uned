// JavaScript Document
$(() => {
  $(".answer").hide();

  // Using vanilla js
  const headings = document.querySelectorAll("#preguntas > h2");
  for (let heading of headings) {
    heading.addEventListener("click", () => {
      const siblingAnswer = heading.nextElementSibling;
      if (
        siblingAnswer &&
        siblingAnswer.classList.contains("answer") &&
        "style" in siblingAnswer
      ) {
        if ((siblingAnswer.style as CSSStyleDeclaration).display === "none") {
          (siblingAnswer.style as CSSStyleDeclaration).display = "block";
          heading.firstElementChild?.setAttribute("src", "img/close.png");
        } else {
          (siblingAnswer.style as CSSStyleDeclaration).display = "none";
          heading.firstElementChild?.setAttribute("src", "img/open.png");
        }
      }
    });
  }

  // Using jquery
  for (let heading of $("#preguntas > h2")) {
    $(heading).on("click", () => {
      if ($(heading).next(".answer").is(":hidden")) {
        $(heading).next(".answer").show();
        $(heading).children("img").attr("src", "img/close.png");
      } else {
        $(heading).next(".answer").hide();
        $(heading).children("img").attr("src", "img/open.png");
      }
    });
  }
});
