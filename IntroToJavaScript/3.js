let expenses = [5000, 1200, 8000, 2000, 1500];

let total = expenses.reduce((a, b) => a + b, 0);
let average = total / expenses.length;

let tax = total * 0.10;
let finalAmount = total + tax;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount After Tax:", finalAmount.toFixed(2));
