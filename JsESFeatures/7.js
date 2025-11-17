"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {}
class MathDomainError extends Error {}

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new MathDomainError("Division by zero is not allowed");
      return a / b;
    case "power":
      return Math.pow(a, b);
    case "root":
      if (a < 0) throw new MathDomainError("Root of negative number not allowed");
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(`Operation "${op}" not recognized`);
  }
}

for (let op of operations) {
  try {
    const result = calculate(op, num1, num2);
    console.log(`Op: ${op} | Result: ${result}`);
  } catch (err) {
    console.error(`Op: ${op} | Error: ${err.constructor.name} - ${err.message}`);
  }
}

