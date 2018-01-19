/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(screen.availWidth, screen.availHeight);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        background(200);
        var sunHeight = 0;

        /**
         * Creates the text at the beginning
         */
        intro = function() {
            var y = screen.height;
            strokeWeight(6);
            noFill();

            /**Creates the arrow at the beginning*/
            line(300, y / 2, 300, y / 2 + 100);
            line(300, y / 2, 270, y / 2 + 30);
            line(300, y / 2, 330, y / 2 + 30);


            /**Creates the letter t*/
            line(375, y / 2 + 10, 375, y / 2 + 90);
            line(355, y / 2 + 30, 395, y / 2 + 30);


            /**Creates the letter o*/
            ellipse(420, y / 2 + 65, 55, 55);


            /**Creates the letter b*/
            ellipse(508, y / 2 + 65, 55, 55);
            line(480, y / 2 + 10, 480, y / 2 + 90);
            line(490, y / 2 + 10, 490, y / 2 + 90);


            /**Creates the letter e*/
            line(550, y / 2 + 40, 550, y / 2 + 90);
            line(560, y / 2 + 40, 560, y / 2 + 90);
            line(550, y / 2 + 38, 580, y / 2 + 38);
            line(550, y / 2 + 92, 580, y / 2 + 92);
            line(550, y / 2 + 65, 580, y / 2 + 65);


            /**Creates the letter g*/
            ellipse(620, y / 2 + 65, 55, 55);
            line(647, y / 2 + 60, 647, y / 2 + 120);
            arc(622, 500, 50, 50, 0, 4 * PI / 5);


            /**Creates the letter i*/
            line(680, y / 2 + 40, 680, y / 2 + 90);
            line(658, y / 2 + 38, 678, y / 2 + 38);
            line(670, y / 2 + 40, 670, y / 2 + 90);
            ellipse(672.5, y / 2 + 20, 15, 15);


            /**Creates the letter n*/
            line(700, y / 2 + 40, 700, y / 2 + 90);
            line(700, y / 2 + 40, 730, y / 2 + 90);
            line(730, y / 2 + 40, 730, y / 2 + 90);

        };

        /**
         * Creates the base starting image
         */
        base = function() {
            /** Creates a seesaw */
            seesaw = function() {
                stroke(43, 15, 198);
                strokeWeight(10);

                //Main body
                line(300, 630, 500, 530);

                //Handle A
                line(325, 610, 315, 590);

                //Handle B
                line(470, 530 + 7, 460, 510 + 7);
                noStroke();

                //Base
                fill(76, 47, 0);
                triangle(405, 580, 380, 630, 430, 630);
            };

            /** Creates a gradient for the sky */
            sky = function() {

                /**Color Variables for the sky*/
                var r = 30;
                var g = 50;
                var b = 110;

                /**Creates the gradient for the sky*/
                for (var y = 0; y < screen.height * 2; y += 5) {
                    noStroke();
                    fill(r, g, b);
                    rect(0, y, screen.width, 25);
                    g--;
                    b--;
                }
            };

            /** Creates the sun */
            sun = function() {
                var colorA = color(20, 19, 71);
                var colorB = color(255, 195, 0);
                var aura = lerpColor(colorA, colorB, .66);
                stroke(aura);
                fill(255, 195, 0);

                /**
                 * Sun height is a variable that is later manipulated
                 * to raise and lower the sun.
                 */
                ellipse(screen.width / 2, 670 - sunHeight, 200, 200);
            };

            /** Makes the ground */
            ground = function() {
                /**
                 * Draws small circles that repeat for the ground.
                 */
                for (var i = 0; i < screen.width; i += 50) {
                    noStroke();
                    fill(38, 34, 30);
                    ellipse(i, screen.height - 80, 150, 200);
                }
            };

            /** Combines the parts of the tree to draw full trees */
            trees = function() {
                /** Draws all of the tree trunks */
                trunks = function() {
                    tree = function(move) {
                        stroke(84, 56, 34);
                        strokeWeight(20);
                        noFill();
                        curve(5 + move, screen.height - 300, 73 + move, 400, 73 + move, 680, 15 + move, 680);
                        fill(84, 56, 34);
                        triangle(80 + move, screen.height - 200, 30 + move, 800, 130 + move, 750);

                    };
                    tree(0);
                    tree(100);
                    tree(screen.width - 100);
                    tree(screen.width - 220);
                    tree(screen.width - 380);
                    tree(screen.width - 300);
                    tree(screen.width - 500);
                };

                /** Draws thicker main branches and thinner branches */
                branches = function() {
                    tree = function(move) {
                        //Main Branches
                        strokeWeight(6);
                        stroke(84, 56, 34);
                        triangle(67 + move, 430, 67 + move, 432, 25 + move, 428);
                        triangle(70 + move, 400, 70 + move, 402, 130 + move, 390);
                        triangle(30 + move, 330, 30 + move, 330, 70 + move, 400);

                        //Smaller Branches
                        strokeWeight(4);
                        triangle(128 + move, 390, 140 + move, 370, 140 + move, 370);
                        triangle(128 + move, 390, 150 + move, 410, 150 + move, 410);
                        line(60 + move, 320, 54 + move, 370);
                    };
                    tree(0);
                    tree(100);
                    tree(screen.width - 100);
                    tree(screen.width - 220);
                    tree(screen.width - 380);
                    tree(screen.width - 300);
                    tree(screen.width - 500);

                };

                /** Creates the leaves for the trees */
                leaves = function() {
                    noStroke();
                    tree = function(move) {
                        // var move = screen.width - 100;
                        //Main Leaves, 
                        fill(10, 71, 23, 400);
                        ellipse(80 + move, 400, 220, 130);
                        fill(10, 71, 23, 300);
                        ellipse(120 + move, 350, 100, 80);

                        //Little leaves, 
                        fill(0, 75, 25, 250);
                        ellipse(30 + move, 445, 70, 40);

                        //Med. Leaves, 
                        fill(11, 68, 21, 240);
                        ellipse(45 + move, 330, 90, 80);

                        //Long Leaves, 
                        fill(0, 70, 9, 250);
                        ellipse(140 + move, 383, 120, 80);
                    };
                    tree(0);
                    tree(20);
                    tree(70);
                    tree(screen.width - 100)
                    tree(screen.width - 370);
                    tree(screen.width - 220);
                    tree(screen.width - 300);
                    tree(screen.width - 500);
                };

                /** Calling all of the functions */
                leaves(); //draws the leaves
                trunks(); //draws the tree trunks
                branches(); //draws the branches
            };

            sky();
            trees(); //draws the trees
            sun(); //draws the sun
            ground(); //draws the ground
            seesaw(); //Makes a seesaw!
        };

        keyPressed = function() {
            /**
             * Makes the sun move up when the up key is pressed
             * Moves the sun down when the down key is pressed.
             */
            if (key == CODED) {
                if (keyCode == UP) {
                    base();
                    sunHeight += 7.5;
                }
                else if (keyCode == DOWN) {
                    base();
                    sunHeight -= 7.5;
                }
            }
        };

        /**Prints the intro with no fill*/
        draw = function() {
            noFill();
            intro();
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
