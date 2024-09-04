document.addEventListener("DOMContentLoaded", function () {
  // Determine the current page or section if necessary
  const pageType = document.body.getAttribute('data-page-type');

  if (pageType === 'feedback') {
    console.log("Welcome to the Feedback page.");

    // Form submission handling
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for your feedback! We value your input.");
    });
  } else if (pageType === 'case-studies') {
    console.log("Welcome to the Case Studies page.");

    // Example interaction: alert for user
    alert("Explore our detailed case studies to learn more about industry applications.");
  }
});