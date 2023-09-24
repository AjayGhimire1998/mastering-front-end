const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

//adding submit event listener to the form
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true; // checks if the form fields is valid

    // validating the email field
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        emailInput.style.border = "2px solid red";
        emailError.style.display = "block";
        emailError.innerText = "Please enter a valid email address.";
    } else {
        emailInput.style.border = "none"; // Clear border
        emailError.style.display = "none"; // hides error message paragraph
        emailError.innerText = ""; // Clear error message
    }

    // validating the password field
    if (passwordInput.value.length < 5 || passwordInput.value.length > 12) {
        isValid = false;
        passwordInput.style.border = "2px solid red";
        passwordError.style.display = "block";
        passwordError.innerText = "Password must be between 5 and 12 characters.";
    } else {
        passwordInput.style.border = "none"; // Clear border
        passwordError.style.display = "none"; // hides error message paragraph
        passwordError.innerText = ""; // Clear error message
    }

    // if the form fields are valid, go to dashboard
    if (isValid) {
        window.location.href = "dashboard.html";
    }
});