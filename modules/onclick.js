function handleToggleButton() {
    const toggleBtnIcon = document.querySelector(".toggle-btn i");
    const dropDownMenu = document.querySelector(".dropdown-menu");
    const navbar = document.querySelector("header")
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    if(isOpen){
        toggleBtnIcon.classList = 'fa-solid fa-x';
        navbar.style = 'margin-bottom:320px;'

    }
    else{
        toggleBtnIcon.classList = 'fa-solid fa-bars';
        navbar.style = 'margin-bottom:0px;'
    }
}
