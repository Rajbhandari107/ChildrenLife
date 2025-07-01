const apiURL = 'http://127.0.0.1:5000/api/contact';

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    // Removed contact form submit event listener to allow default form submission to Formspree

    // Slideshow for hero banner
    const slides = document.querySelectorAll('.slideshow-container img.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds
    let slideTimer = setInterval(showNextSlide, slideInterval);

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPrevSlide() {
        showSlide(currentSlide - 1);
    }

    const leftBtn = document.querySelector('.slide-btn.left-btn');
    const rightBtn = document.querySelector('.slide-btn.right-btn');

    if (leftBtn) {
        leftBtn.addEventListener('mouseenter', () => {
            clearInterval(slideTimer);
            showPrevSlide();
        });
        leftBtn.addEventListener('mouseleave', () => {
            slideTimer = setInterval(showNextSlide, slideInterval);
        });
        leftBtn.addEventListener('click', () => {
            clearInterval(slideTimer);
            showPrevSlide();
            slideTimer = setInterval(showNextSlide, slideInterval);
        });
    }

    if (rightBtn) {
        rightBtn.addEventListener('mouseenter', () => {
            clearInterval(slideTimer);
            showNextSlide();
        });
        rightBtn.addEventListener('mouseleave', () => {
            slideTimer = setInterval(showNextSlide, slideInterval);
        });
        rightBtn.addEventListener('click', () => {
            clearInterval(slideTimer);
            showNextSlide();
            slideTimer = setInterval(showNextSlide, slideInterval);
        });
    }

    // Read More / Read Less toggle functionality for statements
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textContent = button.previousElementSibling;
            if (textContent.classList.contains('expanded')) {
                textContent.classList.remove('expanded');
                button.textContent = 'READ MORE';
            } else {
                textContent.classList.add('expanded');
                button.textContent = 'READ LESS';
            }
        });
    });
});
