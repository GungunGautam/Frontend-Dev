let salary = 30000;
let incrementRate = 10;

let table = {};

for (let year = 1; year <= 5; year++) {
    salary += salary * (incrementRate / 100);
    table[`Year ${year}`] = Math.round(salary);
}

console.table(table);