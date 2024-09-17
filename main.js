window.onload = function() {
    const element = document.querySelector('.profile');
    // Listen for the animation to end
    element.addEventListener('animationend', () => {
        element.classList.add('animation-complete'); // Add the class to re-enable interaction
    });
};
