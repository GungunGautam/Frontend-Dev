// Function greetUser(name, callback)
// Prints greeting then executes callback

function greetUser(name, callback) {
    console.log("Hello " + name);
    callback(); // executing callback function
}

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Calling the main function
greetUser("Gungun", showEndMessage);
