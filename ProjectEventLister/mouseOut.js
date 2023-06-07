const idElement = document.getElementById("box")

idElement.addEventListener("mouseout", function() {
    
    // alert("you left the safe zone 🙅 (mouse out event working properly)")

    document.getElementById("box").innerText = "You are in Safe zone 😆"
    document.getElementById("box").style.width = "25rem"
    document.getElementById("box").style.height = "5rem"
    document.getElementById("box").style.display = "flex"
    document.getElementById("box").style.alignItems = "center"
    document.getElementById("box").style.justifyContent = "center"
})