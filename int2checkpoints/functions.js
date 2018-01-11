/* global draw ellipse rect p processing width height size fill line strokeWeight background*/
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        
        draw = function() {
            /**
             * Contains all of the needed functions in order
             * to produce the base image.
             * @param {int} x X of the location of the mouse click
             * @param {int} y Y of the location of the mouse click
             */ 
            drawMe = function(x, y) {
                /**
                 * Randomized variables that determine the
                 * hue of each sections.
                 * Divided into three sections to allow
                 * the maintenance of the color ratios.
                 */ 
                var size = Math.random() * (80) + 50;
                var color = Math.random()*(155)+ 100;
                var highcolor = Math.random()*(100) +155;
                var lowcolor = Math.random()*(70) + 40;
                
                /*Resetting the borders*/
                strokeWeight(1);
                stroke(0, 0, 0);
                //Red
                fill(color, 0, 0);
                ellipse(x, y, size, size);
                //Orange
                fill(highcolor, lowcolor, 0);
                ellipse(x, y, size - 10, size - 10);
                //Yellow
                fill(highcolor, highcolor, 0);
                ellipse(x, y, size - 20, size - 20);
                //Green
                fill(0, color, 0);
                ellipse(x, y, size-30, size-30);
                //Blue
                fill(0, 0, color);
                ellipse(x, y, size-40, size-40);
                //indigo
                fill(lowcolor, 0, highcolor);
                ellipse(x, y, size-50, size-50);
                //Violet
                fill(color, 0, highcolor);
                ellipse(x, y, size-60, size-60);
                //Stick
                strokeWeight(3);
                stroke(random(255), random(255), random(255));
                line(x, y + size/2, x, y + 100);
            };
            /**
             * This function calls drawMe when the mouse is clicked
             */
            mouseClicked = function() {
                /**
                 * Calls @func drawMe
                 * @arg {int} mouseX the x value of the location of the mouse click
                 * @arg {int} mouseY the y value of the location of the mouse click
                 */ 
                drawMe(mouseX, mouseY);
            };
        };
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
