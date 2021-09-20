//console.log("linked")

// var userName = prompt("What is your name?");

// alert("Hey "+ userName + "!!")

var btnClick = document.querySelector("#btn-click");
var textArea = document.querySelector("#txt-area");

btnClick.addEventListener("click", function clickEventHandler(){
    console.log(textArea.value);
});