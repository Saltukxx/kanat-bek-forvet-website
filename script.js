// Entry Question with Blur Effect
document.addEventListener("DOMContentLoaded", function () {
    let content = document.getElementById("content");
    let correctAnswer = "kanat bek"; // Correct answer

    let userAnswer = prompt("Umut'un en çok oynamak istediği pozisyon nedir?");
    
    if (userAnswer && userAnswer.toLowerCase() === correctAnswer) {
        content.style.filter = "none"; // Remove blur if answer is correct
        content.style.pointerEvents = "auto"; // Allow interaction if answer is correct
    } else {
        alert("Yeterince iyi bir futbolcu değilsin, bu içeriği görmeye layık değilsin!");
        document.body.style.display = "none"; // Hide content if incorrect answer
    }
});

// Slider Functionality
let currentIndex = 0;
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const totalSlides = slide.length;

document.querySelector('.next').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}
