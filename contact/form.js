document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  // Get the values of the form inputs
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Validate if all fields are filled
  if (name && email && message) {
    // Redirect to thank.html if all fields are filled
    window.location.href = "/contact/thank_you.html";
  } else {
    // Show an alert if the fields are not filled
    alert("Please fill in all required fields.");
  }
});