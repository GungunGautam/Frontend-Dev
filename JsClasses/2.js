// Validation patterns
const patterns = {
    name: /^[A-Za-z ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/
};

document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    validateField("name", patterns.name, "Only alphabets allowed");
    validateField("email", patterns.email, "Invalid email format");
    validateField("phone", patterns.phone, "Phone must be 10 digits");
    validateField("password", patterns.password, "1 uppercase, 1 number, 1 special char required");
});

function validateField(id, regex, message) {
    const field = document.getElementById(id);
    const msg = field.nextElementSibling;

    if (!regex.test(field.value)) {
        field.style.border = "2px solid red";
        msg.textContent = message;
        msg.style.color = "red";
    } else {
        field.style.border = "2px solid green";
        msg.textContent = "";
    }
}
