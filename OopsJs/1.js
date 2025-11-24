class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    else if (avg >= 70) return 'B';
    else if (avg >= 50) return 'C';
    else return 'F';
  }
}

const s1 = new Student("Aman", [90, 85, 88]);
const s2 = new Student("Riya", [60, 70, 72]);
const s3 = new Student("Karan", [40, 50, 45]);

console.log(s1.name, s1.calculateAverage(), s1.getGrade());
console.log(s2.name, s2.calculateAverage(), s2.getGrade());
console.log(s3.name, s3.calculateAverage(), s3.getGrade());
