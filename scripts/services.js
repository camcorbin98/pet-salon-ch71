// Service constructor
function Service(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
}


// Array to store services
let services = JSON.parse(localStorage.getItem("services")) || [];


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
        let newService = new Service(name, description, price);

        // Add service to the array
        services.push(newService);

        // Save services to localStorage
        localStorage.setItem("services", JSON.stringify(services));

        // Display in console
        console.log(newService);
        console.log(services);

        // Clear the form
        $("#serviceForm")[0].reset();

        // Remove red borders
        $(".form-control").css("border", "");
    }

});