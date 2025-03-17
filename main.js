window.onload = function() {
    // Handle profile animation on index page
    const profileElement = document.querySelector('.profile');
    if (profileElement) {
        profileElement.addEventListener('animationend', () => {
            profileElement.classList.add('animation-complete');
        });
    }

    // Add active class to current page in navigation
    highlightCurrentPage();
    
    // Add animation complete class to project cards after animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('animationend', () => {
            card.classList.add('animation-complete');
        });
    });
    
    // Add animation complete class to tech paragraphs after animation
    const techParagraphs = document.querySelectorAll('.tech p');
    techParagraphs.forEach(paragraph => {
        paragraph.addEventListener('animationend', () => {
            paragraph.classList.add('animation-complete');
        });
    });
    
    // Add animation complete class to qualification body after animation
    const qualBody = document.querySelector('.qualBody');
    if (qualBody) {
        qualBody.addEventListener('animationend', () => {
            qualBody.classList.add('animation-complete');
        });
    }
    
    // Add animation complete class to image grid after animation
    const imageGrid = document.querySelector('.image-grid');
    if (imageGrid) {
        imageGrid.addEventListener('animationend', () => {
            imageGrid.classList.add('animation-complete');
        });
    }
    
    // Add animation complete class to service content after animation
    const serviceContent = document.querySelector('.service-content');
    if (serviceContent) {
        serviceContent.addEventListener('animationend', () => {
            serviceContent.classList.add('animation-complete');
        });
    }
};

function highlightCurrentPage() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // If no specific page is in the URL (e.g., just the domain), assume it's index.html
    const page = currentPage === '' ? 'index.html' : currentPage;
    
    // Find all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Loop through each link and check if it corresponds to current page
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // If link href matches current page, add active class
        if (linkPage === page) {
            link.classList.add('active');
        }
    });
}