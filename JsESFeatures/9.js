"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const obj = JSON.parse(line);
    // Validate keys
    if (!('user' in obj) || !('age' in obj)) {
      throw new Error(`Missing required keys at line ${i}`);
    }
    // Convert age to number
    obj.age = Number(obj.age);
    if (Number.isNaN(obj.age)) throw new TypeError(`Invalid age value at line ${i}`);
    clean.push(obj);
    console.log(`Line ${i} parsed: user=${obj.user}, age=${obj.age}`);
  } catch (err) {
    errors.push({ line: i, raw: line, error: err.message });
    console.warn(`Parse error at line ${i}:`, err.message);
  }
}

console.log("\nClean entries:", clean);
console.log("Errors:", errors);

// Bonus: filter under-18 users
const adults = clean.filter(u => u.age >= 18);
console.log("Adults (>=18):", adults);


