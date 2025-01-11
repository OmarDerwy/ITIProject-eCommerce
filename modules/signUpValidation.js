// get the elements of the form 
const form = document.getElementById("registrationForm");

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPaswwordInput = document.getElementById("confirmPassword");
const termsInput = document.getElementById("terms")
const phoneInput = document.getElementById("phoneNumber");
// Get error elements ---> to set error messages if there is validation issue 
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const matchingPasswordError = document.getElementById("matchingPasswordError");
const termsError = document.getElementById("termsError");
const phoneError = document.getElementById("matchingPhoneError");


//flags
let usernameFlag = false;
let emailFlag = false;
let passwordFlag = false;
let matchingPasswordFlag = false;
let termsFlag = false;
let phoneFlag = false;


let clearForm = () => {
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPaswwordInput.value = "";
    termsInput.checked = false;
    phoneInput.value = "";
}

// Function to display error message in the error field
const setError = (input, errorMessage, errorElement) => {
    if (errorMessage) {
        input.classList.add("border-danger");
        errorElement.textContent = errorMessage;
    }
    else {
        input.classList.remove("border-danger");
        errorElement.textContent = "";
    }
};

// Username Validation
const validateUsername = () => {
    const username = usernameInput.value;
    let errorMessage = "";

    if (username === "")
        errorMessage = "Username is required";

    else if (username.includes(" "))
        errorMessage = "Username cannot contain spaces"

    else if (username.length < 6)
        errorMessage = "Username cannot be less than 6 characters";

    else if (username.length > 25)
        errorMessage = "Username cannot exceed 25 characters";

    usernameFlag = !usernameFlag;
    setError(usernameInput, errorMessage, usernameError);

}
usernameInput.addEventListener("input", validateUsername);


// email validation 
const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value;
    let errorMessage = "";

    if (email === "")
        errorMessage = "Email is required";

     else if (!emailRegex.test(email))
        errorMessage = "Inavalid Email";

     emailFlag = !errorMessage;
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
    else if (!passDigitRegex.test(password))
        errorMessage = "Passwod must contain at least one number";
    else if (passSpaceRegex.test(password))
        errorMessage = "Password cannot contain spaces"
    else if (!passUpperRegex.test(password))
        errorMessage = "Password must contain at least one Uppercase letter";
    else if (!passLowerRegex.test(password))
        errorMessage = "Password must contain at least one lowercase letter";
    else if (!passSpecialCharRegex.test(password))
        errorMessage = 'Password must contain at least one special charcter !@#$%^&*(),.?":{}|<></> '
    else if (password.length > 60)
        errorMessage = "Passsword cannot exceed 60 characters";

    passwordFlag = !errorMessage;
    setError(passwordInput, errorMessage, passwordError);
}

passwordInput.addEventListener("input", validatePassword);


// Confirm password Validation
const confirmPassword = () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPaswwordInput.value;
    let errorMessage = ""

    if (password !== confirmPassword)
        errorMessage = "Passwords doesn't match";

    matchingPasswordFlag = !errorMessage;
    setError(confirmPaswwordInput, errorMessage, matchingPasswordError);
}


confirmPaswwordInput.addEventListener("input", confirmPassword);


// Terms validation
const validateTerms = () => {
    let errorMessage = "";

    if (!termsInput.checked)
        errorMessage = "You must agree to the terms and conditions";

    termsFlag = !errorMessage;
    setError(termsInput, errorMessage, termsError);
}

termsInput.addEventListener("input", validateTerms);


//phone validation
const validatePhone = () => {
    const phone = phoneInput.value;
    let errorMessage = "";

    if (phone === "")
        errorMessage = "Phone number is required";

    else if (phone.length !== 11)
        errorMessage = "Phone number must be 11 digits";

    phoneFlag = !errorMessage;
    setError(phoneInput, errorMessage, phoneError);
}

document.getElementById("phoneNumber").addEventListener("input", validatePhone);
/*-------------------------------------------------------*/


    document.getElementById("register").addEventListener("click", function (e) {

        if(usernameFlag && emailFlag && passwordFlag && matchingPasswordFlag && termsFlag && phoneFlag){
            e.preventDefault();
            const userEmail = document.getElementById("email").value;
            const verificationCode = Math.floor(100000 + Math.random() * 900000);
    
            localStorage.setItem("verificationCode", verificationCode);
    
            const templateParams = {
                email: userEmail,
                code: verificationCode,
            };
    
    
    
    
    
            emailjs
                .send("service_22pqp7r", "template_wb6yeia", templateParams)
                .then(() => {
                    let container = [];
    
                    if (localStorage.getItem("users") == null) {
                        localStorage.setItem("users", JSON.stringify(container));
                    } else {
                        container = JSON.parse(localStorage.getItem("users")) || [];
                    }
                    let isDuplicate = false;
                    container.forEach((value) => {
                        if (value.email === emailInput.value) {
                            isDuplicate = true;
                        }
                    })
    
                    if (isDuplicate) {
                        alert("Email already exists");
                        clearForm();
                        return;
                    }
                    console.log("Email sent successfully");
                    document.getElementById("verifyCodeBox").style.display = "block";
                    document.getElementById("signUpBox").style.display = "none";
    
    
                    document.getElementById("verifyCode").addEventListener("click", function (e) {
                        e.preventDefault();
                        const userVerificationCode = document.getElementById("verificationCode").value;
                        const storedVerificationCode = localStorage.getItem("verificationCode");
    
                        if (userVerificationCode === storedVerificationCode) {
                            alert("Verification successful!");
    
    
    
                            if (usernameInput.value && emailInput.value && passwordInput.value && confirmPaswwordInput.value && phoneInput.value) {
                                const user = {
                                    id: Date.now(),
                                    name: usernameInput.value,
                                    email: emailInput.value,
                                    password: passwordInput.value,
                                    phone: phoneInput.value,
                                };
                                container.push(user);
                                localStorage.setItem("users", JSON.stringify(container));
                                alert("Account created successfully");
                            }
                        } else {
                            alert("Invalid verification code. Please try again.");
                        }
                    })
    
                })
                .catch((error) => {
                    console.error("Failed to send email:", error);
                });
      
        }else{
            alert("Please fill the form correctly");
            return;
        }
     
    });



