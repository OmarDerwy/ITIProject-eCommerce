let numberOfBathrooms = document.getElementById("Bathrooms");
let numberOfbedrooms = document.getElementById("bedrooms");
let location = document.getElementById("location");
let type = document.getElementById("type");

let countainer = [];

fetch("./modules/data.json")
  .then((res) => res.json())
  .then((data) => {
    countainer = data;

  })
  .catch((err) => {
    console.error("Error fetching data:", err);
    countainer = [];
  });

export function filterData() {
  let BathroomsData ="" ;
  let bedroomsData ="" ;
  let locationData = "New York";
  let typeData = "";

  let filteredData = countainer.filter((item) => {
    return (
      (BathroomsData === "" || BathroomsData == item.bathrooms) &&
      (bedroomsData === "" || bedroomsData == item.bedrooms) &&
      (locationData === "" || locationData == item.location) &&
      (typeData === "" || typeData == item.type)
    );
  });

  return filteredData;
}
