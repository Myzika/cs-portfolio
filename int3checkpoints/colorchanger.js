//Variable that stores the DOM ID input (the HTML text input)
var input = document.getElementById("input");

//Variable that stores the DOM ID button (the HTML button)
var clickMe = document.getElementById("button");

clickMe.addEventListener("click", colorChanger);
function colorChanger(){
    document.body.style.backgroundColor = input.value;
}