function filterData() {
  //get search params
  const params = new URLSearchParams(window.location.search);
  const locationData = params.get("location");
  const typeData = params.get("type");
  const bedroomsData = params.get("bedrooms");
  const BathroomsData = params.get("bathrooms");

  const data = JSON.parse(localStorage.getItem("properties"));
  return data.filter((item) => {
    return (
      (BathroomsData === "" || BathroomsData === null || BathroomsData == item.no_of_bathrooms) &&
      (bedroomsData === "" || bedroomsData === null || bedroomsData == item.no_of_bedrooms) &&
      (locationData === "" || locationData === null || item.location.includes(locationData)) &&
      (typeData === "" || typeData === null || typeData == item.type)
    );
  });
}

