// Person constructor
function Person(name) {
    this.name = name;
}
Person.prototype.showPerson = function() {
    console.log("Person Name:", this.name);
};

// Faculty
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function() {
    console.log("Department:", this.department);
};

// Professor
function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
    console.log("Subject:", this.subject);
};

// Testing full chain
const p1 = new Professor("Jayesh", "IT", "Networking");
p1.showPerson();
p1.showFaculty();
p1.showSubject();
