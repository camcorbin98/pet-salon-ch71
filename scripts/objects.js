// Primitive/Basic
let name = "Fernanca";
let lastname = "Murtillo";
let age = 34;
let isStudent = false;

let name1 = "Cameron";
let lastname1 = "Corbin";
let age1 = 20;
let isStudent1 = true;

// Non-Primitive / Advance
//Object Literal -> Key-Value pairs
let student1 = {
    name:"Fernanda",
    lastname:"Murilla",
    age:34,
    isStudent:false
};

let student2 = {
    name:"Andy",
    lastname:"Meza",
    age: 30,
    isStudent:true
};

// Access to the values -> .
// objectName.property
// Student 1 name
console.log(student1.name);

// Student 2 age
console.log(student2.age);

// Student 1 lastname
console.log(student1.lastname);

// Student 2 is a Student
console.log(student2.isStudent);

// INTERPILATION
// Hello, my name is ___, and I am ___ years old.
console.log(`Hello, my name is ${student1.name}, and I am ${student1.age} years old.`);

//Display the interpolation sentence in the paragraph
let p = document.getElementById("paragraph");

p.innerHTML = `Hello, my name is ${student1.name}, and I am ${student1.age} years old.`;

let product = {
    name:"tub",
    company:"T-Mobile",
    state:"Utah",
    isProduct:true
};
let product1 = {
    name:"bayton",
    company:"AT&T",
    state:"Arizona",
    isProduct:true
};
let product2 = {
    name:"ray",
    company:"Verizon",
    state:"California",
    isProduct:false
};

console.log(`${product.name} is manugactured by ${product.company} in ${product.state}.`);
console.log(`${product1.state} manufactures ${product1.company} ${product1.name} for the military`);
console.log(`${product2.company} produces ${product2.name} in ${product2.state}`);

