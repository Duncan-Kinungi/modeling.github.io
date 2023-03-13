document.getElementById("form-id").addEventListener("submit", function(event) {
    event.preventDefault();

    // submit form logic here
     // change button text to "Sent"
     document.getElementById("submit-button").value = "Sent";

    // clear form fields
    this.reset();
  });

/*opening & closing the hamburger menu*/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
});




  