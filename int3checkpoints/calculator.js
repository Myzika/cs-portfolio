//All of the variables requred for the basic calculator
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var operate = document.getElementById("operate");
var submit = document.getElementById("submit");
var answer = document.getElementById("answer");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var toFactor = document.getElementById("toFactor");
var factors = document.getElementById("factors");

toFactor.addEventListener("click", factorMe);

//Event listener that calls calculateMe when the submit button is clicked
submit.addEventListener("click", calculateMe);

/**
 * Function that does all of the matematical calculations for the basic calculator.
 * Nullchecks all possible inputs
 */
function calculateMe() {
    var num1 = parseInt(number1.value, 10);
    var num2 = parseInt(number2.value, 10);
    var op = operate.value;

    if (!num1) {
        answer.innerHTML = "Please add a number to the first text box. ";
        return;
    }
    else if (!num2) {
        answer.innerHTML = "Please add a number to the second text box. ";
        return;
    }
    else {
        if (op === "+") {
            answer.innerHTML = "Answer: ";
            answer.innerHTML += num1 + num2;
        }
        else if (op === "-") {
            answer.innerHTML = "Answer: ";
            answer.innerHTML += num1 - num2;
        }
        else if (op === "*") {
            answer.innerHTML = "Answer: ";
            answer.innerHTML += num1 * num2;
        }
        else if (op === "/") {
            answer.innerHTML = "Answer: ";
            answer.innerHTML += num1 / num2;
        }
        else if (op === "^") {
            answer.innerHTML = "Answer: ";
            answer.innerHTML += num1 ** num2;
        }
        else {
            answer.innerHTML = "How did you manage that? Select an operator and try again.";
        }
    }
}

/**
 * Function uses the quadratic formula in order to calculate the factors of a quadratic
 * Nullchecks all possible inputs.
 */
function factorMe() {
    var numA = parseInt(a.value, 10);
    var numB = parseInt(b.value, 10);
    var numC = parseInt(c.value, 10);

    if (!numA) {
        factors.innerHTML = "";
        factors.innerHTML += "Please add an 'A' value. ";
    }
    else if (!numB) {
        factors.innerHTML = "";
        factors.innerHTML += "Please add a 'B' value. ";
    }
    else if (!numC) {
        factors.innerHTML = "";
        factors.innerHTML += "Please add a 'C' value. ";
    }
    else {
        factors.innerHTML = "Factors: ";
        factors.innerHTML += (-1 * numB + Math.sqrt(Math.pow(numB, 2) - (4 * numA * numC))) / (2 * numA) * -1;
        factors.innerHTML += ", ";
        factors.innerHTML += (-1 * numB - Math.sqrt(Math.pow(numB, 2) - (4 * numA * numC))) / (2 * numA) * -1;
        return;
    }
}
