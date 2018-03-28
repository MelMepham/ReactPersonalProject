export default function MandalaOne (p) {

  p.setup = () => {
    p.createCanvas(600, 600);
  }

  function rotation(degrees) {
    p.rotate(p.radians(degrees))
  }

  function flowerOfLife() {
    p.ellipse(450, 450, 210, 210);
    for (let i=0; i<6; i++) {
      p.ellipse(-60, 0, 120, 120);
      rotation(60)
      }
  }

  function diamond() {
    p.beginShape();
      p.vertex(-15, -166.6); //a
      p.vertex(0, -186.6); //b
      p.vertex(15, -166.6); //c
      p.vertex(0, -146.6); //d
    p.endShape(p.CLOSE);
  }

p.draw = () => {
    // DOES TRIPPY THINGS WHEN ITS NOT ON!
    p.background(255, 255, 255);
    p.noStroke();

    p.push(); //FAR OUTER TRIANGLES
    p.translate(300, 300);
    p.scale((p.sin(p.frameCount/120)*1.5)+0.2)
    for (let i=0; i<6; i++) {
      p.fill(143, (p.sin(p.frameCount/120)+1)*128, 255);
      p.triangle(-300, 0, -200, 114, -200, -114);
      rotation(60);

    }
    p.pop();

    p.push(); //SMALLER OF THE FAR OUTER TRIANGLES
    p.translate(300, 300);
    p.scale((p.sin(p.frameCount/120)*1))
    rotation(30);
    for (let i=0; i<6; i++) {
      p.fill(143, (p.sin(p.frameCount/120)+1)*128, 255);
      p.triangle(-300, 0, -200, 114, -200, -114);
      rotation(60);
    }
    p.pop();

    p.push(); // OUTER FLOWER OF LIFE NON TRANSPARENT LAYER
      p.translate(300, 300);
      p.rotate(p.radians(p.sin(p.frameCount/240)*200));
      p.push();
        p.scale(2);
        p.fill(255, (p.sin(p.frameCount/120)+1)*128, 255);
        flowerOfLife();
      p.pop();
      p.push();
        p.scale(1.8);
        p.fill(142, 148, 255);
        flowerOfLife();
      p.pop();
    p.pop();

    p.push(); // LITTLE TURQUOUSE DOTS
    p.translate(300, 300);
      p.rotate(p.radians(p.frameCount/240)*100);
      p.fill(143, 255, 255);
      for (let i=0; i<24; i++) {
        p.ellipse(200, 200, 20, 20);
        rotation(15);
      }
    p.pop()

    p.push(); // TINY BLUE DOTS
      p.translate(300, 300);
      p.rotate(p.radians(p.frameCount/240)*-100);
      p.fill(161, 163, 255);
      for (let i=0; i<24; i++) {
        rotation(7.5);
        p.ellipse(180, 180, 10, 10);
        rotation(7.5);
      }
    p.pop()

    p.push();
    p.translate(300, 300);
    p.scale(((p.sin(p.frameCount/60)+.5)*10)+5);
    p.fill(255, 255, 203, (p.sin(p.frameCount/120)+1)*50);
    p.ellipse (0, 0, 340, 340);
    p.pop();

    p.push(); //TETRAHEDRON PINK
    p.translate(300, 300);
    p.scale((p.sin(p.frameCount/240)*1.3)+.5)
    p.rotate(p.radians(p.frameCount/240)*-50);
    for (let i=0; i<6; i++) {
      p.fill(90, 112, 255);
      p.triangle(-127, 74, -200, 114, -120, 0);
      p.fill(204, 245, 255);
      p.triangle(-200, 114, -127, 74, -59.6, 104);
      rotation(60);
    }
    p.pop();

    p.push(); //TETRAHEDRON PINK
    p.translate(300, 300);
    p.rotate(p.radians(p.frameCount/240)*100);
    for (let i=0; i<6; i++) {
      p.fill(252, 214, 255);
      p.triangle(-127, 74, -200, 114, -120, 0);
      p.fill(252, 129, 255);
      p.triangle(-200, 114, -127, 74, -59.6, 104);
      rotation(60);
    }
    p.pop();

    p.push(); //PURPLE TRIANGLES TOUCHING THE DIAMONDS
    p.translate(300, 300);
    p.fill(161, 163, 255);
    for (let i=0; i<6; i++) {
      p.triangle(-127, 74, -59.6, 104, -120, 0);
      rotation(60);
    }
    p.pop()

    p.push(); //FLOWER OF LIFE PATTERN
    p.translate(300, 300);
      p.rotate(p.radians(p.sin(p.frameCount/240)*200));
      p.fill(255, 255, 255);
      flowerOfLife();
      p.blendMode(p.MULTIPLY);
      p.fill(255, 168, 255);
      flowerOfLife();
    p.pop();

    p.push() //CIRCLE FRAMING THE HEXAGON IN THE CENTER
      p.blendMode(p.MULTIPLY);
      p.translate(300, 300);
      p.fill(170, 236, 226);
      p.ellipse(0, 0, 120, 120);
    p.pop();

    p.push() //DARKEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      p.translate(300, 300);
      p.fill(0, 255, 255);
      p.rotate(p.radians(p.sin(p.frameCount/240)*-300));
      for (let i=0; i<6; i++) {
        p.triangle(-52, 30, -52, -30, 0, 0);
        rotation(60);
      }
    p.pop()

    p.push() //LIGHTEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      p.translate(300, 300);
      p.fill(197, 255, 215);
      p.rotate(p.radians(p.sin(p.frameCount/240)*300));
      for (let i=0; i<6; i++) {
        p.triangle(-52, -30, 0, 0, -35, 0);
        rotation(60);
      }
    p.pop()

    p.push() // CENTRAL TURQUOIUSE HEXAGON
      p.translate(300, 300);
      p.fill(0, 144, 207);
      p.rotate(p.radians(p.sin(p.frameCount/240)*-300));
      for (let i=0; i<6; i++) {
        p.triangle(-52, 30, -35, 0, 0, 0);
        rotation(60);
      }
    p.pop();

    p.push() //12 DIAMOND SHAPES SHAPE
    p.translate(300, 300);
    p.fill(255, (p.sin(p.frameCount/120)+1)*128, 207);
    p.scale((p.sin(p.frameCount/240)*1.3)+.5)
    for (let i=0; i<12; i++) {
      diamond();
      rotation(30);
    }
    p.pop();


    p.push(); // CIRCLE OUTLINE
      p.translate (300, 300);
      p.stroke(255);
      p.strokeWeight(200);
      p.noFill();
      p.ellipse (0, 0, 800, 800);
    p.pop();

  }
}
