// ES6 Class Version

class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);        // calls Parent constructor
        this.branch = branch;
    }
    showBranch() {
        console.log("Branch:", this.branch);
    }
}

// Testing
const s2 = new Student("Gungun", "ECE");
s2.showName();
s2.showBranch();
