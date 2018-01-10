/* global draw ellipse rect p processing width height size background fill stroke*/
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
        var r = Math.random() * (230) + 25;
        var r2 = Math.random() * (200) + 55;
        var r3 = Math.random() * (100) + 100;
        draw = function() {
            /**
             * @event draws circles until x=400
             * @const r=30
             */
            for (var i = 0; i < 400; i += 35) {
                for (var h = 20; h < 400; h += 40) {
                    if (h / 10 < 3) {
                        fill(r, 0, 0);
                    }
                    else if (h / 10 < 6.5) {
                        fill(0, 0, r2);
                    }
                    else if (h / 10 < 10.5) {
                        fill(0, r3, 0);
                    }
                    else if (h / 10 < 15) {
                        fill(r, r2, 0);
                    }
                    else if (h / 10 < 20) {
                        fill(0, r2, r3);
                    }
                    else if (h / 10 < 25) {
                        fill(r3, 0, r2);
                    }
                    else if (h / 10 < 30) {
                        fill(r3, r2, r);
                    }
                    else if (h / 10 < 34) {
                        fill(r, 0, r3);
                    }
                    else if (h / 10 < 38) {
                        fill(r, r, r3);
                    }
                    else {
                        fill(r2, r2, r2);
                    }
                    for (var j = 0; j < 500; j += 10) {
                        stroke(r, r2, r3, r3);
                    }
                    ellipse(i, h, 30, 30);
                }
            }
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
