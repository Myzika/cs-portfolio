//All of the variables requred for the basic calculator
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var operate = document.getElementById("operate");
var submit = document.getElementById("submit");
var answer = document.getElementById("answer");

//Event listener that calls calculateMe when the submit button is clicked
submit.addEventListener("click", calculateMe);

/**
 * Function that does all of the matematical calculations
 * 
 */ 
function calculateMe() {
    var num1 = parseInt(number1.value, 10);
    var num2 = parseInt(number2.value, 10);
    var op = operate.value;

    if (!num1) {
        answer.innerHTML = "Please add a number to the first text box.";
        return;
    }
    else if (!num2) {
        answer.innerHTML = "Please add a number to the second text box.";
        return;
    }
    else {
        if (op === "+") {
            answer.innerHTML = num1 + num2;
        }
        else if (op === "-") {
            answer.innerHTML = num1 - num2;
        }
        else if (op === "*") {
            answer.innerHTML = num1 * num2;
        }
        else if (op === "/") {
            answer.innerHTML = num1 / num2;
        }
        else if (op === "^") {
            answer.innerHTML = num1 ** num2;
        }
        else {
            answer.innerHTML = "How did you manage that? Select an operator and try again.";
        }
    }
}

