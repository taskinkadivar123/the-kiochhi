document.addEventListener('DOMContentLoaded', () => {
    // Simple Navbar Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if(window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });
    
    // Mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // Automatic Review Slider
    const slidesContainer = document.querySelector('.review-slides');
    const slides = document.querySelectorAll('.review-slide');
    if (slidesContainer && slides.length > 0) {
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex++;
            if (currentIndex >= slides.length) {
                currentIndex = 0;
            }
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 4000); // Change slide every 4 seconds
    }

    // Gallery Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-img');

    if(filterBtns.length > 0 && galleryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                });
            });
        });
    }
});
