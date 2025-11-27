function toggleBrother() {
    const visibleBrother = localStorage.getItem("visibleBrother")
    if (visibleBrother === "Dillon") {
        hideDillon()
        if (!isConnorBuilt) {
            buildConnor()
        }
        showConnor()
        localStorage.setItem("visibleBrother", "Connor")
    } else if (visibleBrother === "Connor") {
        hideConnor()
        showDillon()
        localStorage.setItem("visibleBrother", "Dillon")
    } else {
        alert("Invalid brother!")
    }
}

function configureBrotherToggle() {
    let brotherToggle = document.getElementById('brother-toggle')
    brotherToggle.addEventListener("click", toggleBrother)
}


function generalInit() {
    // Hide both pages until we decide which page to present
    hideConnor()
    hideDillon()

    configureBrotherToggle()
    configureThemeToggle()
    let visibleBrother = localStorage.getItem("visibleBrother")
    if (visibleBrother === "Dillon") {
        showDillon()
        localStorage.setItem("visibleBrother", "Dillon")
    } else if (visibleBrother === "Connor") {
        buildConnor()
        showConnor()
        localStorage.setItem("visibleBrother", "Connor")
    } else {
        // Show Dillon's page as the default
        showDillon()
        localStorage.setItem("visibleBrother", "Dillon")
    }
}

generalInit()


