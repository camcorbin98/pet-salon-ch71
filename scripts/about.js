// ==========================================
// Sonoran Luxury Pet Spa
// About Page Dark Mode
// ==========================================


// Get the dark mode button
console.log("ABOUT.JS IS CONNECTED")
const darkModeBtn = document.getElementById("darkModeBtn");



// ==========================================
// Load Saved Theme
// ==========================================

let savedTheme = localStorage.getItem("theme");


if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

    darkModeBtn.textContent = "Light Mode ☀️";

    darkModeBtn.classList.remove("btn-dark");

    darkModeBtn.classList.add("btn-light");

}



// ==========================================
// Dark Mode Button
// ==========================================

darkModeBtn.addEventListener("click", function(){


    document.body.classList.toggle("dark-mode");


    // Dark mode is ON

    if(document.body.classList.contains("dark-mode")){

        darkModeBtn.textContent = "Light Mode ☀️";

        darkModeBtn.classList.remove("btn-dark");

        darkModeBtn.classList.add("btn-light");

        localStorage.setItem("theme", "dark");

    }


    // Dark mode is OFF

    else{

        darkModeBtn.textContent = "Dark Mode 🌙";

        darkModeBtn.classList.remove("btn-light");

        darkModeBtn.classList.add("btn-dark");

        localStorage.setItem("theme", "light");

    }


});