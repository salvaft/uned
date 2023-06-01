"use strict";
/*
 * $( handler )
 * $( document ).ready( handler )
 * $( "document" ).ready( handler )
 * $( "img" ).ready( handler )
 * $().ready( handler )
 * As of jQuery 3.0, only the first syntax is recommended; the other syntaxes still work but are deprecated. This is because the selection has no bearing on the behavior of the .ready() method, which is inefficient and can lead to incorrect assumptions about the method's behavior. For example, the third syntax works with "document" which selects nothing. The fourth syntax waits for the document to be ready but implies (incorrectly) that it waits for images to become ready.
 * https://api.jquery.com/ready/
 */

import Goofi_1 from "../img/Goofi_1.webp";
import Goofi_2 from "../img/Goofi_2.webp";
import Donald_1 from "../img/Donald_1.webp";
import Donald_2 from "../img/Donald_2.webp";
$(() => {
  $("#donald").on("click", () => {
    $("#donald").attr("src", Donald_1);
  });
  $("#donald").on("dblclick", () => {
    $("#donald").attr("src", Donald_2);
  });
  $("#donald").on("mouseover", () => {
    $("#donald").attr("src", Goofi_1);
  });
  $("#donald").on("mouseout", () => {
    $("#donald").attr("src", Goofi_2);
  });
});
