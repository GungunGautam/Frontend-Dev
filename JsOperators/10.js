const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let [dept, score] of departments) {
    let grade = "";

    if (score >= 90) {
        grade = "Excellent";
    } else if (score >= 75) {
        grade = "Good";
    } else if (score >= 60) {
        grade = "Average";
    } else {
        grade = "Needs Improvement";
    }

    console.log(`${dept}: ${grade}`);
}
