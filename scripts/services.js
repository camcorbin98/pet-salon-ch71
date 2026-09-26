// Service constructor
function Service(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
}


// Array to store services
let services = JSON.parse(localStorage.getItem("services")) || [];


// ==========================================
// NEW: Display registered services
// ==========================================

function displayServices(){

    let serviceList = $("#serviceList");

    serviceList.html("");

    for(let i = 0; i < services.length; i++){

        serviceList.append(`
            <div class="col-md-6 col-lg-4">

                <div class="saved-service-card">

                    <h3>${services[i].name}</h3>

                    <p>${services[i].description}</p>

                    <p class="service-price">
                        $${services[i].price}
                    </p>

                    <button
                        class="btn delete-service-btn"
                        onclick="deleteService(${i})">

                        Delete

                    </button>

                </div>

            </div>
        `);

    }

}


// ==========================================
// NEW: Delete a service
// ==========================================

function deleteService(index){

    services.splice(index, 1);

    localStorage.setItem(
        "services",
        JSON.stringify(services)
    );

    displayServices();

}


// When the service form is submitted
$("#serviceForm").submit(function(event){

    // Prevent the page from refreshing
    event.preventDefault();

    // Get values from the form
    let name = $("#serviceName").val();
    let description = $("#serviceDescription").val();
    let price = $("#servicePrice").val();

    // Start by assuming the form is valid
    let isValid = true;


    // Validate service name
    if(name == ""){
        $("#serviceName").css("border", "2px solid red");
        isValid = false;
    }else{
        $("#serviceName").css("border", "");
    }


    // Validate description
    if(description == ""){
        $("#serviceDescription").css("border", "2px solid red");
        isValid = false;
    }else{
        $("#serviceDescription").css("border", "");
    }


    // Validate price
    if(price == ""){
        $("#servicePrice").css("border", "2px solid red");
        isValid = false;
    }else{
        $("#servicePrice").css("border", "");
    }


    // If everything is valid
    if(isValid){

        // Create the Service object
        let newService = new Service(
            name,
            description,
            price
        );

        // Add service to the array
        services.push(newService);

        // Save services to localStorage
        localStorage.setItem(
            "services",
            JSON.stringify(services)
        );

        // Display in console
        console.log(newService);
        console.log(services);


        // ==========================================
        // NEW: Update services on the page
        // ==========================================

        displayServices();


        // Clear the form
        $("#serviceForm")[0].reset();

        // Remove red borders
        $(".form-control").css("border", "");
    }

});


// ==========================================
// NEW: Display saved services when page loads
// ==========================================

displayServices();


// ==========================================
// Dark Mode
// ==========================================

let savedTheme = localStorage.getItem("theme");

if(savedTheme == "dark"){

    $("body").addClass("dark-mode");

    $("#darkModeBtn").text("Light Mode ☀️");

    $("#darkModeBtn")
        .removeClass("btn-dark")
        .addClass("btn-light");
}


$("#darkModeBtn").click(function(){

    $("body").toggleClass("dark-mode");

    if($("body").hasClass("dark-mode")){

        $("#darkModeBtn").text("Light Mode ☀️");

        $("#darkModeBtn")
            .removeClass("btn-dark")
            .addClass("btn-light");

        localStorage.setItem("theme", "dark");

    }else{

        $("#darkModeBtn").text("Dark Mode 🌙");

        $("#darkModeBtn")
            .removeClass("btn-light")
            .addClass("btn-dark");

        localStorage.setItem("theme", "light");

    }

});