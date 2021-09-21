//console.log("linked")

// var userName = prompt("What is your name?");

// alert("Hey "+ userName + "!!")

var btnClick = document.querySelector("#btn-click");
var inputText = document.querySelector("#txt-area");
var outputText = document.querySelector("#output");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationalURL(text){
    return url + "?" + "text=" + text
}

function erroHandler(error){
    console.log("Error occured!!", error)
    alert("Something went wrong!! Please try again after some time.")
}

function clickEventHandler(){
    var input = inputText.value;
    fetch(getTranslationalURL(input))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(erroHandler)
}

btnClick.addEventListener("click", clickEventHandler);
   
