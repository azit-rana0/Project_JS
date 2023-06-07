const idElement = document.getElementById("box")

idElement.addEventListener("dblclick", function (){

    alert("doubleClick event is working properly 👍");

    document.getElementById("box").innerText = "Thank you for click in twice ✌️✌️"
    document.getElementById("box").style.backgroundColor = "white"
    document.getElementById("box").style.color = "green"
    document.getElementById("box").style.border = "2px solid green"
    document.getElementById("box").style.width = "30rem"
    document.getElementById("box").style.height = "5rem"
    document.getElementById("box").style.display = "flex"
    document.getElementById("box").style.alignItems = "center"
    document.getElementById("box").style.justifyContent = "center"

})