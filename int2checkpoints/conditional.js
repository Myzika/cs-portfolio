/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {
    with(processing) {
        size(2000, 1000);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


        draw = function() {
            //background(255);

            if (mouseX < 500) {
                if (mouseY < 100) {
                    strokeWeight(1);
                    stroke(0, 0, 0);
                    fill(255, 255, 255);
                    ellipse(mouseX, mouseY, 80, 80);
                }
                else if (mouseY < 200) {
                    strokeWeight(1);
                    stroke(0, 200, 255);
                    fill(255, 255, 255);
                    ellipse(mouseX, mouseY, 85, 85);
                }
                else if (mouseY < 300) {
                    strokeWeight(1);
                    stroke(0, 100, 120);
                    fill(188, 250, 255);
                    ellipse(mouseX, mouseY, 90, 90);
                }
                else if (mouseY < 400) {
                    strokeWeight(1);
                    stroke(0, 90, 100);
                    fill(142, 246, 255);
                    ellipse(mouseX, mouseY, 95, 95);
                }
                else if (mouseY < 500) {
                    strokeWeight(1);
                    stroke(0, 70, 80);
                    fill(95, 240, 252);
                    ellipse(mouseX, mouseY, 100, 100);
                }
                else if (mouseY < 600) {
                    strokeWeight(1);
                    stroke(0, 50, 40);
                    fill(55, 237, 252);
                    ellipse(mouseX, mouseY, 110, 110);
                }
                else if (mouseY < 700) {
                    strokeWeight(1);
                    stroke(0, 30, 10);
                    fill(28, 237, 255);
                    ellipse(mouseX, mouseY, 120, 120);
                }
                else if (mouseY < 800) {
                    strokeWeight(1);
                    stroke(0, 10, 0);
                    fill(0, 255, 255);
                    ellipse(mouseX, mouseY, 130, 130);
                }
                else {
                    strokeWeight(1);
                    stroke(255, 255, 255);
                    fill(0, 0, 0);
                    ellipse(mouseX, mouseY, 150, 150);
                }
            } //the leftmost part of the page; circles
            else if (mouseX < 1000) {
                if (mouseY < 100) {
                    strokeWeight(1);
                    stroke(0, 0, 0);
                    fill(255, 255, 255);
                    ellipse(mouseX, mouseY, 80, 80);
                }
                else if (mouseY < 200) {
                    strokeWeight(2);
                    stroke(0, 200, 255);
                    fill(255, 255, 255);
                    ellipse(mouseX, mouseY, 85, 85);
                }
                else if (mouseY < 300) {
                    strokeWeight(3);
                    stroke(0, 100, 120);
                    fill(188, 250, 255);
                    ellipse(mouseX, mouseY, 90, 90);
                }
                else if (mouseY < 400) {
                    strokeWeight(4);
                    stroke(0, 90, 100);
                    fill(142, 246, 255);
                    ellipse(mouseX, mouseY, 95, 95);
                }
                else if (mouseY < 500) {
                    strokeWeight(5);
                    stroke(0, 70, 80);
                    fill(95, 240, 252);
                    ellipse(mouseX, mouseY, 100, 100);
                }
                else if (mouseY < 600) {
                    strokeWeight(6);
                    stroke(0, 50, 40);
                    fill(55, 237, 252);
                    ellipse(mouseX, mouseY, 110, 110);
                }
                else if (mouseY < 700) {
                    strokeWeight(7);
                    stroke(0, 30, 10);
                    fill(28, 237, 255);
                    ellipse(mouseX, mouseY, 120, 120);
                }
                else if (mouseY < 800) {
                    strokeWeight(8);
                    stroke(0, 10, 0);
                    fill(0, 255, 255);
                    ellipse(mouseX, mouseY, 130, 130);
                }
                else {
                    stroke(255, 255, 255);
                    strokeWeight(10);
                    fill(0, 0, 0);
                    ellipse(mouseX, mouseY, 150, 150);
                }
            } //circles with changing borders
            else if (mouseX < 1500) {
                if (mouseY < 100) {
                    strokeWeight(1);
                    stroke(0, 0, 0);
                    fill(255, 255, 255);
                    rect(mouseX, mouseY, 80, 80);
                }
                else if (mouseY < 200) {
                    strokeWeight(2);
                    stroke(0, 200, 255);
                    fill(255, 255, 255);
                    rect(mouseX, mouseY, 85, 85);
                }
                else if (mouseY < 300) {
                    strokeWeight(3);
                    stroke(0, 100, 120);
                    fill(188, 250, 255);
                    rect(mouseX, mouseY, 90, 90);
                }
                else if (mouseY < 400) {
                    strokeWeight(4);
                    stroke(0, 90, 100);
                    fill(142, 246, 255);
                    rect(mouseX, mouseY, 95, 95);
                }
                else if (mouseY < 500) {
                    strokeWeight(5);
                    stroke(0, 70, 80);
                    fill(95, 240, 252);
                    rect(mouseX, mouseY, 100, 100);
                }
                else if (mouseY < 600) {
                    strokeWeight(6);
                    stroke(0, 50, 40);
                    fill(55, 237, 252);
                    rect(mouseX, mouseY, 110, 110);
                }
                else if (mouseY < 700) {
                    strokeWeight(7);
                    stroke(0, 30, 10);
                    fill(28, 237, 255);
                    rect(mouseX, mouseY, 120, 120);
                }
                else if (mouseY < 800) {
                    strokeWeight(8);
                    stroke(0, 10, 0);
                    fill(0, 255, 255);
                    rect(mouseX, mouseY, 130, 130);
                }
                else {
                    strokeWeight(10);
                    stroke(255, 255, 255);
                    fill(0, 0, 0);
                    rect(mouseX, mouseY, 150, 150);
                }
            } //squares with changing borders
            else {
                if (mouseY < 100) {
                    strokeWeight(1);
                    stroke(0, 0, 0);
                    fill(255, 255, 255);
                    rect(mouseX, mouseY, 80, 80);
                }
                else if (mouseY < 200) {
                    strokeWeight(1);
                    stroke(0, 200, 255);
                    fill(255, 255, 255);
                    rect(mouseX, mouseY, 85, 85);
                }
                else if (mouseY < 300) {
                    strokeWeight(1);
                    stroke(0, 100, 120);
                    fill(188, 250, 255);
                    rect(mouseX, mouseY, 90, 90);
                }
                else if (mouseY < 400) {
                    strokeWeight(1);
                    stroke(0, 90, 100);
                    fill(142, 246, 255);
                    rect(mouseX, mouseY, 95, 95);
                }
                else if (mouseY < 500) {
                    strokeWeight(1);
                    stroke(0, 70, 80);
                    fill(95, 240, 252);
                    rect(mouseX, mouseY, 100, 100);
                }
                else if (mouseY < 600) {
                    strokeWeight(1);
                    stroke(0, 50, 40);
                    fill(55, 237, 252);
                    rect(mouseX, mouseY, 110, 110);
                }
                else if (mouseY < 700) {
                    strokeWeight(1);
                    stroke(0, 30, 10);
                    fill(28, 237, 255);
                    rect(mouseX, mouseY, 120, 120);
                }
                else if (mouseY < 800) {
                    strokeWeight(1);
                    stroke(0, 10, 0);
                    fill(0, 255, 255);
                    rect(mouseX, mouseY, 130, 130);
                }
                else {
                    strokeWeight(1);
                    stroke(255, 255, 255);
                    fill(0, 0, 0);
                    rect(mouseX, mouseY, 150, 150);
                }
            } //the rightmost part of the page; squares
        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
