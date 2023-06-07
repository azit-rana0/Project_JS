let display = document.getElementById("display")
let input = document.getElementById("input")

document.addEventListener("keydown", function(e) {
    input.style.color = "green"
    input.innerText = e.key + " :- is keyDown"
})

document.addEventListener("keyup", function(e) {
    input.style.color = "blue"
    input.innerText = e.key + " :- is KeyUp"
})