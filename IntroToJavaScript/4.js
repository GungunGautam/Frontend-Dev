
let marks = [78, 92, 81, 66, 89];

if (marks.some(m => m < 35)) {
    console.log("Detained");
} else {
    let total = marks.reduce((a, b) => a + b, 0);
    let percentage = total / marks.length;

    if (percentage >= 85) {
        console.log("Promoted with Distinction");
    } else if (percentage >= 50) {
        console.log("Promoted");
    } else {
        console.log("Detained");
    }
}