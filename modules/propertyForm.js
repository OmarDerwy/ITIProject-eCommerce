// Form elements
const adTitle = document.getElementById('adTitle');
const propertyPrice = document.getElementById('propertyPrice');
const depositePrice = document.getElementById('depositePrice');
const city = document.getElementById('city');
const state = document.getElementById('state');
const propertyType = document.getElementById('propertyType');
const floor = document.getElementById("floor");   
const bathrooms = document.getElementById('bathrooms');
const bedrooms = document.getElementById('bedrooms');
const propertyStatus = document.getElementById('propertyStatus');
const propertyArea = document.getElementById('propertyArea');
const propertyDescription = document.getElementById('propertyDescription');
const furnishingStatus = document.getElementById('furnishingStatus');
const lift = document.getElementById("lift");
const garden = document.getElementById("garden");
const security = document.getElementById("security");
const gym = document.getElementById("gym");
const parking = document.getElementById("parking");
const marketArea = document.getElementById("marketArea");
const uploadImg = document.getElementById("uploadImg");


// Form errors
const adTitleError = document.getElementById('adTitleError')
const propertyPriceError = document.getElementById('propertyPriceError');
const depositePriceError = document.getElementById('depositePriceError');
const cityError = document.getElementById('cityError');
const stateError = document.getElementById('stateError');
const propertyTypeError = document.getElementById('propertyTypeError');
const floorError = document.getElementById("floorError");   
const bathroomsError = document.getElementById('bathroomsError');
const bedroomsError = document.getElementById('bedroomsError');
const propertyStatusError = document.getElementById('propertyStatusError');
const propertyAreaError = document.getElementById('propertyAreaError');
const propertyDescriptionError = document.getElementById('propertyDescriptionError');
const furnishingstatusError = document.getElementById('furnishingStatusError');
const liftError = document.getElementById("liftError");
const gardenError = document.getElementById("gardenError");
const securityError = document.getElementById("securityError");
const gymError = document.getElementById("gymError");
const parkingError = document.getElementById("parkingError");
const marketAreaError = document.getElementById("marketAreaError");
const uploadImgError = document.getElementById("uploadImgError");



// Function to enable the selection of floor number for only flats 
floor.disabled = true;
propertyType.addEventListener('change', () => {
    if(propertyType.value === "flat")
        floor.disabled = false;
    else
        floor.disabled = true;
        floor.value = "";
});

// Function to display error message in the error field
const setError = (input, errorMessage, errorElement) => {
    if (errorMessage) {
        input.classList.add("border-danger");
        errorElement.textContent = errorMessage;
    }
    else {
        input.classList.remove("border-danger");
        errorElement.textContent = "";
    }
};

// Function to validat Ad Title
const validateAdTitle = () => {
    const adTitleInput = adTitle.value;
    let errorMessage = ""
    
    if(adTitle.value.trim().length == 0)
        errorMessage = "Required";
    else if(adTitleInput.trim().length > 60)
        errorMessage = "Title must be maximum 60 characters length";
    else if (adTitleInput.trim().length < 6)
        errorMessage = "Title must be at least 6 characters length";
        
    setError(adTitle, errorMessage, adTitleError);
    return !errorMessage;
}
adTitle.addEventListener("input", validateAdTitle);


// Function to validate property price
const validatePropertyPrice = () => {
    const propertyPriceInput = Number(propertyPrice.value.trim()); // Parse as number
    let errorMessage = "";

    if (propertyPriceInput < 1 || propertyPriceInput > 999999999) {
        errorMessage = "Property price must be between 1 and 999,999,999.";
    }

    setError(propertyPrice, errorMessage, propertyPriceError);
    validateDepositePrice(); // Revalidate deposit price if property price changes
    return !errorMessage;
};

// Function to validate deposit price
const validateDepositePrice = () => {
    const depositePriceInput = Number(depositePrice.value.trim()); // Parse as number
    const propertyPriceInput = Number(propertyPrice.value.trim()); // Parse as number
    let errorMessage = "";

    if (depositePriceInput < 0 || depositePriceInput > 999999999) {
        errorMessage = "Deposit price must be between 0 and 999,999,999.";
    } else if (depositePriceInput > propertyPriceInput) {
        errorMessage = "Deposit price cannot exceed the property price.";
    }

    setError(depositePrice, errorMessage, depositePriceError);
    return !errorMessage;
};

// Event listeners for input validation
propertyPrice.addEventListener("input", validatePropertyPrice);
depositePrice.addEventListener("input", validateDepositePrice);


// Function to validate City 
const validateCity = () => {
    const cityInput = city.value;
    let errorMessage = ""
    if(cityInput === "")
        errorMessage = "Please select an option for City";

    setError(city, errorMessage, cityError);
    return !errorMessage;
}
city.addEventListener("change", validateCity);



