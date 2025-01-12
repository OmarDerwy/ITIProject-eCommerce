export function showSelectedProperty(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const properties = JSON.parse(localStorage.getItem('properties'))
    const selectedProperty = properties.find(property => property.id == id);
    console.log(selectedProperty); // debug

    //insert data
    //images
    document.getElementById('main-image').src = selectedProperty.pictures[0];
    const otherImages = document.getElementById('other-images')
    selectedProperty.pictures.forEach((image,index) => {
        if(index < 5){
            const img = document.createElement('img');
            img.src = image;
            img.style.height = '80px';                
            img.classList.add('m-1');
            // change image on hover logic
            img.addEventListener('mouseover', () => {
                document.getElementById('main-image').src = image
            })
            otherImages.appendChild(img);
        }
    });

    

    // side-info
    document.getElementById('property-location').textContent = selectedProperty.location;
    document.getElementById('company-logo').src = selectedProperty.company_logo
    document.getElementById('poster-name').textContent = selectedProperty.poster_name;
    document.getElementById('bedrooms').textContent = selectedProperty.no_of_bedrooms;
    document.getElementById('bathrooms').textContent = selectedProperty.no_of_bathrooms;
    document.getElementById('property-size').textContent = selectedProperty.size;

    const featuresElement = document.getElementById('features');

    selectedProperty.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresElement.appendChild(li);
    });
    document.querySelector("#call-seller-btn").addEventListener("click", () => {
        document.querySelector("#call-seller-btn").textContent = selectedProperty.phone_number
    });
    document.querySelector("#email-seller-btn").addEventListener("click", () => {
        window.location.href = `mailto:${selectedProperty.email}`;
    });
    document.querySelector("#whatsapp-seller-btn").addEventListener("click", () => {
        window.location.href = `https://wa.me/${selectedProperty.phone_number}`;
    });

    console.log("🚀 ~ fd ~ selectedProperty.map_coordinates[0]:", selectedProperty.map_coordinates.latitude)
    //map data
    var map = L.map('map').setView([selectedProperty.map_coordinates.latitude, selectedProperty.map_coordinates.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([selectedProperty.map_coordinates.latitude, selectedProperty.map_coordinates.longitude]).addTo(map);

}