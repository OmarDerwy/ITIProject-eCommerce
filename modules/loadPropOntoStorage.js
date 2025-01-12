export function loadPropOntoStorage() {
   fetch("../assets/properties.json")
    .then((res) => res.json())
    .then((data) => {
        console.log("🚀 ~ .then ~ data:", data);
        localStorage.setItem("properties", JSON.stringify(data));
      })
      // return filteredData;
    .catch((err) => {
      console.error("Error fetching data:", err);
      container = [];
    });

}
