// Function to toggle the mobile menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Function to change theme (Fixed issue)
function changeTheme() {
    let selectedTheme = document.getElementById("theme").value;
    
    if (selectedTheme === "dark") {
        document.body.style.background = "#222";
        document.body.style.color = "#fff";
    } else {
        document.body.style.background = "#f8f8f8";
        document.body.style.color = "#333";
    }
}

// Function to highlight menu items on mouseover
function highlightItem(item) {
    item.style.transform = "scale(1.05)";
    item.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
}

// Function to remove highlight on mouseout
function removeHighlight(item) {
    item.style.transform = "scale(1)";
    item.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
}

// Function to handle form submission
function validateForm(event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset();
    }
}

// Function to add focus effect on input fields
function addFocusEffect(input) {
    input.style.border = "2px solid blue";
}

// Function to remove focus effect on blur
function removeFocusEffect(input) {
    input.style.border = "1px solid #ccc";
}

// Attach form submission event
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", validateForm);
    }
});
