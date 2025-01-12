import { login } from "./Login.js";
import { showSelectedProperty } from "./propertyDetail.js";
import { featuredProperties } from "./featuredProperties.js";
import { loadPropOntoStorage } from "./loadPropOntoStorage.js";
/* ------------------------------------------------- Load property onto local storage -------------------------------------------------------- */
if(localStorage.getItem("properties") == null)
    loadPropOntoStorage();

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



if(window.location.pathname == "/" || window.location.pathname == "/index.html"){
    /* ------------------------------------------------- Search Bar ---------------------------------------------------- */
        document.querySelector('#search-btn').addEventListener("click", function (e) {
            e.preventDefault();
            const locationInput = document.querySelector('#location-field').value;
            const bedroomsInput = document.querySelector('#bedrooms-field').value;
            const bathroomsInput = document.querySelector('#bathrooms-field').value;
            const typeInput = document.querySelector('#type-field').value;
            const searchParams = new URLSearchParams({
                location: locationInput,
                bedrooms: bedroomsInput,
                bathrooms: bathroomsInput,
                type: typeInput
            });
            window.open(`./pages/property-list.html?${searchParams.toString()}`, '_self');
        })
    
    /* ------------------------------------------------- Featured property---------------------------------------------------- */
    // load carousel with JSON data
    featuredProperties();
}

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

localStorage.setItem('firstLoad', true); //won't need this, might delete