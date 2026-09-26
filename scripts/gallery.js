// Get all gallery images

let galleryImages = document.querySelectorAll(".gallery-image");


// Keep track of the current image

let currentImage = 0;



// Get slideshow elements

let slideshow = document.getElementById("slideshow");

let slideshowImage = document.getElementById("slideshowImage");

let petName = document.getElementById("petName");

let petTestimonial = document.getElementById("petTestimonial");

let petOwner = document.getElementById("petOwner");

let imageCounter = document.getElementById("imageCounter");



// Display slideshow information

function displaySlide(){

    let selectedImage = galleryImages[currentImage];


    // Display image

    slideshowImage.src = selectedImage.src;


    // Display pet name

    petName.innerHTML = selectedImage.dataset.name;


    // Display testimonial

    petTestimonial.innerHTML =
        `"${selectedImage.dataset.testimonial}"`;


    // Display owner

    petOwner.innerHTML =
        `— ${selectedImage.dataset.owner}`;


    // Display image number

    imageCounter.innerHTML =
        `${currentImage + 1} of ${galleryImages.length}`;

}



// Open slideshow when an image is clicked

for(let i = 0; i < galleryImages.length; i++){

    galleryImages[i].addEventListener("click", function(){

        currentImage = i;

        displaySlide();

        slideshow.style.display = "flex";

    });

}



// Next image

document.getElementById("nextImage")
    .addEventListener("click", function(){

        currentImage++;

        if(currentImage >= galleryImages.length){

            currentImage = 0;

        }

        displaySlide();

    });



// Previous image

document.getElementById("previousImage")
    .addEventListener("click", function(){

        currentImage--;

        if(currentImage < 0){

            currentImage = galleryImages.length - 1;

        }

        displaySlide();

    });



// Close slideshow

document.getElementById("closeSlideshow")
    .addEventListener("click", function(){

        slideshow.style.display = "none";

    });



// Keyboard controls

document.addEventListener("keydown", function(event){


    // Right arrow

    if(event.key == "ArrowRight"){

        currentImage++;

        if(currentImage >= galleryImages.length){

            currentImage = 0;

        }

        displaySlide();

    }


    // Left arrow

    if(event.key == "ArrowLeft"){

        currentImage--;

        if(currentImage < 0){

            currentImage = galleryImages.length - 1;

        }

        displaySlide();

    }


    // Escape

    if(event.key == "Escape"){

        slideshow.style.display = "none";

    }

});



// ==========================================
// Dark Mode
// ==========================================

let savedTheme = localStorage.getItem("theme");


if(savedTheme == "dark"){

    $("body").addClass("dark-mode");

    $("#darkModeBtn").text("Light Mode ☀️");

    $("#darkModeBtn")
        .removeClass("btn-dark")
        .addClass("btn-light");

}



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