import { login } from "./Login.js";
/* ------------------------------------------------- NAV BAR -------------------------------------------------------- */


// dropdown menu 
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");
const navbar = document.querySelector("header")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    if(isOpen){
        toggleBtnIcon.classList = 'fa-solid fa-x';
        navbar.style = 'margin-bottom:280px;'

    }
    else{
        toggleBtnIcon.classList = 'fa-solid fa-bars';
        navbar.style = 'margin-bottom:0px;'
    }
}

/* ------------------------------------------------- HERO SECTION ---------------------------------------------------- */


/*-------------------------------------------------Log in----------------------------------------------------*/ 

console.log(window.location.href)   ;
if(window.location.href == "http://127.0.0.1:5500/pages/login.html")
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if(login()){
        window.open("../index.html", "_self");
    }else{
        alert("Wrong username or password")
    }
})

