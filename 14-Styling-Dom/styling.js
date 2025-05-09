// Example: Dynamically styling a DOM element

document.addEventListener("DOMContentLoaded", () => {
    // Select an element by its ID
    const element = document.getElementById("myElement");

    // Apply styles dynamically
    if (element) {
        element.style.color = "blue"; // Change text color to blue
        element.style.backgroundColor = "lightgray"; // Set background color
        element.style.padding = "10px"; // Add padding
        element.style.border = "2px solid black"; // Add a border
    }
});

// Example: Adding/Removing CSS Classes
document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("myElement");
    if (element) {
        element.classList.add("highlight"); // Add a class
        element.classList.remove("hidden"); // Remove a class
        element.classList.toggle("active"); // Toggle a class
    }
});

// Example: Setting Multiple Styles at Once
document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("myElement");
    if (element) {
        Object.assign(element.style, {
            color: "red",
            fontSize: "20px",
            margin: "15px"
        });
    }
});

// Example: Using CSS Variables
document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.style.setProperty("--main-color", "green");
});

// Example: Animating Styles
document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("myElement");
    let opacity = 0;
    const fadeIn = () => {
        if (opacity < 1) {
            opacity += 0.01;
            element.style.opacity = opacity;
            requestAnimationFrame(fadeIn);
        }
    };
    fadeIn();
});