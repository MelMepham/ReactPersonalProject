export default function aboutMe (p) {

  var a, b, c, d, e, f
  var counter
  p.setup = () => {
    p.createCanvas(1800, 200);
    counter = 0
    a= -500; b= -300; c= -100; d= 1900; e= 2100; f= 2300
  }

  function counterTimer() {
    counter > 1600 ? counter = 0 : counter++;
  }

  function rotation(degrees) {
    p.rotate(p.radians(degrees))
  }

  function diamond(x, y) {
    p.push()
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

    p.push()
      p.fill(31, 72, 255)
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
      p.fill(89, 196, 221)
        diamond(100, 0);
        diamond(1500, 200);
        diamond(700, 200);
        diamond(300, 0);
      p.fill(154, 248, 218)
        diamond(500, 200);
        diamond(1300, 0);
        diamond(900, 200);
        diamond(1900, 200);
      p.fill(163, 191, 235)
        diamond(100, 200);
        diamond(1700, 0);
        diamond(900, 0);
        diamond(1500, 0);
      p.fill(139, 227, 202)
        diamond(500, 0);
        diamond(1300, 200);
        diamond(900, 0);
        diamond(1100, 0);

    p.pop()

      p.push();
      p.fill(139, 227, 202);
        p.push();
          d < -100 ? d = 1900 : d = d-2;
          p.translate(d, 100);
            p.triangle(0, -100, -100, 0, 0, 100);
        p.pop();
        p.push();
          e < -100 ? e = 1900 : e = e-2;
          p.translate(e, 100);
            p.triangle(0, -100, -100, 0, 0, 100);
        p.pop();
        p.push();
          f < -100 ? f = 1900 : f = f-2;
          p.translate(f, 100);
            p.triangle(0, -100, -100, 0, 0, 100);
        p.pop();

      p.pop()


    p.push()
      p.fill(139, 227, 202);
      p.push();
        c > 1900 ? c = -100 : c = c+2;
        p.translate(c, 100);
        p.triangle(0, -100, 100, 0, 0, 100);
      p.pop()
      p.push();
        b > 1900 ? b = -100 : b = b+2;
        p.translate(b, 100);
        p.triangle(0, -100, 100, 0, 0, 100);
      p.pop()
      p.push();
        a > 1900 ? a = -100 : a = a+2;
        p.translate(a, 100);
        p.triangle(0, -100, 100, 0, 0, 100);
      p.pop()

    p.pop()

    // p.push();
    // p.fill(209, 238, 255);
    // p.translate(-100 + ((time - 40) * 1), 100);
    //   p.triangle(0, -100, 100, 0, 0, 100);
    // p.pop();




  }
}
