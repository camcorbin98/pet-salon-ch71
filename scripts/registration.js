let pet1 = {
    name:"Dobby",
    age:4,
    gender:"male",
    service:false,
    breed:"terrier",
};
let pet2 = {
    name:"Barbara",
    age:2,
    gender:"female",
    service:false,
    breed:"doberman",
};
let pet3 = {
    name:"Fabio",
    age:6,
    gender:"male",
    service:true,
    breed:"german shepard",
};
function Pet(name, age, breed, gender, service){
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

let pet4 = new Pet("Flapjack", 7, "bulldog", "male", true);
let pet5 = new Pet("Tom", 7, "pitbull", "male", false);
let pet6 = new Pet("Rocko", 2, "bullterrier", "female", true);

function displayPets(){
    let petList = document.getElementById("petList");

    petList.innerHTML =`
        <ol>
            <li>${pet1.name}</li>
            <li>${pet2.name}</li>
            <li>${pet3.name}</li>
        </ol>
    `;
}

function displayRow(pet){
    let petTableBody=document.getElementById("petTableBody");

    petTableBody.innerHTML +=`
        <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.breed}</td>
            <td>
                <button onclick="deletePet(this)" class="btn btn-danger">
                    Delete
                </button>
            
            </td>
        
        </tr>
    `;
}

function deletePet(button){

    button.closest("tr").remove();

}

function registerPet(event){
    event.preventDefault();
    let name = document.getElementById("petName").value;
    let age = document.getElementById("petAge").value;
    let breed = document.getElementById("petBreed").value;
    let gender = document.getElementById("petGender").value;
    let service = document.getElementById("petService").value;

    let newPet = new Pet(name, age, breed, gender, service);

    displayRow(newPet);
}


displayPets();

displayRow(pet1);
displayRow(pet2);
displayRow(pet3);
displayRow(pet4);
displayRow(pet5);
displayRow(pet6);


$("#darkModeBtn").click(function(){

    $("body").toggleClass("dark-mode");

    if($("body").hasClass("dark-mode")){

        $("#darkModeBtn").text("Light Mode ☀️");
        $("#darkModeBtn").removeClass("btn-dark").addClass("btn-light");

    }else{

        $("#darkModeBtn").text("Dark Mode 🌙");
        $("#darkModeBtn").removeClass("btn-light").addClass("btn-dark");

    }

});
