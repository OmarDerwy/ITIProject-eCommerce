// get the elements of the form 
const form = document.getElementById("registrationForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPaswwordInput = document.getElementById("confirmPassword");
const termsInput = document.getElementById("terms")

// Get error elements ---> to set error messages if there is validation issue 
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const matchingPasswordError = document.getElementById("matchingPasswordError");
const termsError = document.getElementById("termsError");


// Function to display error message in the error field
const setError = (input, errorMessage, errorElement) => {
    if(errorMessage)
    {
        input.classList.add("border-danger");
        errorElement.textContent = errorMessage;
    }
    else
    {
        input.classList.remove("border-danger");
        errorElement.textContent = "";
    }
};

// Username Validation
const validateUsername = () => {
    const username = usernameInput.value;
    let errorMessage = "";
    
    if(username === "")
        errorMessage = "Username is required";
    
    else if (username.includes(" "))
        errorMessage = "Username cannot contain spaces"
    
    else if(username.length < 6)
        errorMessage = "Username cannot be less than 6 characters";

    else if (username.length > 25)
        errorMessage =  "Username cannot exceed 25 characters";
    
    setError(usernameInput, errorMessage, usernameError);

}
usernameInput.addEventListener("input", validateUsername);


// email validation 
const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value;
    let errorMessage = "";

    if(email === "")
        errorMessage = "Email is required";

    else if(!emailRegex.test(email))
        errorMessage = "Inavalid Email";

    setError(emailInput, errorMessage, emailError);
}
emailInput.addEventListener("input", validateEmail);


// password Validation 
const validatePassword = () => {
    const password = passwordInput.value;
    let errorMessage = "";
    const passDigitRegex = /[\d]/;
    const passUpperRegex = /[A-Z]/
    const passLowerRegex = /[a-z]/
    const passSpaceRegex = /[ ]/
    const passSpecialCharRegex = /[!@#$%^&*(),.?":{}|<>]/

    if (password.length === 0)
        errorMessage = "Password required";
    else if (password.length < 8)
        errorMessage = "Password cannot be less than 8 characters";
    else if(!passDigitRegex.test(password))
        errorMessage = "Passwod must contain at least one number";
    else if (passSpaceRegex.test(password))
        errorMessage = "Password cannot contain spaces"
    else if (!passUpperRegex.test(password))
        errorMessage = "Password must contain at least one Uppercase letter";
    else if (!passLowerRegex.test(password))
        errorMessage = "Password must contain at least one lowercase letter";
    else if(!passSpecialCharRegex.test(password))
        errorMessage = 'Password must contain at least one special charcter !@#$%^&*(),.?":{}|<></> '
    else if (password.length > 60)
        errorMessage = "Passsword cannot exceed 60 characters";

    setError(passwordInput, errorMessage, passwordError);
}

passwordInput.addEventListener("input", validatePassword);


// Confirm password Validation
const confirmPassword = () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPaswwordInput.value;
    let errorMessage = ""

    if(password !== confirmPassword)
        errorMessage = "Passwords doesn't match";

    setError(confirmPaswwordInput, errorMessage, matchingPasswordError);
}


confirmPaswwordInput.addEventListener("input", confirmPassword);


// Terms validation
const validateTerms = () => {
    let errorMessage = "";

    if (!termsInput.checked)
        errorMessage = "You must agree to the terms and conditions";

    setError(termsInput, errorMessage, termsError);
}
