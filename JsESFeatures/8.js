
// Non-strict version (simulate by not declaring "use strict") - may run without throwing in older engines
function demoNonStrict(a, a_duplicate) {
  total = 10; // implicit global in non-strict
  // delete total; // cannot delete global var created by assignment in some engines
  console.log("Non-strict: total created as global:", total);
}

// Correct ES6 strict version
function demoStrict(a, b) {
  "use strict";
  // Duplicate parameters are illegal in strict mode -> so use distinct names
  let total = 10;   // properly declared
  // delete total; // SyntaxError in strict mode if attempted on an undeletable binding
  console.log("Strict: total (proper):", total);
}

try {
  demoNonStrict(5, 10);
} catch (err) {
  console.error("Non-strict demo error:", err);
}

try {
  demoStrict(5, 10);
} catch (err) {
  console.error("Strict demo error:", err);
}
