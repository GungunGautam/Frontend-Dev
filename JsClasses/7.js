document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const uname = document.getElementById("username");
    const pass = document.getElementById("password");

    const userValid = /^[A-Za-z0-9]{5,}$/.test(uname.value);
    const passValid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,}$/.test(pass.value);

    if (!userValid) uname.nextElementSibling.textContent = "Min 5 characters";
    else uname.nextElementSibling.textContent = "";

    if (!passValid) pass.nextElementSibling.textContent = "Must include A-Z, a-z, number, special char";
    else pass.nextElementSibling.textContent = "";

    if (userValid && passValid) {
        document.getElementById("result").textContent = "Login Successful!";
    }
});
