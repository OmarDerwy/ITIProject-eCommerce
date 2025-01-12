import { login } from "./Login.js";
import { showSelectedProperty } from "./propertyDetail.js";
import { featuredProperties } from "./featuredProperties.js";
/* ------------------------------------------------- NAV BAR -------------------------------------------------------- */
localStorage.setItem('users', JSON.stringify([{"name": "demo", 'password': "demo"}]))
let isSign=false

window.onload = function () {
        if(sessionStorage.getItem("user") != null){
            document.querySelectorAll('.advertise-here').forEach(advertiseHere => {
                advertiseHere.textContent = "Advertise here!";
                advertiseHere.href = "/pages/propertyForm.html";
            });
            
            document.querySelectorAll('.sign-btn').forEach(signBtn => {
                signBtn.textContent = "Logout";
                signBtn.href = "";
                signBtn.addEventListener("click", function (e) {
                    e.preventDefault();
                    sessionStorage.removeItem("user");
                    window.open("../index.html", "_self");
                })
            });
        } else {
            document.querySelectorAll('.advertise-here').forEach(advertiseHere => {
                advertiseHere.textContent = "Login";
                advertiseHere.href = "/pages/login.html";
            }) 
        }
        
    
}


/* ------------------------------------------------- HERO SECTION ---------------------------------------------------- */


/* ------------------------------------------------- Featured property---------------------------------------------------- */
// load carousel with JSON data
if(window.location.pathname == "/" || window.location.pathname == "/index.html")
    featuredProperties();

/*-------------------------------------------------- sign up validation ----------------------------------------*/ 
/*-------------------------------------------------Log in----------------------------------------------------*/ 
if(window.location.pathname == "/pages/login.html")
    document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    //return the user name from the login function
    let user = login();
    if(user){
        window.open("../index.html", "_self");
        sessionStorage.setItem("user", user);
    }else{
        alert("Wrong username or password")
    }
})

/*-------------------------------------------------show product details----------------------------------------------------*/ 
if(window.location.pathname == "/pages/propertyDetail.html")
    showSelectedProperty();
