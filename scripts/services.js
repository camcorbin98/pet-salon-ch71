// Service constructor
function Service(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
}


// When the service form is submitted
$("#serviceForm").submit(function(event){

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the values from the form
    let name = $("#serviceName").val();
    let description = $("#serviceDescription").val();
    let price = $("#servicePrice").val();

    // Start by assuming the form is valid
    let isValid = true;


    // Check the service name
    if(name == ""){
        $("#serviceName").css("border", "2px solid red");
        isValid = false;
    }else{
        $("#serviceName").css("border", "");
    }


    // Check the service description
    if(description == ""){
        $("#serviceDescription").css("border", "2px solid red");
        isValid = false;
    }else{
        $("#serviceDescription").css("border", "");
    }


    // Check the service price
    if(price == ""){
        $("#servicePrice").css("border", "2px solid red");
        isValid = false;
    }else{
        $("#servicePrice").css("border", "");
    }


    // If all fields are filled out
    if(isValid){

        // Create a new Service object
        let newService = new Service(name, description, price);

        // Display the object in the console
        console.log(newService);

        // Clear the form
        $("#serviceForm")[0].reset();

        // Remove all red borders
        $(".form-control").css("border", "");
    }

});