
var rot = 60
var rota = 15
var x = .1
var rotspeed = .01

var graphics;


function setup() {
    createCanvas(480, 480);
    // rectMode(CENTER)
    graphics = createGraphics(900, 900);
    translate(70, 70)
}

function tria() {
    push();
    fill(199, 230, 255);
    triangle(-20, -60, 0, -94.64, 0, -72.32);
    fill(111, 230, 255);
    triangle(-20, -60, 0, -72.32, 20, -60);
    fill(62, 86, 255);
    triangle(0, -94.64, 0, -72.32, 20, -60)
    pop();
}
function hexa () {
    beginShape();
    vertex(-86.6, -50);
    vertex(0, -100);
    vertex(86.6, -50);
    vertex(86.6, 50);
    vertex(0, 100);
    vertex(-86.6, 50);
    endShape(CLOSE);
}
function circ () {
    noStroke();
    fill(45, 0, 230);
    beginShape();
    vertex (86.6+(sin(frameCount/120)*120), 0); //a
    vertex (136.6, -30); //b
    vertex (114, 0); //c
    vertex (136.6, 30); //d
    vertex (86.6+(sin(frameCount/120)*120), 0); //e
    endShape(CLOSE);
    strokeWeight(8);
    stroke(255, 240, (sin(frameCount/120)+1)*128);
    noFill();
    ellipse(76.6, 0, 70, 70);
    strokeCap(PROJECT);
    line(110, -45, 136.6, -60)
    line(110, 45, 136.6, 60)
    push();
    noStroke();
    fill(9, 98, 232);
    beginShape()
    vertex(-15, -166.6); //a
    vertex(0, -186.6); //b
    vertex(15, -166.6); //c
    vertex(0, -146.6); //d
    endShape(CLOSE);
    pop();
    noStroke();
    fill(55, 201, 232);
    triangle(-15, -166.6, 0, -250 +(sin(frameCount/120)*60), 0, -186,6);
    fill(169, 208, 255);
    triangle(0, -186.6, 0, -250 +(sin(frameCount/120)*60), 15, -166.6)

    push()
    rotate(radians(30));

    fill(55, 201, 232);
    triangle(-15, -166.6, 0, -220, 0, -186,6);
    fill(169, 208, 255);
    triangle(0, -186.6, 0, -220, 15, -166.6)
    pop();

    push();
    rotate(radians(15));
    fill(255, 242, 35);
    beginShape()
    vertex(-15, -166.6); //a
    vertex(0, -186.6); //b
    vertex(15, -166.6); //c
    vertex(0, -146.6); //d
    endShape(CLOSE);
    fill(55, 201, 232);
    triangle(-15, -166.6, 0, -220, 0, -186,6);
    fill(169, 208, 255);
    triangle(0, -186.6, 0, -220, 15, -166.6)
    pop();
    push();
    rotate(radians(45));
    fill(255, 242, 35);
    beginShape()
    vertex(-15, -166.6); //a
    vertex(0, -186.6); //b
    vertex(15, -166.6); //c
    vertex(0, -146.6); //d
    endShape(CLOSE);
    fill(55, 201, 232);
    triangle(-15, -166.6, 0, -220, 0, -186,6);
    fill(169, 208, 255);
    triangle(0, -186.6, 0, -220, 15, -166.6)
    pop();
}
function circa () {
    ellipse (-250, 0, 72, 72);
    fill(((sin(frameCount/120)+1)*128), 127, 213);
    ellipse (-250, 0, 20, 20);
}
function circb () {
    rotate(radians(7.5));
    fill(136, 127, 213);
    ellipse(-230, 0, 10, 10);
}
function circc () {
    rotate(radians(7.5));
    fill(255, 243, 35);
    ellipse (-290, 0, 10, 10);
}



function draw() {


    scale(0.8, 0.8)
    background(0);
    noStroke();
    fill(50, 15, 91);
    ellipse(300, 300, 510, 510);

    push();
    while (rota < 360) {
    push();
    translate(300, 300);
    scale(1 + x);
    rotate(radians(rota));
    circa();
    rota = (rota + 15)
    pop();
    }
    if (rota >= 360){
    rota = 0;
    }
    pop();
    x = (x + rotspeed);
    if (x > 2) {
    rotspeed = -.01
    }
    if (x < 0) {
    rotspeed = +.01
    }
    push();
    pop();

        push();
        translate(300, 300);
        scale(1.8);
        fill(27, 22, 55, 200);
        hexa();
        pop();
        push();
        translate (300, 300);
        while (rot < 360) {
        push();
        rotate(radians(sin(frameCount/240)*200));
        scale(.5 + x);
        rotate(radians(rot));
        circ();
        rot = (rot + 60)
        pop();
        }
        if (rot >= 360){
        rot = 0;
        }
        pop();
        x = (x + rotspeed);
        if (x > 1.5) {
        rotspeed = -.01
        }
        if (x < 0) {
        rotspeed = +.01
        }
        push();
        translate (300, 300);
        fill(52, 70, 222, ((sin(frameCount/120)+.5)*128));
        scale((sin(frameCount/120)*5)+1)
        hexa();
        pop();
        push();
        translate (300, 300);
        scale(.5);
        fill(0, 0, 0, ((sin(frameCount/60)+.06)*128));
        scale((sin(frameCount/120)*5)+1)
        hexa();
        pop();

        push();
        translate (300, 300);
        rotate(radians(sin(frameCount/240)*200));
        scale((sin(frameCount/120)*5)+1);
        while (rot < 360) {
        push();
        rotate(radians(rot));
        tria();
        rot = (rot + 60)
        pop();
        }
        if (rot >= 360){
        rot = 0;
            }
        pop();

        while (rota < 360) {
        push();
        translate(300, 300);
        rotate(frameCount/-60);
        rotate(radians(rota));
        circb();
        rota = (rota + 15)
        pop();
        }
        if (rota >= 360){
        rota = 0;
        }


        while (rota < 360) {
        push();
        translate(300, 300);
        rotate(frameCount/60);
        rotate(radians(rota));
        circc();
        rota = (rota + 15)
        pop();
        }
        if (rota >= 360){
        rota = 0;
        }

    push();
    translate (300, 300)
    stroke(255)
    strokeWeight(200);
    noFill();
    ellipse (0, 0, 800, 800);
    pop();


    push()
    translate(300, 300)

    rotate(frameCount/60);

    translate(-600, -600);
    image(graphics, 300, 300);
    graphics.fill(255);
    if(mouseIsPressed) {

      graphics.fill(255)
      graphics.stroke(255);
      graphics.ellipse(mouseX, mouseY, 100)

    }

    pop()


}
