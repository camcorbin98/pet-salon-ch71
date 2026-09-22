function Student(name, lastname, cohort, email, classValue){
    this.name = name;
    this.lastname = lastname;
    this.cohort = cohort;
    this.email = email;
    this.class = classValue;
}

//====Register Student==///
function registerStudent(){
    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let lastname = document.getElementById("studentLastName").value;
    let cohort = document.getElementById("studentCohort").value;
    let email = document.getElementById("studentEmail").value;
    let classValue = document.getElementById("classValue").value;

    let newStudent = newStudnet(name, lastname, cohort, email, classValue);
    
    let body = document.getElementById("body");
    const row = document.createElement("tr");

    row.innerHTML += `
        <tr>
            <td> ${newStudent.name} </td>
            <td> ${newStudent.lastname}</td>
            <td> ${newStudent.cohort}</td>
            <td> ${newStudent.email}</td>
            <td> ${newStudent.class}</td>
            <td> <button class="btn-danger delete-btn">Delete</button> </td>
        <tr>
    `;

    //Delete functionality
    row.querySelector(".delete-btn").addEventListener("click", function(){
        let confirmation = confirm("Are you sure you want to delete this student?");

        if(confirmation){
            row.remove();
        }
    });

    body.appendChild(row);
}

///====== Anonymous Function - Test ====
//const button = document.querySelector("#testButton");

document.querySelector("#testButton").addEventListener("click", function(){
    alert("Button Clicked!");
});
