// Function to enable the selection of floor number for only flats 
const adTitle = document.getElementById('adTitle');
const propertyPrice = document.getElementById('propertyPrice');
const depositePrice = document.getElementById('depositePrice');
const city = document.getElementById('city');
const state = document.getElementById('state');
const propertyType = document.getElementById('propertyType');
const floor = document.getElementById("floor");   
const bathrooms = document.getElementById('bathrooms');
const bedrooms = document.getElementById('bathrooms');
const propertyStatus = document.getElementById('propertyStatus');
const propertyArea = document.getElementById('propertyArea');
const propertyDescription = document.getElementById('propertyDescription');



// Function to enable the selection of floor number for only flats 
floor.disabled = true;
type.addEventListener('change', () => {
    if(propertyType.value === "flat")
        floor.disabled = false;
    else
        floor.disabled = true;
        floor.value = "";
});
