// Form validation with preventDefault() and live error removal

const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const nameErr = document.getElementById("nameErr");
const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");

const successMsg = document.getElementById("successMsg");

function validate() {
  let valid = true;

  // Name
  if (nameInput.value.trim() === "") {
    nameErr.textContent = "Name is required";
    valid = false;
  } else nameErr.textContent = "";

  // Email
  if (!emailInput.value.includes("@")) {
    emailErr.textContent = "Enter a valid email";
    valid = false;
  } else emailErr.textContent = "";

  // Password
  if (passInput.value.length < 6) {
    passErr.textContent = "Minimum 6 characters required";
    valid = false;
  } else passErr.textContent = "";

  return valid;
}

// Stop submission if invalid
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validate()) {
    successMsg.hidden = false;
  } else {
    successMsg.hidden = true;
  }
});

// Live error removal
[nameInput, emailInput, passInput].forEach((input) => {
  input.addEventListener("input", validate);
});
