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

function toggleBrother() {
    const visibleBrother = localStorage.getItem("visibleBrother")
    if (visibleBrother === "Dillon") {
        hideDillon()
        showConnor()
        localStorage.setItem("visibleBrother", "Connor")
        // Show Connor's page
    } else if (visibleBrother === "Connor") {
        hideConnor()
        showDillon()
        localStorage.setItem("visibleBrother", "Dillon")
        // Show Dillon's page
    } else {
        alert("Invalid brother!")
    }
}

function createBrotherToggle() {
    let brotherToggle = document.createElement('button')
    brotherToggle.id = "brother-toggle"
    brotherToggle.innerHTML = "Toggle Brother"
    brotherToggle.addEventListener("click", toggleBrother)
    const body = document.body
    body.appendChild(brotherToggle)

}


function showConnor() {
    const connorPage = document.getElementById("connor-page")
    connorPage.classList.remove("hidden")
}

function hideConnor() {
    const connorPage = document.getElementById("connor-page")
    connorPage.classList.add("hidden")
}

function showDillon() {
    const dillonPage = document.getElementById("dillon-page")
    dillonPage.classList.remove("hidden")
    const clickMeButton = document.getElementById("click-me-button")
    clickMeButton.addEventListener("click", didPressButton)

    const resetButton = document.getElementById("reset-button")
    resetButton.addEventListener("click", reset)

    const themeToggle = document.getElementById("theme-toggle")
    themeToggle.addEventListener("click", toggleTheme)
}

function hideDillon() {
    const dillonPage = document.getElementById("dillon-page")
    dillonPage.classList.add("hidden")
}

function generalInit() {

    createBrotherToggle()
    let visibleBrother = localStorage.getItem("visibleBrother")

    if (visibleBrother === "Dillon") {
        showDillon()
        localStorage.setItem("visibleBrother", "Dillon")
    } else if (visibleBrother === "Connor") {
        showConnor()
        localStorage.setItem("visibleBrother", "Connor")
    } else {
        // Show Dillon's page as the default
        showDillon()
        localStorage.setItem("visibleBrother", "Dillon")
    }
}

generalInit()


