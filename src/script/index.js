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

showImage(currentIndex); // Show the first image initially

function startSlider() {
    setInterval(showNextImage, 3000);
}

startSlider();