// Person constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name:", this.name);
};

// Student constructor
function Student(name, branch) {
    Person.call(this, name); // inherit properties
    this.branch = branch;
}

// Inherit prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student method
Student.prototype.showBranch = function() {
    console.log("Branch:", this.branch);
};

// Testing
const s1 = new Student("Gungun", "CSE");
s1.showName();
s1.showBranch();
