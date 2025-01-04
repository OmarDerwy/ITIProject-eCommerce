import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import fd from "./search.js"

const propertyContainer = document.querySelector(".property-container");

fd().then((properties) => {
    console.log(properties);
    properties.forEach((property) => {
      const pElement = document.createElement("p");
      pElement.textContent = property.location;
      propertyContainer.appendChild(pElement);
    });
  });
