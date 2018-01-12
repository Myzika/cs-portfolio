/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(screen.width, screen.height);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        background(255);
        trees = function() {
            var d = 200;
            var i = 600;
            stroke(84, 56, 34);
            strokeWeight(20);
            noFill();
            curve(5, screen.height -300, 73, 200 + d, 73, 80 + i, 15, 80 + i);
            //curve(5, screen.height + d, 73, 200 +d, 73, 61 + d, 15, 65 + d);
        };
        sky = function() {
            //Color Variables for the sky
            var r = 50;
            var g = 60;
            var b = 110;

            //The 'start' of the sky

            noStroke();
            fill(r, g, b);
            rect(0, 0, screen.width, 25);

            /**
             * Creates the gradient for the sky
             */
            for (var y = 25; y < screen.height * 2; y += 25) {
                noStroke();
                fill(r, g, b);
                rect(0, y, screen.width, 25);
                g -= 2;
                b -= 2;
            }
        }
        ground = function() {
            /**
             * Draws small circles thawt repeat for the ground.
             */
            for (var i = 0; i < screen.width; i += 50) {
                noStroke();
                fill(38, 34, 30);
                ellipse(i, screen.height - 80, 150, 200);
            }
        }
        
        /**
         * Main function
         */ 
        draw = function() {
            //Frame One
            frameOne = function() {
                sky();      //draws the sky
                trees();    //draws the trees
                ground();   //draws the ground
            };
            frameOne();
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
