document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Resetting previous errors
    resetErrors();

    let isValid = true;

    // Validate full name
    if (fullName.length < 5) {
        document.getElementById("fullNameError").innerText = "Name must be at least 5 characters long";
        isValid = false;
    }

    // Validate email
    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        isValid = false;
    }

    // Validate phone number
    if (phoneNumber === "123456789" || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById("phoneNumberError").innerText = "Enter a valid 10-digit phone number";
        isValid = false;
    }

    // Validate password
    if (password.length < 8 || password === "password" || password === fullName) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long and not equal to 'password' or your name";
        isValid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        document.getElementById("registrationForm").submit();
    }
}

function resetErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.innerText = "");
}
