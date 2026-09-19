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
    let petList=document.getElementById("petList");

    petList.innerHTML =`
        <ol>
            <li>${pet1.name}</li>
            <li>${pet2.name}</li>
            <li>${pet3.name}</li>
        </ol>
    `;
}

displayPets();