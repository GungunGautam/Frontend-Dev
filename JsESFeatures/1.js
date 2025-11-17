"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

function isValidNumberCandidate(val) {
  // Convert to trimmed string first; null/undefined handled as invalid numeric
  if (val === null || val === undefined) return false;
  const s = String(val).trim();
  // Disallow empty string or strings with non-number characters (like "100px")
  if (s === "") return false;
  // Number(s) gives NaN for invalid numeric
  return !Number.isNaN(Number(s));
}

const validNumbers = [];
const invalidEntries = [];

for (let i = 0; i < apiData.length; i++) {
  const original = apiData[i];
  const asString = String(original);
  const asBoolean = Boolean(original); // JS truthiness
  const asNumber = Number(original);

  if (isValidNumberCandidate(original)) {
    // Push number (converted), and also log conversions
    validNumbers.push(asNumber);
    console.log(`Index ${i}: original=${JSON.stringify(original)} | Number=${asNumber} | Boolean=${asBoolean} | String="${asString}"`);
  } else {
    invalidEntries.push({ index: i, value: original });
    console.warn(`Index ${i}: INVALID numeric candidate -> ${JSON.stringify(original)} | Boolean=${asBoolean} | String="${asString}"`);
  }
}

// Final report
console.log("\n=== FINAL REPORT ===");
console.log("Valid numeric array:", validNumbers);
console.log("Invalid entries (skipped):", invalidEntries);
console.log(`Valid count: ${validNumbers.length}, Invalid count: ${invalidEntries.length}`);

