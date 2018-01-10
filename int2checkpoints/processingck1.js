/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(1368, 768);
        background(158, 175, 255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

        var midline = 400;
        var size = 50;
        var xpos = 20;
        var blue = color(66, 134, 244);
        var red = color(255, 0, 0);
        var pur1 = lerpColor(red, blue, .33);
        var pur2 = blendColor(red, blue, MULTIPLY);
        var pur3 = lerpColor(red, blue, .66);
        var col = color(132, 132, 132);
        var pos = 400;
        var pos1 = 300;
        var pos2 = 400;
        var size1 = 50;
        var size2 = 60;
        var size3 = 40;

        draw = function() {
            fill(blue);
            ellipse(xpos, midline, size, size);
            fill(red);
            ellipse(pos, pos, size, size);
            fill(pur1);
            ellipse(midline, pos, size, size);
            xpos = xpos * 2;
            midline = midline / 1.2;
            size--;
            pos = pos / 2;
            fill(pur2)
            stroke(255, 0, 0);
            ellipse(pos1, pos1, size2, size2);
            fill(pur3);
            ellipse(pos2, pos2, size1, size1);
            pos2++;
            size1 = size1 - .2;
            ellipse(pos2, pos2, size2, size2);
            size2 = size2 / 2;
            fill(col);
            ellipse(300, 600, size3, 200);
            size3++;
        };
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
