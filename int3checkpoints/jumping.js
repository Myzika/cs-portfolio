//Sets an array of colors to the variable of colors.
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//Sets the variable i equal to one.
var i = 1;
window.setInterval(function() {
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i === colors.length) {
        i = 0;
    }
}, 15);

var button = document.getElementById("button");
button.style.position = "absolute";
button.addEventListener("mousemove", dumbButton);

function dumbButton() {
    button.style.top = Math.random() * 600 + "px";
    button.style.left = Math.random() * 600 + "px";
}


window.setInterval(function() {
    document.getElementById("text").innerHTML += "SCROLL DOWN <br />";
}, 200);
