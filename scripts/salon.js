// Salon object
let salon = {
    name: "Sonoran Luxury Pet Spa",
    hours: "8:00 AM to 6:00 PM",
    phone: "555-123-4567",
    address: "6885 E. Cochise Rd., Paradise Valley, Arizona 85253"
};


// Display salon information
document.getElementById("salonInfo").innerHTML = `
    ${salon.name} is open from ${salon.hours}.<br>
    Phone: ${salon.phone}<br>
    Address: ${salon.address}
`;


// Get saved theme from localStorage
let savedTheme = localStorage.getItem("theme");


// Apply dark mode if it was previously selected
if(savedTheme == "dark"){

    $("body").addClass("dark-mode");

    $("#darkModeBtn").text("Light Mode ☀️");

    $("#darkModeBtn")
        .removeClass("btn-dark")
        .addClass("btn-light");
}


// Dark mode button
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