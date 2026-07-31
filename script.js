// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Select all articles for the fade-in effect
    const fadeElements = document.querySelectorAll('.fade-in');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    // Attach observer to each element
    fadeElements.forEach(el => observer.observe(el));
});
