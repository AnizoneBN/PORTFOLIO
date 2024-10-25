
        // Button click to navigate with animation
        document.getElementById('actionButton').addEventListener('click', function() {
            const overlay = document.getElementById('transitionOverlay');
            overlay.classList.add('active');

            // Delay navigation until after the animation
            setTimeout(() => {
                window.location.href = '/Home/Menu.html';
            }, 1500); // Match this duration with the CSS transition duration
        });

        // Anime.js animation for the heading
        // Make sure to include the anime.js library in your HTML for this to work
        anime({
            targets: '.icon',
            translateY: [-50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1500
        });
    