// Save
$("#saveBtn").click(function(){
    // 1. Get the value
    let usernameValue = $("#username").val().trim();

    // 2. Use the value
    if(usernameValue !== ""){
        localStorage.setItem("usernameKey", usernameValue);

        displayData();
    }

    
});


// Get
$("#getBtn").click(function(e){
    e.preventDefault();

    let storedUserName = localStorage.getItem("usernamekey");
    
    $("#result").text(storedUserName ? storedUserName : "No data found");
});



//Delete
$("#deleteBtn").click(function(){
    //localStorage.removeItem("usernameKey");
    let confirmation = confirm("Are you sure you want to delete?");

    if(confirmation){
        localStorage.clear();
    }
    
});

function displayData(){
    let usernameValue = $("#username").val().trim();
    let nameValue = $("#name").val().trim();
    let ageValue = $("#age").val();
    let emailValue = $("#email").val().trim()

    $("#result").html(`
        Username: $(usernameValue)<br>
        Name: ${nameValue}<br>
        Age: ${ageValue}<br>
        Email: ${emailValue}
        
    `);
}
