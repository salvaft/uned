"use strict";
// JavaScript Document
$(() => {
  const allNavDropdown = $("#nav > li");
  allNavDropdown.find("ul").hide();
  for (let dropdown of allNavDropdown) {
    $(dropdown)
      .on("mouseenter", () => {
        $(dropdown).css("background-color", "red");
        $(dropdown).find("ul").show();
      })
      .on("mouseleave", () => {
        $(dropdown).css("background-color", "#555555");
        $(dropdown).find("ul").hide();
      });
    for (let entry of $(dropdown).find("ul > li")) {
      $(entry)
        .on("mouseenter", () => {
          $(entry).css("background-color", "red");
        })
        .on("mouseleave", () => {
          $(entry).css("background-color", "#555555");
        });
    }
  }
});
