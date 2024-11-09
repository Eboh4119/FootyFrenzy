const slides = document.querySelectorAll('.switch div');
let currentIndex = 0;
function slideshow() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');
    currentIndex= (currentIndex +  1) % slides.length;
    setTimeout(slideshow, 3000);
};

slideshow();


    // Get the hamburger icon and nav-links
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Add an event listener to the hamburger icon to toggle the menu visibility
hamburger.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("active");
});



