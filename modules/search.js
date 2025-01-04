let numberOfBathrooms = document.getElementById("Bathrooms");
let numberOfbedrooms = document.getElementById("bedrooms");
let location = document.getElementById("location");
let type = document.getElementById("type");


export default function filterData() {
  return fetch("./assets/properties.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("🚀 ~ .then ~ data:", data);
      let BathroomsData = "";
      let bedroomsData = "";
      let locationData = "";
      let typeData = "";

      return data.filter((item) => {
        return (
          (BathroomsData === "" || BathroomsData == item.no_of_bathrooms) &&
          (bedroomsData === "" || bedroomsData == item.no_of_bedrooms) &&
          (locationData === "" || item.location.includes(locationData)) &&
          (typeData === "" || typeData == item.type)
        );
      });
      
      // return filteredData;
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
      container = [];
    });

}

