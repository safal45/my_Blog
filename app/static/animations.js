// animations.js

// Example animation
function animateElement() {
    const element = document.getElementById('animate-me');
    element.classList.add('animated', 'bounce'); // Using animate.css classes for animation
    setTimeout(() => {
        element.classList.remove('animated', 'bounce');
    }, 1000);
}

// Add more animation functions as needed
