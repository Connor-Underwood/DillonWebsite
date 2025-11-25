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


const clickMeButton = document.getElementById("clickMeButton")
clickMeButton.addEventListener("click", didPressButton)

const resetButton = document.getElementById("resetButton")
resetButton.addEventListener("click", reset)
