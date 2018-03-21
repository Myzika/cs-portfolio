//Sets an array of colors to the variable of colors.
var colors = ["red", "orange", "yellow", "lime", "blue", "indigo", "violet"];

//Sets the variable i equal to one.
var i = 1;

//At the rate of 15 milliseconds, the color in the background will cycle through all of the colors in the colors array.
window.setInterval(function() {
    document.body.style.backgroundColor = colors[i];
    i++;
    if (i === colors.length) {
        i = 0;
    }
}, 15);

//Stores the button, sets position to absolute, adds event listener
var button = document.getElementById("button");
button.style.position = "absolute";
button.addEventListener("mousemove", dumbButton);

//makes the button move to a random location
function dumbButton() {
    button.style.top = Math.random() * 600 + "px";
    button.style.left = Math.random() * 600 + "px";
}

//loops the text 'SCROLL DOWN' with line breaks in between at a rate of 200 milliseconds.
window.setInterval(function() {
    document.getElementById("text").innerHTML += "SCROLL DOWN <br />";
}, 200);