// Function to validate State
const validateState = () => {
    const stateInput = state.value;
    let errorMessage = ""
    if(stateInput === "")
        errorMessage = "Please select an option for State";

    setError(state, errorMessage, stateError);
    return !errorMessage;
}
state.addEventListener("change", validateState);


// Function to validate propertyType
const validatePropertyType = () => {
    const propertyTypeInput = propertyType.value;
    let errorMessage = ""
    if(propertyTypeInput === "")
        errorMessage = "Please select an option for Property type";

    setError(propertyType, errorMessage, propertyTypeError);
    return !errorMessage;
}
propertyType.addEventListener("change", validatePropertyType);


// Function to validate floor
const validateFloor = () => {
    const floorInput = floor.value;
    let errorMessage = "";
    if (floorInput < 0 || floorInput > 200)
        errorMessage = "Inavalid input";

    setError(floor, errorMessage, floorError);
    return !errorMessage;
}
floor.addEventListener("input", validateFloor);


// Function to validate bathrooms
const validateBathrooms = () => {
    const bathroomsInput = bathrooms.value;
    let errorMessage = "";
    if(bathroomsInput === "")
        errorMessage = "Bathrooms number required!";
    
    setError(bathrooms, errorMessage, bathroomsError);
    return !errorMessage;
}
bathrooms.addEventListener("input", validateBathrooms);


// Function to validate bedrooms
const validateBedrooms = () => {
    const bedroomsInput = bedrooms.value;
    let errorMessage = "";

    if(bedroomsInput === "")
        errorMessage = "Bedrooms number required!";

    setError(bedrooms, errorMessage, bedroomsError);
    return !errorMessage;
}
bedrooms.addEventListener("input", validateBedrooms);


// Function to validate propertyStatus
const validatePropertyStatus = () => {
    const propertyStatusInput = propertyStatus.value;
    let errorMessage = "";

    if(propertyStatusInput === "")
        errorMessage = "Property Status required";

    setError(propertyStatus, errorMessage, propertyStatusError);
    return !errorMessage;
}
propertyStatus.addEventListener("input", validatePropertyStatus);


// Function to validate propertyStatus
const validateFurnishingStatus = () => {
    const furnishingStatusInput = furnishingStatus.value;
    let errorMessage = "";

    if(furnishingStatusInput === "")
        errorMessage = "Furnishing Status required";

    setError(furnishingStatus, errorMessage, furnishingstatusError);
    return !errorMessage;
}
furnishingStatus.addEventListener("input", validateFurnishingStatus);



// Function to validate propertyArea
const validatePropertyArea = () => {
    const propertyAreaInput = Number(propertyArea.value);
    let errorMessage = "";

    if(propertyAreaInput < 10 || propertyAreaInput > 100000)
        errorMessage = "Invalid Input";

    setError(propertyArea, errorMessage, propertyAreaError);
    return !errorMessage;
}
propertyArea.addEventListener("input", validatePropertyArea);



// Function to validate propertyDescription
const validatePropertyDescription = () => {
    const descriptionInput = propertyDescription.value.trim();
    let errorMessage = "";

    if (descriptionInput.length === 0) 
        errorMessage = "Description cannot be empty.";

    else if (descriptionInput.length < 20)
        errorMessage = "Description must be at least 20 characters.";
    
    else if (descriptionInput.length > 1000)
        errorMessage = "Description cannot exceed 1000 characters.";
    
    setError(propertyDescription, errorMessage, propertyDescriptionError);
    return !errorMessage;
}
propertyDescription.addEventListener("input", validatePropertyDescription);


// Function to validate Lift
const validateLift = () => {
    const liftInput = lift.value;
    let errorMessage = "";

    if (liftInput === "") {
        errorMessage = "Lift status is required.";
    }

    setError(lift, errorMessage, liftError);
    return !errorMessage;
};
lift.addEventListener("input", validateLift);

// Function to validate Garden
const validateGarden = () => {
    const gardenInput = garden.value;
    let errorMessage = "";

    if (gardenInput === "") 
        errorMessage = "Garden status is required.";
    

    setError(garden, errorMessage, gardenError);
    return !errorMessage;
};
garden.addEventListener("input", validateGarden);

// Function to validate Security
const validateSecurity = () => {
    const securityInput = security.value;
    let errorMessage = "";

    if (securityInput === "") 
        errorMessage = "Security status is required.";

    setError(security, errorMessage, securityError);
    return !errorMessage;
};
security.addEventListener("input", validateSecurity);

// Function to validate Gym
const validateGym = () => {
    const gymInput = gym.value;
    let errorMessage = "";

    if (gymInput === "") 
        errorMessage = "Gym status is required.";
    
    setError(gym, errorMessage, gymError);
    return !errorMessage;
};
gym.addEventListener("input", validateGym);

