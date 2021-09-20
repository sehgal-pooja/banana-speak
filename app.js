//console.log("linked")

// var userName = prompt("What is your name?");

// alert("Hey "+ userName + "!!")

var btnClick = document.querySelector("#btn-click");
var textArea = document.querySelector("#txt-area");

var displayOutput = document.querySelector("#output");

function clickEventHandler(){
    displayOutput.innerText = "Heya " + textArea.value;
}

btnClick.addEventListener("click", clickEventHandler);
   
