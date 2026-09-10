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