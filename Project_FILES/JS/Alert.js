function showAlert() {
        document.getElementById('customAlert').style.display = 'flex';
      }

      function closeAlert() {
        document.getElementById('customAlert').style.display = 'none';
      }

      // Show the alert on page load
      window.onload = function() {
        showAlert();
      };