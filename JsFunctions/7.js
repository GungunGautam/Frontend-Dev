// Closure function
function makeMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

// Usage
const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// Explanation:
// inner function keeps access to "multiplier"
// even after makeMultiplier() has finished executing
