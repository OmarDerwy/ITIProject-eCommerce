import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import filteredData from "./search.js"
//loop through locations in properties.json and create p elements under .property-container


fetch("./assets/properties.json")
    .then((res) => res.json())
    .then((data) => {
        const propertyContainer = document.querySelector(".property-container");
        data.forEach((property) => {
            const pElement = document.createElement("p");
            pElement.textContent = property.location;
            propertyContainer.appendChild(pElement);
        });
    })
    .catch((err) => {
        console.error("Error fetching data:", err);
    });