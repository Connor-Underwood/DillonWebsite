

let isDarkMode = false
function toggleTheme() {
    let sunIcon = document.getElementById('sun-icon')
    let moonIcon = document.getElementById('moon-icon')
    if (isDarkMode) {
        // Switching to light mode
        moonIcon.classList.add("hidden")
        sunIcon.classList.remove("hidden")
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        isDarkMode = false
    } else {
        // Switching to dark mode
        moonIcon.classList.remove("hidden")
        sunIcon.classList.add("hidden")
        document.body.style.backgroundColor = "rgb(30,30,30)"
        document.body.style.color = "white"
        isDarkMode = true
    }
}

function configureThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle')
    themeToggle.addEventListener("click", toggleTheme)
}