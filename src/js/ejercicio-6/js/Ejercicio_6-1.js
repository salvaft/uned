"use strict";
//$( handler )
// $( document ).ready( handler )
// $( "document" ).ready( handler )
// $( "img" ).ready( handler )
// $().ready( handler )
// As of jQuery 3.0, only the first syntax is recommended; the other syntaxes still work but are deprecated. This is because the selection has no bearing on the behavior of the .ready() method, which is inefficient and can lead to incorrect assumptions about the method's behavior. For example, the third syntax works with "document" which selects nothing. The fourth syntax waits for the document to be ready but implies (incorrectly) that it waits for images to become ready.
// https://api.jquery.com/ready/
$(() => {
  $("#donald").on("click", () => {
    $("#donald").attr("src", "img/Donald_1.webp");
  });
  $("#donald").on("dblclick", () => {
    $("#donald").attr("src", "img/Donald_2.webp");
  });
  $("#donald").on("mouseover", () => {
    $("#donald").attr("src", "img/Goofi_1.webp");
  });
  $("#donald").on("mouseout", () => {
    $("#donald").attr("src", "img/Goofi_2.webp");
  });
});
