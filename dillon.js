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

function showDillon() {
    const dillonPage = document.getElementById("dillon-page")
    dillonPage.classList.remove("hidden")
    const clickMeButton = document.getElementById("click-me-button")
    clickMeButton.addEventListener("click", didPressButton)

    const resetButton = document.getElementById("reset-button")
    resetButton.addEventListener("click", reset)
}

function hideDillon() {
    const dillonPage = document.getElementById("dillon-page")
    dillonPage.classList.add("hidden")
}
