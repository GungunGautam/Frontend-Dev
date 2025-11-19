document.getElementById("movieForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const seats = document.getElementById("seats");

    let valid = true;

    valid &= validate(name, /^[A-Za-z ]+$/, "Only alphabets allowed");
    valid &= validate(email, /^[^ ]+@[^ ]+\.[a-z]{2,3}$/, "Invalid email");
    valid &= validate(seats, /^[1-9]$|10/, "Seats must be 1 to 10");

    if (valid) {
        const ticket = {
            name: name.value,
            email: email.value,
            seats: seats.value
        };
        document.getElementById("ticket").textContent =
            JSON.stringify(ticket, null, 2);
    }
});

function validate(field, regex, message) {
    const msg = field.nextElementSibling;

    if (!regex.test(field.value)) {
        msg.textContent = message;
        msg.style.color = "red";
        field.style.border = "2px solid red";
        return false;
    } else {
        msg.textContent = "";
        field.style.border = "2px solid green";
        return true;
    }
}
