// function for offer div
function closeOffer() {
    document.getElementById('offerDiv').style.display = 'none';
}

// function for search bar
function toggleSearch() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
    searchBar.focus();
}

// navbar
function adjustNavbar() {
    const desktopNav = document.querySelector('.desktop-nav');
    const mobileNav = document.querySelector('.mobile-nav');

    if (window.innerWidth <= 768) {
        // If the screen width is 768px or less, show mobile nav
        desktopNav.style.display = 'none';
        mobileNav.style.display = 'flex';
    } else {
        // If the screen width is more than 768px, show desktop nav
        desktopNav.style.display = 'flex';
        mobileNav.style.display = 'none';
    }
}

// Call the function on load
adjustNavbar();

// Add event listener for window resize
window.addEventListener('resize', adjustNavbar);


// Function for hero-section

// script.js
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides a').length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Slide images every 3 seconds
setInterval(showNextSlide, 3000);




// Toggle "Learn More" functionality
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Learn More';
    }
});

