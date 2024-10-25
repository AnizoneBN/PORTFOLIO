   
      // Apply Anime.js animations to input fields and buttons
      document.querySelectorAll('.input-group').forEach((group, index) => {
        group.addEventListener('mouseenter', () => {
          anime({
            targets: group,
            scale: 1.05,
            duration: 500,
            easing: 'easeInOutQuad',
          });
        });

        group.addEventListener('mouseleave', () => {
          anime({
            targets: group,
            scale: 1,
            duration: 500,
            easing: 'easeInOutQuad',
          });
        });
      });

      document.querySelector('.btn').addEventListener('mouseenter', () => {
        anime({
          targets: '.btn',
          scale: 1.1,
          backgroundColor: '#0c8bf3',
          duration: 500,
          easing: 'easeInOutQuad',
        });
      });

      document.querySelector('.btn').addEventListener('mouseleave', () => {
        anime({
          targets: '.btn',
          scale: 1,
          backgroundColor: '#18f',
          duration: 500,
          easing: 'easeInOutQuad',
        });
      });

      // Form submission handling
      document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Get the values of the form inputs
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.querySelector('input[placeholder="Purpose of Visit"]').value.trim(); // Assuming the purpose of visit is the message

        // Validate if all fields are filled
        if (name && email && message) {
          // Redirect to thank.html if all fields are filled
          window.location.href = "/contact/thank_you.html";
        } else {
          // Show an alert if the fields are not filled
          alert("Please fill in all required fields.");
        }
      });
    