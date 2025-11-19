// Function takes array + callback and applies operation

function applyOperation(numbers, operation) {
    const result = [];
    for (let num of numbers) {
        result.push(operation(num));
    }
    return result;
}

// Callback functions
const double = num => num * 2;
const square = num => num * 2;

// Outputs
console.log(applyOperation([1,2,3,4], double)); // Double
console.log(applyOperation([1,2,3,4], square)); // Square
