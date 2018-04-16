export default function aboutMe (p) {


  p.setup = () => {
    p.createCanvas(1800, 200);

  }

  function rotation(degrees) {
    p.rotate(p.radians(degrees))
  }

  function diamond(x, y) {
    p.push()
      p.fill(31, 72, 255);
      p.translate(x, y);
        p.beginShape();
          p.vertex(0, -100);
          p.vertex(100, 0);
          p.vertex(0, 100);
          p.vertex(-100, 0);
        p.endShape(p.CLOSE);
    p.pop()
  }

  p.draw = () => {

    p.background(89, 113, 255);
    p.noStroke();

    p.fill(31, 72, 255);

    diamond(1800, 100);
    diamond(1600, 100);
    diamond(1400, 100);
    diamond(1200, 100);
    diamond(1000, 100);
    diamond(800, 100);
    diamond(600, 100);
    diamond(400, 100);
    diamond(200, 100);
    diamond(0, 100);

    p.push();
    var a = 750
    p.fill(209, 238, 255);
    p.translate((a - p.frameCount * 2), 100);
      p.triangle(0, -50, -50, 0, 0, 50);

    p.pop();
    // p.push();
    // p.fill(209, 238, 255);
    // p.translate(-100 + ((time - 40) * 1), 100);
    //   p.triangle(0, -100, 100, 0, 0, 100);
    // p.pop();




  }
}
