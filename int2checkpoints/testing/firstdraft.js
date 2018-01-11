/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(screen.width - 10, screen.height - 16);
        background(220, 220, 220);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        draw = function() {
            //Resets to White
            fill(255, 255, 255);
            
            mousePressed = function() {
                drawFirst();
            };
            
            keyPressed = function() {
                if (key == RETURN || key == ENTER){
                    background(220, 220, 220);
                    drawSecond();

                }
            };
            
            drawSecond = function() {
                noStroke();
                fill(255, 0, 0);
                ellipse(20+20, 20+10, 22, 22);
                ellipse(40+20, 20+10, 22, 22);
                //fill(255);  //Debug
                triangle(10+20, 25+10, 50+20, 25+10, 30+20, 50+10);
            }
            
            drawFirst = function() {
            //Red
            fill(255, 0, 0);
            rect(10, 10, 100, 10);
            
            //Orange
            fill(255, 140, 0);
            rect(10, 20, 100, 10);
            
            //Yellow
            fill(255, 255, 0);
            rect(10, 30, 100, 10);
            
            //Green
            fill(0, 255, 0);
            rect(10, 40, 100, 10);
            
            //Blue
            fill(0, 0, 255);
            rect(10, 50, 100, 10);
            
            //Purple
            fill(255, 0, 255);
            rect(10, 60, 100, 10);
            }
            
           // drawSecond();
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
