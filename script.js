// script.js

// Recursive typing effect
function typeWriter(text, index, interval, element) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        setTimeout(function () {
            typeWriter(text, index + 1, interval, element);
        }, interval);
    }
}

// Initiate the typing effect for the tagline
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const text = "I love to disseminate and infer complex data";
    const typingInterval = 100; // Adjust the typing speed (in milliseconds)
    typeWriter(text, 0, typingInterval, textElement);
});

// Hide and show scrollbars for highlights on hover
let highlights = document.querySelector('.highlights');
highlights.addEventListener('mouseenter', () => {
    highlights.style.overflowX = 'scroll';
});
highlights.addEventListener('mouseleave', () => {
    highlights.style.overflowX = 'hidden';
});

// Smooth scrolling to sections within the page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
