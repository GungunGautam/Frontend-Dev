"use strict";

console.log("Prediction demo for hoisting:");
// Demonstration (fixed order to avoid TDZ)
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";

console.log("score:", score); // 50
announce(); // "Game started"

function startGame() {
  console.log("status:", status);
}
startGame(); // "ready"

/*
Fix using arrow functions (note: arrow functions are not hoisted like function declarations)
*/
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log("status (arrow):", status);

announceArrow();
startGameArrow();
