/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(screen.width, screen.height);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        background(255);

        /** Combines the parts of the tree to draw full trees */
        trees = function() {
            leaves(); //draws the leaves
            trunks(); //draws the tree trunks
            branches(); //draws the branches
        };

        /** Draws all of the tree trunks */
        trunks = function() {
            var d = 200;
            var i = 600;
            var a;
            stroke(84, 56, 34);
            strokeWeight(20);
            noFill();
            curve(5, screen.height - 300, 73, 200 + d, 73, 80 + i, 15, 80 + i);
            fill(84, 56, 34);
            // noStroke();
            triangle(80, screen.height -200, 30, 800, 130, 750);
        };

        /** Draws thicker main branches and thinner branches */
        branches = function() {
            //Main Branches
            strokeWeight(6);
            stroke(84, 56, 34);
            triangle(67, 450, 67, 452, 30, 445);
            triangle(70, 400, 70, 402, 130, 390);
            triangle(30, 330, 30, 330, 70, 400);

            //Smaller Branches
            strokeWeight(4);
            triangle(128, 390, 140, 370, 140, 370);
            triangle(128, 390, 150, 410, 150, 410);
            line(60, 320, 54, 370);
        };

        /** Creates the leaves for the trees */
        leaves = function() {
            noStroke();
            fill(10, 71, 23, 400);
            ellipse(80, 400, 220, 130);
            fill(10,71,23,300);
            ellipse(120, 350, 100, 80);
            
            //Little leaves, Tree 1
            fill(0, 75, 25, 250);
            ellipse(30, 445, 70, 40);
            
            //Med. Leaves, Tree 1
            fill(11, 68, 21, 240);
            ellipse(45, 330, 90, 80);
            fill(0, 70, 9, 250);
            ellipse(140, 383, 120,80);
            
        };

        /** Creates a gradient for the sky*/
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
        };

        /** Makes the ground */
        ground = function() {
            /**
             * Draws small circles thawt repeat for the ground.
             */
            for (var i = 0; i < screen.width; i += 50) {
                noStroke();
                fill(38, 34, 30);
                ellipse(i, screen.height - 80, 150, 200);
            }
        };

        /** Main function */
        draw = function() {

            /** Frame One */
            frameOne = function() {
                sky(); //draws the sky
                trees(); //draws the trees
                ground(); //draws the ground
            };
            frameOne();
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
