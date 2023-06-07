const idElement = document.getElementById("box")

idElement.addEventListener("click" , onclick)
function onclick() {
    document.getElementById("box").innerText = "Thank You 🙏🙏"
    document.getElementById("box").style.width = "30rem"
    document.getElementById("box").style.height = "5rem" 
    document.getElementById("box").style.display = "flex"
    document.getElementById("box").style.alignItems = "center"
    document.getElementById("box").style.justifyContent = "center"

    alert("you just clicked me 👍");
}