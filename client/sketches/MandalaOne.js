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
    p.background(255, 242, 235);
    p.noStroke();

    p.push(); // OUTER FLOWER OF LIFE NON TRANSPARENT LAYER
      p.translate(300, 300);
      p.rotate(p.radians(p.sin(p.frameCount/240)*200));
      p.push();
        p.scale(2);
        p.fill(255, 112, 255);
        flowerOfLife();
      p.pop();
      p.push();
        p.scale(1.8);
        p.fill(170, 236, 226);
        flowerOfLife();
      p.pop();
    p.pop();

    p.push(); //FIRST HALF PURPLE TRIANGLES TOUCHING THE DIAMONDS
    p.translate(300, 300);
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

    p.push() //TRIANGLES JUST BEYOND FLOWER OF LIFE
    p.translate(300, 300);
    p.fill(247, 128, 207);
    for (let i=0; i<6; i++) {
      p.triangle(-90, 52, -90, -52, -120, 0);
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
      // p.blendMode(p.MULTIPLY);
      p.translate(300, 300);
      p.fill(170, 236, 226);
      p.ellipse(0, 0, 120, 120);
    p.pop();

    p.push() //DARKEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      p.translate(300, 300);
      p.fill(0, 255, (p.sin(p.frameCount/120)+1)*128);
      for (let i=0; i<6; i++) {
        p.triangle(-52, 30, -52, -30, 0, 0);
        rotation(60);
      }
    p.pop()

    p.push() //LIGHTEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      p.translate(300, 300);
      p.fill(197, 255, 215);
      for (let i=0; i<6; i++) {
        p.triangle(-52, -30, 0, 0, -35, 0);
        rotation(60);
      }
    p.pop()

    p.push() // CENTRAL TURQUOIUSE HEXAGON
      p.translate(300, 300);
      p.fill(0, 144, 207);
      for (let i=0; i<6; i++) {
        p.triangle(-52, 30, -35, 0, 0, 0);
        rotation(60);
      }
    p.pop();

    p.push() //12 DIAMOND SHAPES SHAPE
    p.translate(300, 300);
    p.fill(255, 79, 207);
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
