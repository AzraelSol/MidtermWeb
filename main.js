const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0; // Keeps track of the current slide index

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderNav(currentSlide);
}

// Auto slide every 5 seconds
let autoSlideInterval = setInterval(nextSlide, 5000);

// Function to handle slider navigation
function sliderNav(manual) {
    clearInterval(autoSlideInterval); // Clear the interval to prevent conflicts
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

    // Restart auto sliding after manual navigation
    autoSlideInterval = setInterval(nextSlide, 5000);
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});
