export default function filterData(locationData='', BathroomsData='', bedroomsData='', typeData='') {
  return fetch("../assets/properties.json")
    .then((res) => res.json())
    .then((data) => {
      console.log("🚀 ~ .then ~ data:", data);
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

