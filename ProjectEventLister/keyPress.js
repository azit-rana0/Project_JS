let inputBox = document.getElementById("inputBox")
let display = document.getElementById("display")

inputBox.addEventListener("keypress", function(e) {
    display.style.color = "blue"
    display.innerText = "You have Pressed:- " + e.kay
})