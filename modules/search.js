let numberOfBathrooms = document.getElementById("Bathrooms");
let numberOfbedrooms = document.getElementById("bedrooms");
let location = document.getElementById("location");
let type = document.getElementById("type");

let container = [];

fetch("./assets/properties.json")
  .then((res) => res.json())
  .then((data) => {
    container = data;

  })
  .catch((err) => {
    console.error("Error fetching data:", err);
    container = [];
  });

export default function filterData() {
  let BathroomsData ="" ;
  let bedroomsData ="" ;
  let locationData = "";
  let typeData = "";

  let filteredData = container.filter((item) => {
    return (
      (BathroomsData === "" || BathroomsData == item.no_of_bathrooms) &&
      (bedroomsData === "" || bedroomsData == item.no_of_bedrooms) &&
      (locationData === "" || locationData == item.location) &&
      (typeData === "" || typeData == item.type)
    );
  });

  return filteredData;
}
