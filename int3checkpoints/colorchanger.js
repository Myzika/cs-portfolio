//Variable that stores the DOM ID input (the HTML text input)
var input = document.getElementById("input");

//Variable that stores the DOM ID button (the HTML button)
var clickMe = document.getElementById("button");

//Adds event listener on-click button call colorChanger
clickMe.addEventListener("click", colorChanger);

//Sets the background color equal to input.value
function colorChanger(){
    document.body.style.backgroundColor = input.value;
}