// Function to validate Parking
const validateParking = () => {
    const parkingInput = parking.value;
    let errorMessage = "";

    if (parkingInput === "") 
        errorMessage = "Parking status is required.";

    setError(parking, errorMessage, parkingError);
    return !errorMessage;
};
parking.addEventListener("input", validateParking);

// Function to validate Market Area
const validateMarketArea = () => {
    const marketAreaInput = marketArea.value;
    let errorMessage = "";

    if (marketAreaInput === "") 
        errorMessage = "Market Area status is required.";

    setError(marketArea, errorMessage, marketAreaError);
    return !errorMessage;
};
marketArea.addEventListener("input", validateMarketArea);

// Function to validate the image file input
const validateUploadImg = () => {
    const files = uploadImg.files; // Get all selected files
    let errorMessage = "";

    if (files.length === 0)
        errorMessage = "Please upload at least one image.";
    
    else
    { 
        for (let i = 0; i < files.length; i++) 
        {
            if (!files[i].type.startsWith("image/")) 
            {
                errorMessage = "Only image files are allowed.";
                break;
            }
        }
    }

    setError(uploadImg, errorMessage, uploadImgError);

    return errorMessage === "";
};

uploadImg.addEventListener("change", validateUploadImg);



// Function to validate form submission
document.getElementById("btn-submitProperty").addEventListener("click", (e) => {
    const isStatusValid = validatePropertyStatus();
    const isAreaValid = validatePropertyArea();
    const isAdTitleValid = validateAdTitle();
    const isPropertyPriceValid = validatePropertyPrice();
    const isDepositePriceValid = validateDepositePrice();
    const isCityValid = validateCity(); 
    const isStateValid = validateState();
    const isPropertyTypeValid = validatePropertyType();
    const isFloorValid =  validateFloor();
    const isBathroomsValid = validateBathrooms();
    const isBedroomsValid = validateBedrooms();
    const isPropertyStatusValid = validatePropertyStatus();
    const isPropertyAreaValid = validatePropertyArea();
    const isPropertyDescriptionValid = validatePropertyDescription();
    const isFurnishingStatusValid = validateFurnishingStatus();
    const isLiftValid = validateLift();
    const isGardenValid = validateGarden();
    const isSecurityValid = validateSecurity();
    const isGymValid = validateGym();
    const isParkingValid = validateParking();
    const isMarketAreaValid = validateMarketArea();
    const isUploadImgValid = validateUploadImg();

    if (
        isStatusValid && 
        isAreaValid && 
        isAdTitleValid && 
        isPropertyPriceValid && 
        isDepositePriceValid &&
        isCityValid && 
        isStateValid && 
        isPropertyTypeValid && 
        isFloorValid && 
        isBathroomsValid && 
        isBedroomsValid && 
        isPropertyStatusValid && 
        isPropertyAreaValid && 
        isPropertyDescriptionValid && 
        isFurnishingStatusValid && 
        isLiftValid && 
        isGardenValid && 
        isSecurityValid && 
        isGymValid && 
        isParkingValid &&
        isMarketAreaValid &&
        isUploadImgValid
        ) 
        {   
            e.preventDefault(); // Prevent default form submission
            let obj = {};
            obj["adTitle"] = adTitle.value;
            obj["propertyPrice"] = propertyPrice.value;
            obj["depositePrice"] = depositePrice.value;
            obj["location"] = `${city.value}, ${state.value}`;
            obj["type"] = propertyType.value;
            obj["floor"] = floor.value;
            obj["no_of_bathrooms"] = bathrooms.value;
            obj["no_of_bedrooms"] = bedrooms.value;
            obj["propertyStatus"] = propertyStatus.value;
            obj["size"] = propertyArea.value;
            obj["propertyDescription"] = propertyDescription.value;
            obj["furnishingStatus"] = furnishingStatus.value;
            obj["pictures"] = [];
            obj["features"] = [];

            // Features to check
            let features = ["lift", "garden", "security", "gym", "parking", "marketArea"];

            // Loop through the features and add them to the selectedFeatures array if checked
            for (let i = 0; i < features.length; i++) {
                let feature = document.getElementById(features[i]);
                if (feature && feature.value === "yes") {
                    obj["features"].push(features[i]);
                }
            }

            // images
            if (uploadImg.files.length > 0) 
            {
                for (let i = 0; i < uploadImg.files.length; i++) 
                    obj["pictures"].push("https://picsum.photos/200");
            }

            console.log(obj);

            alert("Form submitted successfully!");
        } 
    
        else {
        e.preventDefault();
        alert("Please fill the required fields before submission");
    }
});
