function didPressButton() {
    count = document.getElementById("count")
    let stringValue = count.innerHTML
    value = parseInt(stringValue)
    value++
    stringValue = value.toString()
    count.innerHTML = stringValue
}

function reset() {
    document.getElementById("count").innerHTML = "0"
}

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
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        isDarkMode = true
    }
}

const clickMeButton = document.getElementById("click-me-button")
clickMeButton.addEventListener("click", didPressButton)

const resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", reset)

const themeToggle = document.getElementById("theme-toggle")
themeToggle.addEventListener("click", toggleTheme)

