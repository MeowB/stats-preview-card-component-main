window.addEventListener('resize', function() {
    // Get the width of the window
    var windowWidth = window.innerWidth;

    // Check if the window width is above 600px
    if (windowWidth > 600) {
        // If above 600px, change the src attribute of the image to the desktop image
        document.querySelector('.image img').src = './images/image-header-desktop.jpg';
    } else {
        // If below or equal to 600px, change the src attribute of the image to the mobile image
        document.querySelector('.image img').src = './images/image-header-mobile.jpg';
    }
});
