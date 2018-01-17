/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(screen.width, screen.height);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        draw = function() {
            intro = function() {
                var y = screen.height;
                strokeWeight(5);
                arrow = function() {
                    line(300, y / 2, 300, y / 2 + 100);
                    line(300, y / 2, 270, y / 2 + 30);
                    line(300, y / 2, 330, y / 2 + 30);
                }
                t = function() {
                    line(375, y / 2 + 10, 375, y / 2 + 90);
                    line(355, y / 2 + 30, 395, y / 2 + 30);
                }
                o = function() {
                    ellipse(420, y / 2 + 65, 55, 55);
                };
                b = function() {
                    ellipse(508, y / 2 + 65, 55, 55);
                    line(480, y / 2 + 10, 480, y / 2 + 90);
                    line(490, y / 2 + 10, 490, y / 2 + 90);
                }
                e = function() {
                    line(550, y / 2 + 40, 550, y / 2 + 90);
                    line(560, y / 2 + 40, 560, y / 2 + 90);
                    line(550, y / 2 + 38, 580, y / 2 + 38);
                    line(550, y / 2 + 92, 580, y / 2 + 92);
                    line(550, y / 2 + 65, 580, y / 2 + 65);
                }
                g = function() {
                    ellipse(620, y / 2 + 65, 55, 55);
                    line(647, y / 2 + 60, 647, y / 2 + 120);
                    arc(622, 500, 50, 50, 0, 4 * PI / 5);
                };
                i = function() {
                    line(680, y / 2 + 40, 680, y / 2 + 90);
                    line(658, y / 2 + 38, 678, y / 2 + 38);
                    line(670, y / 2 + 40, 670, y / 2 + 90);
                    ellipse(672.5, y / 2 + 20, 15, 15);
                };
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
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
