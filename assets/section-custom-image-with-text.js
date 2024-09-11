document.addEventListener('DOMContentLoaded', function () {
    var sliderElement = document.querySelector('.splide');
    if (sliderElement) {
        var options = JSON.parse(sliderElement.getAttribute('data-options'));
        var splideInstance = new Splide(sliderElement, options).mount();

        // Function to update slide background based on active state
        function updateSlideBackgrounds() {
            var slides = document.querySelectorAll('.splide__slide');
            slides.forEach(function (slide) {
                var card = slide.querySelector('.image-with-slider__card');
                if (slide.classList.contains('is-active')) {
                    card.style.backgroundColor = '#7fc96f'; // Active slide background
                } else {
                    card.style.backgroundColor = 'white'; // Inactive slide background
                }
            });
        }

        // Initial call to set the correct background after mounting
        updateSlideBackgrounds();

        // Update backgrounds whenever the slide moves
        splideInstance.on('moved', function () {
            updateSlideBackgrounds();
        });

        // Reapply backgrounds after window resize (optional but recommended)
        window.addEventListener('resize', function () {
            updateSlideBackgrounds();
        });
    }
});
