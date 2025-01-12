import { login } from "./Login.js";
import { showSelectedProperty } from "./propertyDetail.js";
import { featuredProperties } from "./featuredProperties.js";
import { loadPropOntoStorage } from "./loadPropOntoStorage.js";
/* ------------------------------------------------- Load property onto local storage -------------------------------------------------------- */
if(localStorage.getItem("properties") == null)
    loadPropOntoStorage();

/* ------------------------------------------------- NAV BAR -------------------------------------------------------- */
if(localStorage.getItem('users') == null){
    localStorage.setItem('users', JSON.stringify([{"name": "demo", 'password': "demo"}]))
}
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
    //validate bedroom and bathroom numbers
    const bedroomField = document.querySelector('#bedrooms-field');
    const bathroomField = document.querySelector('#bathrooms-field');
    var invalidChars = [
        "-",
        "+",
        "e",
      ];
    bedroomField.addEventListener("input", function (e) {
        if (e.target.value < 0 || e.target.value > 7) {
            e.target.value = 0;
        }
    })
    bedroomField.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    })
    bathroomField.addEventListener("input", function (e) {
        if (e.target.value < 0 || e.target.value > 7) {
            e.target.value = 0;
        }
    })
    bathroomField.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
            e.preventDefault();
        }
    })
    //populate with options
    const properties = JSON.parse(localStorage.getItem('properties'));
    const locationDatalist = document.querySelector('#locations');
    let locationSet = new Set();
    let typeSet = new Set();
    const typeField = document.querySelector('#type-field');
    properties.forEach((property) => {
        locationSet.add(property.location);
        typeSet.add(property.type);
    })
    locationSet.forEach((location) => {
        const option = document.createElement('option');
        option.value = location;
        locationDatalist.appendChild(option);
    })
    typeSet.forEach((type) => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent= type;
        typeField.appendChild(option);
    })
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