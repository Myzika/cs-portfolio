/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(screen.width - 10, screen.height - 16);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        background(255);
        var sunHeight = 0;
        
        /**
         * Creates the text at the beginning
         */
        intro = function() {
            var y = screen.height;
            strokeWeight(6);
            noFill();
            
            /**Creates the arrow at the beginning*/
            arrow = function() {
                line(300, y / 2, 300, y / 2 + 100);
                line(300, y / 2, 270, y / 2 + 30);
                line(300, y / 2, 330, y / 2 + 30);
            }
            
            /**Creates the letter t*/
            t = function() {
                line(375, y / 2 + 10, 375, y / 2 + 90);
                line(355, y / 2 + 30, 395, y / 2 + 30);
            };
            
            /**Creates the letter o*/
            o = function() {
                ellipse(420, y / 2 + 65, 55, 55);
            };
            
            /**Creates the letter b*/
            b = function() {
                ellipse(508, y / 2 + 65, 55, 55);
                line(480, y / 2 + 10, 480, y / 2 + 90);
                line(490, y / 2 + 10, 490, y / 2 + 90);
            };
            
            /**Creates the letter e*/
            e = function() {
                line(550, y / 2 + 40, 550, y / 2 + 90);
                line(560, y / 2 + 40, 560, y / 2 + 90);
                line(550, y / 2 + 38, 580, y / 2 + 38);
                line(550, y / 2 + 92, 580, y / 2 + 92);
                line(550, y / 2 + 65, 580, y / 2 + 65);
            };
            
            /**Creates the letter g*/
            g = function() {
                ellipse(620, y / 2 + 65, 55, 55);
                line(647, y / 2 + 60, 647, y / 2 + 120);
                arc(622, 500, 50, 50, 0, 4 * PI / 5);
            };
            
            /**Creates the letter i*/
            i = function() {
                line(680, y / 2 + 40, 680, y / 2 + 90);
                line(658, y / 2 + 38, 678, y / 2 + 38);
                line(670, y / 2 + 40, 670, y / 2 + 90);
                ellipse(672.5, y / 2 + 20, 15, 15);
            };
            
            /**Creates the letter n*/
            n = function() {
                line(700, y / 2 + 40, 700, y / 2 + 90);
                line(700, y / 2 + 40, 730, y / 2 + 90);
                line(730, y / 2 + 40, 730, y / 2 + 90);
            }
            arrow();
            t();
            o();
            b()
            e()
            g();
            i();
            n();
        };
        
        /**
         * Creates the base starting image
         */
        base = function() {
            /** Creates a seesaw */
            seesaw = function() {
                stroke(0);
                strokeWeight(10);
                fill(255);
                line(300, 630, 500, 530); //Main body
                line(325, 610, 315, 590); //Handle A
                line(470, 530 + 7, 460, 510 + 7); //Handle B
                noStroke();
                fill(0, 0, 255);
                triangle(405, 580, 380, 630, 430, 630);
            };

            /** Creates a gradient for the sky */
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

            /** Creates the sun */
            sun = function() {
                var colorA = color(20, 19, 71);
                var colorB = color(255, 195, 0);
                var aura = lerpColor(colorA, colorB, .66);
                stroke(aura);
                fill(255, 195, 0);
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
                    tree1 = function() {
                        var d = 200;
                        var i = 600;
                        var a;
                        stroke(84, 56, 34);
                        strokeWeight(20);
                        noFill();
                        curve(5, screen.height - 300, 73, 200 + d, 73, 80 + i, 15, 80 + i);
                        fill(84, 56, 34);
                        // noStroke();
                        triangle(80, screen.height - 200, 30, 800, 130, 750);
                    };
                    tree2 = function() {
                        var d = 200;
                        var i = 600;
                        var a;
                        var move = 100;
                        stroke(84, 56, 34);
                        strokeWeight(20);
                        noFill();
                        curve(5 + move, screen.height - 300, 73 + move, 200 + d, 73 + move, 80 + i, 15 + move, 80 + i);
                        fill(84, 56, 34);
                        // noStroke();
                        triangle(80 + move, screen.height - 200, 30 + move, 800, 130 + move, 750);
                    };
                    tree3 = function() {
                        var d = 200;
                        var i = 600;
                        var a;
                        var move = screen.width - 100;
                        stroke(84, 56, 34);
                        strokeWeight(20);
                        noFill();
                        curve(5 + move, screen.height - 300, 73 + move, 200 + d, 73 + move, 80 + i, 15 + move, 80 + i);
                        fill(84, 56, 34);
                        // noStroke();
                        triangle(80 + move, screen.height - 200, 30 + move, 800, 130 + move, 750);
                    };
                    tree4 = function() {
                        var d = 200;
                        var i = 600;
                        var a;
                        var move = screen.width - 220;
                        stroke(84, 56, 34);
                        strokeWeight(20);
                        noFill();
                        curve(5 + move, screen.height - 300, 73 + move, 200 + d, 73 + move, 80 + i, 15 + move, 80 + i);
                        fill(84, 56, 34);
                        // noStroke();
                        triangle(80 + move, screen.height - 200, 30 + move, 800, 130 + move, 750);
                    };
                    tree5 = function() {
                        var d = 200;
                        var i = 600;
                        var a;
                        var move = screen.width - 380;
                        stroke(84, 56, 34);
                        strokeWeight(20);
                        noFill();
                        curve(5 + move, screen.height - 300, 73 + move, 200 + d, 73 + move, 80 + i, 15 + move, 80 + i);
                        fill(84, 56, 34);
                        // noStroke();
                        triangle(80 + move, screen.height - 200, 30 + move, 800, 130 + move, 750);
                    };
                    tree6 = function() {
                        var d = 200;
                        var i = 600;
                        var a;
                        var move = screen.width - 300;
                        stroke(84, 56, 34);
                        strokeWeight(20);
                        noFill();
                        curve(5 + move, screen.height - 300, 73 + move, 200 + d, 73 + move, 80 + i, 15 + move, 80 + i);
                        fill(84, 56, 34);
                        // noStroke();
                        triangle(80 + move, screen.height - 200, 30 + move, 800, 130 + move, 750);
                    };
                    tree7 = function() {
                        var d = 200;
                        var i = 600;
                        var a;
                        var move = screen.width - 500;
                        stroke(84, 56, 34);
                        strokeWeight(20);
                        noFill();
                        curve(5 + move, screen.height - 300, 73 + move, 200 + d, 73 + move, 80 + i, 15 + move, 80 + i);
                        fill(84, 56, 34);
                        // noStroke();
                        triangle(80 + move, screen.height - 200, 30 + move, 800, 130 + move, 750);
                    };
                    tree1();
                    tree2();
                    tree3();
                    tree4();
                    tree5();
                    tree6();
                    tree7();
                };

                /** Draws thicker main branches and thinner branches */
                branches = function() {
                    tree1 = function() {
                        //Main Branches
                        strokeWeight(6);
                        stroke(84, 56, 34);
                        triangle(67, 430, 67, 432, 25, 428);
                        triangle(70, 400, 70, 402, 130, 390);
                        triangle(30, 330, 30, 330, 70, 400);

                        //Smaller Branches
                        strokeWeight(4);
                        triangle(128, 390, 140, 370, 140, 370);
                        triangle(128, 390, 150, 410, 150, 410);
                        line(60, 320, 54, 370);
                    };
                    tree2 = function() {
                        var move = 100;
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
                    tree3 = function() {
                        var move = screen.width - 100;
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
                    tree4 = function() {
                        var move = screen.width - 220;
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
                    tree5 = function() {
                        var move = screen.width - 380;
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
                    tree6 = function() {
                        var move = screen.width - 300;
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
                    tree7 = function() {
                        var move = screen.width - 500;
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
                    tree1();
                    tree2();
                    tree3();
                    tree4();
                    tree5();
                    tree6();
                    tree7();
                };

                /** Creates the leaves for the trees */
                leaves = function() {
                    noStroke();
                    tree1 = function() {
                        //Main Leaves, 
                        fill(10, 71, 23, 400);
                        ellipse(80, 400, 220, 130);
                        fill(10, 71, 23, 300);
                        ellipse(120, 350, 100, 80);

                        //Little leaves, 
                        fill(0, 75, 25, 250);
                        ellipse(30, 445, 70, 40);

                        //Med. Leaves, 
                        fill(11, 68, 21, 240);
                        ellipse(45, 330, 90, 80);

                        //Long Leaves, 
                        fill(0, 70, 9, 250);
                        ellipse(140, 383, 120, 80);
                    };
                    tree2 = function() {
                        var move = 50;
                        //Main Leaves, 
                        fill(10, 71, 23, 400);
                        ellipse(80 + move, 400, 220 + move, 130);
                        fill(10, 71, 23, 300);
                        ellipse(120 + move, 350, 100 + move, 80);

                        //Little leaves, 
                        fill(0, 75, 25, 250);
                        ellipse(30 + move, 445, 70 + move, 40);

                        //Med. Leaves, 
                        fill(11, 68, 21, 240);
                        ellipse(45 + move, 330, 90 + move, 80);

                        //Long Leaves, 
                        fill(0, 70, 9, 250);
                        ellipse(140 + move, 383, 120 + move, 80);
                    };
                    tree3 = function() {
                        var move = screen.width - 100;
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
                    tree4 = function() {
                        var move = screen.width - 220;
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
                    tree5 = function() {
                        var move = screen.width - 370;
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
                    tree6 = function() {
                        var move = screen.width - 300;
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
                    tree7 = function() {
                        var move = screen.width - 500;
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
                    tree1();
                    tree2();
                    tree3();
                    tree4();
                    tree5();
                    tree6();
                    tree7();
                };

                /** Calling all of the functions */
                leaves(); //draws the leaves
                trunks(); //draws the tree trunks
                branches(); //draws the branches
            };
            sky(); //draws the sky
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
