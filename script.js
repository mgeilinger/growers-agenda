document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('.about-link');
    const aboutBox = document.getElementById('aboutBox');

    // Toggle the about box visibility when clicking on the about link
    aboutLink.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        aboutBox.classList.toggle('show');
    });

    // Hide the about box when clicking anywhere outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideAboutBox = aboutBox.contains(event.target);
        const isClickInsideAboutLink = aboutLink.contains(event.target);
        
        // If the click is not inside the about box and not on the about link, hide the about box
        if (!isClickInsideAboutBox && !isClickInsideAboutLink) {
            aboutBox.classList.remove('show');
        }
    });
});