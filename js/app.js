document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        // Reset slide index if it exceeds the number of slides
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Remove "active" class from all dots
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Display the current slide and set the corresponding dot as active
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
});


