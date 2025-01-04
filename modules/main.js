/* ------------------------------------------------- NAV BAR -------------------------------------------------------- */
// dropdown menu 
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    if(isOpen){
        toggleBtnIcon.classList = 'fa-solid fa-x'
    }
    else{
        toggleBtnIcon.classList = 'fa-solid fa-bars'
    }
}

/* ------------------------------------------------- HERO SECTION ---------------------------------------------------- */
