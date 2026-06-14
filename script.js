//Portfolio JavaScript code 
console.log("Portfolio website loaded successfully!");

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const themeBtn =document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", function() {
    alert("Thanks for visiting my portfolio!");
});
