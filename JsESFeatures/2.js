"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];
    if (!emp || !emp.name) throw new Error("Missing employee object or name");

    // Convert and validate
    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (Number.isNaN(salary) || Number.isNaN(years)) {
      throw new TypeError(`Invalid numeric conversion for ${emp.name}`);
    }

    const bonusRate = years > 3 ? 0.10 : 0.05;
    const bonus = salary * bonusRate;
    const totalPay = salary + bonus;

    console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)} | Total: ${totalPay.toFixed(2)}`);
  } catch (err) {
    console.error(`Error processing employee at index ${i}:`, err.message);
  }
}
