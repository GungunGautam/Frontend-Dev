// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local salary variable
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent) {
        salary += bonus;
    }

    console.log(`Total Salary: ${salary}`);
}

// Demonstration
calculateSalary(true);   // Adds bonus
calculateSalary(false);  // Does not add bonus
