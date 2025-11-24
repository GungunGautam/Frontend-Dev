class Employee {
  constructor(name, dept) {
    this.name = name;
    this.department = dept;
  }

  work() {
    console.log(`${this.name} works in ${this.department}`);
  }
}

class Manager extends Employee {
  work() {
    console.log(`${this.name} manages ${this.department} team`);
  }
}

const e1 = new Employee("Rohan", "Sales");
const m1 = new Manager("Neha", "IT");

e1.work();
m1.work(); // polymorphism
