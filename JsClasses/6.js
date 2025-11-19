class Employee {
    constructor(id, name, dept, salary) {
        this.id = id;
        this.name = name;
        this.department = dept;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 30000),
    new Employee(2, "Riya", "HR", 25000),
    new Employee(3, "Karan", "Sales", 20000),
    new Employee(4, "Jiya", "IT", 40000),
    new Employee(5, "Aarav", "Admin", 28000)
];

const totalPayout = employees
    .reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:", totalPayout);
