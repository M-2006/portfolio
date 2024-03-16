function handleRefresh(){
    window.location.reload();
}

let currentThemeSetting = localStorage.getItem("theme") || "light"; // Define currentThemeSetting globally

function toggleTheme() {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    
    // Update theme icon
    const themeIcon = document.getElementById("themeIcon");
    themeIcon.className = newTheme === "dark" ? "bi bi-moon" : "bi bi-sun";

    // Update the currentThemeSetting in memory
    currentThemeSetting = newTheme;

    // Update the theme attribute on the HTML element
    document.documentElement.setAttribute("data-theme", newTheme);

    // Update in local storage
    localStorage.setItem("theme", newTheme);
}

// Update button aria-label and icon on page load
function initializeTheme() {
    const button = document.querySelector("[data-theme-toggle]");
    const themeIcon = document.getElementById("themeIcon");

    if (currentThemeSetting === "dark") {
        button.setAttribute("aria-label", "Change to light theme");
        themeIcon.className = "bi bi-moon";
    } else {
        button.setAttribute("aria-label", "Change to dark theme");
        themeIcon.className = "bi bi-sun";
    }

    // Update the theme attribute on the HTML element
    document.documentElement.setAttribute("data-theme", currentThemeSetting);

    // Update the background color of the body
    document.body.style.backgroundColor = currentThemeSetting === "dark" ? "#333333" : "#ffffff";
}

// Add event listener to theme toggle button
const button = document.querySelector("[data-theme-toggle]");
button.addEventListener("click", () => {
    toggleTheme();
    initializeTheme();
});

// Initialize theme on page load
initializeTheme();
