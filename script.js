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

document.addEventListener('DOMContentLoaded', function() {
    const myGardenLink = document.querySelector('.my-garden-link');
    const sideBar = document.getElementById('sideBar');

    myGardenLink.addEventListener('click', function() {
        sideBar.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        const isClickedInsideSidebar = sideBar.contains(event.target);
        const isClickedOnMyGardenLink = myGardenLink.contains(event.target);

        if (!isClickedInsideSidebar && !isClickedOnMyGardenLink) {
            sideBar.classList.remove('show');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const floweringTimeLink = document.querySelector('.flowering-time-link');
    const topBar = document.getElementById('topBar');

    floweringTimeLink.addEventListener('click', function() {
        topBar.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        const isClickedInsideTopBar = topBar.contains(event.target);
        const isClickedOnFloweringTimeLink = floweringTimeLink.contains(event.target);

        if (!isClickedInsideTopBar && !isClickedOnFloweringTimeLink) {
            topBar.classList.remove('show');
        }
    });
});