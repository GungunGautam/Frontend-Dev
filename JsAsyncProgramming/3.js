
function getBugs() {
  return new Promise((resolve, reject) => {
    // simulate network delay
    setTimeout(() => {
      const simulateFailure = Math.random() < 0.25; // 25% chance to fail
      if (simulateFailure) {
        return reject(new Error("Failed to fetch bugs - API error"));
      }
      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

// Usage
getBugs()
  .then((bugs) => {
    console.log("Bugs fetched (console.table):");
    console.table(bugs.map((b, i) => ({ id: i + 1, issue: b })));
  })
  .catch((err) => {
    console.error("Error fetching bugs:", err.message);
  });
