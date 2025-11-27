let isConnorBuilt = false
function buildConnor() {
    buildInternships()
    isConnorBuilt = true
}

function showConnor() {
    const connorPage = document.getElementById("connor-page")
    connorPage.classList.remove("hidden")
    showInternships()
}

function hideConnor() {
    const connorPage = document.getElementById("connor-page")
    connorPage.classList.add("hidden")
}

