//1. Define the array
let namesList = ["Fernanda", "Tato", "Walter", "Rocky",];

// 2. Access to an item -> index
namesList[0]; // Fernanda

//Display the first name
console.log(namesList[0]);

//Display the third name
console.log(namesList[2]);

//3. Update an item (change a name)
namesList[0] = "Maria Fernanda";
console.log(namesList[0]);

// 4. Travel the array (for loop)
for(let i=0; i < name.length; i++){
    console.log(namesList[i]);
}


// ================ Array of Objects =================
let studentsList = [

    {
        name:"Fernanda",
        lastname:"Murillo",
        age:34,
        isStudent: false
    },


    {
        name:"Tato",
        lastname:"Murillo",
        age:4,
        isStudent: false
    },

    {
        name:"Walter",
        lastname:"White",
        age:8,
        isStudent:false
    },
];

console.log(studentsList)

// Display values in the console

// First Student Name
studentsList[0].name;
console.log(studentsList[0].name);

// Third Student Lastname
console.log(studentsList[2].lastname);

//Second Student Age
console.log(studentsList[1].age);

//Print this sentence with first students information
// Hey, this is ____ and I am ___ years old.

console.log(`Hey, this is ${studentsList[0].name} and I am ${studentsList[0].age} years old`);

