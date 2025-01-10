// Function to enable the selection of floor number for only flats 
const type = document.getElementById("propertyType");
const floor = document.getElementById("floor");        
floor.disabled = true;
type.addEventListener('change', () => {
    if(type.value === "flat")
        floor.disabled = false;
    else
        floor.disabled = true;
        floor.value = "";
});
