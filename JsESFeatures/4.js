"use strict";

function showMessageFixed() {
  // Declare variable in local scope to avoid strict-mode error
  let greeting = "Welcome"; // fixed: explicit declaration
  console.log("Greeting:", greeting);
}
showMessageFixed();

