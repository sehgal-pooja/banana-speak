//console.log("linked")

// var userName = prompt("What is your name?");

// alert("Hey "+ userName + "!!")

var btnClick = document.querySelector("#btn-click");
var inputText = document.querySelector("#txt-area");
var outputText = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json"

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
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(erroHandler)
}

btnClick.addEventListener("click", clickEventHandler);
   
