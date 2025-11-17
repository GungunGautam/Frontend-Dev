"use strict";
function generatePyramid(limit = 5) {
  // strict mode will catch any accidental globals
  for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

console.log("Default pyramid (limit=4 example):");
generatePyramid(4);

// Observing var vs let effect:
function generateVarPyramid(limit = 4) {
  for (var i = 1; i <= limit; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
  // With var, i and j are function-scoped and available here (can lead to unexpected reuse)
  console.log("After var loop, i=", i, "j=", j); // demonstrates var scope leakage
}

console.log("\nVar-scoped pyramid and leakage observation:");
generateVarPyramid(4);

