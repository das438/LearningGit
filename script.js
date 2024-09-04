document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to the Feedback page.");

  // Form submission handling
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your feedback! We value your input.");
  });
});
