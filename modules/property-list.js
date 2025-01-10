import fd from "./search.js"

const propertyContainer = document.querySelector(".property-container");

fd().then((properties) => {
    console.log(properties);
    properties.forEach((property) => {
        const cardContainer = document.createElement("div");
        //   cardContainer.textContent = property.location;
        cardContainer.innerHTML = `
    <div class="card my-3" style="width: 800px;">
        <div class="row">
            <div class="col-auto"><img src="${property.pictures[1]}" class="card-img-left" style="height: 100%" alt="..."></div>
            <div class="col">
                <div class="card-body">
                    <h5 class="card-title">${property.location}</h5>
                    <table class="table my-table table-bordered">
                        <tbody>
                            <tr>
                                <td scope="col" class="table-style"><p class="table-headers">poster name</p><p class="table-text">${property.poster_name}</p></td>
                                <td scope="col" class="table-style" style="width: 60px;"><p class="table-headers">bedrooms</p><p class="table-text">${property.no_of_bedrooms}</p></td>
                                <td scope="col" class="table-style" style="width: 65px;"><p class="table-headers">bathrooms</p><p class="table-text">${property.no_of_bathrooms}</p></td>
                                <td scope="col" class="table-style"><p class="table-headers">size</p><p class="table-text">${property.size}</p></td>
                            </tr>
                        </thead>
                    </table>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
    `
        propertyContainer.appendChild(cardContainer);
    });
});
