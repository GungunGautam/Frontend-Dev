let name = "Amit";
let age = 25;
let isStudent = true;
let fruits = ["apple", "banana"];
let person = { city: "Delhi", pin: 110001 };
let nothing = null;
let notAssigned;

console.table({
    name: { value: name, type: typeof name },
    age: { value: age, type: typeof age },
    isStudent: { value: isStudent, type: typeof isStudent },
    fruits: { value: fruits, type: Array.isArray(fruits) ? "array" : typeof fruits },
    person: { value: person, type: typeof person },
    nothing: { value: nothing, type: typeof nothing },
    notAssigned: { value: notAssigned, type: typeof notAssigned }
});