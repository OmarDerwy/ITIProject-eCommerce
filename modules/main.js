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


/* ------------------------------------------------- Featured property---------------------------------------------------- */
// load carouel with JSON data
if(window.location.href == "http://127.0.0.1:5500/index.html"){
fetch('./assets/properties.json')
.then(response => response.json())
.then(data => {
    const carouselOuter = document.querySelector('.carousel-inner');
    const keys = Object.keys(data)
    let carouselItem = null;
    for (var i = 0; i < 5; i++)
        {
            carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            if (i === 0) {
                carouselItem.classList.add('active');
            }
            carouselItem.innerHTML = `
            <div class="card">
            <div class="img-wrapper"><img src="${data[keys[i]].pictures[0]}" class="card-img-top" alt="..."></div>
            <div class="card-body">
            <h5 class="card-title">${data[keys[i]].location}</h5>
            <p class="card-text">${data[keys[i]].features[0]}, ${data[keys[i]].features[1]}</p>
            </div>
            </div>
            `
            carouselOuter.appendChild(carouselItem);
        }
        handleCarousel();
        window.addEventListener("load", handleCarousel);
        window.addEventListener("resize", handleCarousel);
    })
    // handle carousel logic
function handleCarousel () {
    var multipleCardCarousel = document.querySelector("#carouselExample");
    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false,
        });
        multipleCardCarousel.classList.remove("slide");
        var carouselInner = document.querySelector(".carousel-inner");
        var carouselItems = document.querySelectorAll(".carousel-item");
        var carouselWidth = carouselInner.scrollWidth;
        var cardWidth = carouselItems[0].offsetWidth;
        var scrollPosition = 0;

        document.querySelector("#carouselExample .carousel-control-next").addEventListener("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
                scrollPosition += cardWidth;
                carouselInner.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth"
                });
            }
        });

        document.querySelector("#carouselExample .carousel-control-prev").addEventListener("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                carouselInner.scrollTo({
                    left: scrollPosition,
                    behavior: "smooth"
                });
            }
        });
    } else {
        multipleCardCarousel.classList.add("slide");
    }
}
}




/*-------------------------------------------------- sign up validation ----------------------------------------*/ 
/*-------------------------------------------------Log in----------------------------------------------------*/ 
let isSign=false
if(window.location.href == "http://127.0.0.1:5500/pages/login.html")
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
