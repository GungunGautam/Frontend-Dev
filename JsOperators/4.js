// Random scores
let scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

// Highest & Lowest
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Average
let average = scores.reduce((a, b) => a + b, 0) / scores.length;

// Passed students (>= 50)
let passed = scores.filter(score => score >= 50).length;

console.log(`
Scores: ${scores}
Highest: ${highest}
Lowest: ${lowest}
Average: ${average.toFixed(2)}
Passed: ${passed}
`);
