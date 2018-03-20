//Sets alcohol image to alcohol
var brain = document.getElementById("brain");

//Sets coding ingame to code
var code = document.getElementById("code");

code.addEventListener("mouseover", codeText);
code.addEventListener("mouseout", defaultText);
brain.addEventListener("mouseover", brainText);
brain.addEventListener("mouseout", defaultText);

function brainText () {
    document.getElementById("text").innerHTML = "He enjoys studying psychology, and finds it fascinating how the mind works."
}

function codeText () {
    document.getElementById("text").innerHTML = "He also enjoys coding. He is proficient in Java, and is currently learning Javascript."
}

function defaultText() {
    document.getElementById("text").innerHTML = "Bjarne Koll- the mastermind and genius named after the famous creator of C++. He is currently 18 years old and lives in Germany."
}