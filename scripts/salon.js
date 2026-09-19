let salon = {
    name: "Southwestern Salon",
    hours: {
        open: "8:00 AM",
        close: "6:00 PM",
    },
    phone: "555-123-4567",
    address:{
        street: "6885 E. Cochise Rd.",
        city: "Paradise Valley",
        state: "Arizona",
        zip: "85253",
    }
};
console.log(salon.name);
console.log(salon.hours.open);
console.log(salon.hours.close);
console.log(salon.phone);
console.log(salon.address.street);
console.log(salon.address.city);
console.log(salon.address.state);
console.log(salon.address.zip);

function displaySalonInfo(){
    let p = document.getElementById("salonInfo");

    p.innerHTML = salon.name + " is open from " +
        salon.hours.open + " to " +
        salon.hours.close + "." +
        "Phone: " + salon.phone + "." +
        "Address:" + salon.address.street + "," +
        salon.address.city + "," +
        salon.address.state + " " +
        salon.address.zip + ".";
}
displaySalonInfo();