const slider = document.querySelector(".img_slider");
const images = document.querySelectorAll(".img_slider img");
let currentIndex = 0; // Initialize the current index.

function showImage(index) {
    for (let i = 0; i < images.length; i++) {
        if (i === index) {
            images[i].style.display = "block";
        } else {
            images[i].style.display = "none";
        }
    }
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Select next and previous buttons by ID
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");

if (nextButton && prevButton) {
    // Add event listeners for next and previous buttons
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });
}

showImage(currentIndex); // Show the first image initially

function startSlider() {
    setInterval(showNextImage, 5000);
}

startSlider();