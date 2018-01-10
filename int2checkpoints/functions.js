/* global draw ellipse rect p processing width height size fill line strokeWeight background*/
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        draw = function() {
            //Red
            fill(255, 0, 0);
            ellipse(200, 200, 70, 70);
            //Orange
            fill(255, 165, 0);
            ellipse(200, 200, 60, 60);
            //Yellow
            fill(255, 255, 0);
            ellipse(200, 200, 50, 50);
            //Green
            fill(0, 255, 0);
            ellipse(200, 200, 40, 40);
            //Blue
            fill(0, 0, 255);
            ellipse(200, 200, 30, 30);
            //indigo
            fill(75,0,130);
            ellipse(200, 200, 20, 20);
            //Violet
            fill(148,0,211);
            ellipse(200, 200, 10, 10);
            //Stick
            strokeWeight(2);
            line(200, 200+35, 200, 200+100);
            
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
