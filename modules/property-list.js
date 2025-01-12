function displayProperties(objectArray){
    const propertyContainer = document.querySelector(".property-container");
    console.log(objectArray);
    objectArray.forEach((property) => {
        const cardContainer = document.createElement("div");
        //create ul element and load it with features
        const features = property.features.map((feature) => `<li class="feature">${feature}</li>`).join('');
        cardContainer.innerHTML = /*html*/`
    <a href="propertyDetail.html?id=${property.id}">
        <div class="card my-3">
            <div class="row">
                <div class="col-12 col-lg-auto">
                    <img src="${property.pictures[1]}" class="card-img-top img-fluid" alt="...">
                </div>
                <div class="col-12 col-lg">
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
                        <ul class="row row-cols-2" id='features'>
                            ${features}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </a>
    `
        propertyContainer.appendChild(cardContainer);
    });
}
