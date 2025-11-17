"use strict";

function outer() {
  // Hoisting explanation:
  // var count is hoisted (declaration) to top of outer(), initialized to undefined
  console.log("outer - before assignment, count:", typeof count !== "undefined" ? count : undefined); // undefined
  var count = 5;
  function inner() {
    // inner's var count is hoisted inside inner() -> its own variable shadowing outer's count
    console.log("inner - before inner's var assignment, count:", typeof count !== "undefined" ? count : undefined); // undefined
    var count = 10;
    console.log("inner - after assignment, count:", count); // 10
  }
  inner();
  console.log("outer - after inner(), outer count:", count); // 5
}

console.log("=== run outer() to observe hoisting behavior ===");
outer();

/*
Convert inner to arrow (note: arrow functions still have their own lexical scope for var declarations)
*/
function outerWithArrow() {
  var count = 5;
  const innerArrow = () => {
    // If we remove 'var count = 10' here, innerArrow would reference outer's count.
    var count = 10; // still function-scoped inside innerArrow
    console.log("innerArrow count:", count);
  };
  console.log("outerWithArrow - outer count:", count);
  innerArrow();
  console.log("outerWithArrow - after innerArrow, outer count:", count);
}

console.log("\n=== run outerWithArrow() to compare ===");
outerWithArrow();
