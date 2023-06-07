const idElement = document.getElementById("box")

idElement.addEventListener("mouseover", function() {

    alert("you entered in Restricted Area 🙅 (mouse over event is working properly")

    document.getElementById("box").innerText = "Now! You are in Danger zone 💀💀"
    document.getElementById("box").style.width = "30rem"
    document.getElementById("box").style.height = "5rem"
    document.getElementById("box").style.color = "red"
    document.getElementById("box").style.backgroundColor = "white"
    document.getElementById("box").style.display = "flex"
    document.getElementById("box").style.alignItems = "center" 
    document.getElementById("box").style.justifyContent = "center"

})