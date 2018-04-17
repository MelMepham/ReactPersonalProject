export default function aboutMe (p) {

  var a100, a300, a500, a700, a900, a1100, a1300, a1500, a1700, a1900
  var b1900, b2100, b2300, b2500, b2700, b2900, b3100, b3300, b3500, b3700, b3900

  var c100, c300, c500, c700, c900, c1100, c1300, c1500, c1700, c1900
  var d1900, d2100, d2300, d2500, d2700, d2900, d3100, d3300, d3500, d3700, d3900

  var counter
  p.setup = () => {
    p.createCanvas(1800, 200);
    counter = 0
    //trianglesTen()
    a1900= -1900, a1700= -1700; a1500= -1500; a1300= -1300; a1100= -1100; a900= -900; a700= -700; a500= -500; a300= -300; a100= -100
    b1900= 1900; b2100= 2100; b2300= 2300; b2500= 2500; b2700= 2700; b2900= 2900; b3100= 3100; b3300= 3300; b3500= 3500; b3700= 3700

    //trianglesBottomTop()
    c1900= -1900, c1700= -1700; c1500= -1500; c1300= -1300; c1100= -1100; c900= -900; c700= -700; c500= -500; c300= -300; c100= -100
    d1900= 1900; d2100= 2100; d2300= 2300; d2500= 2500; d2700= 2700; d2900= 2900; d3100= 3100; d3300= 3300; d3500= 3500; d3700= 3700
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

  function trianglesTen() {
    p.push(); //1
    p.fill(139, 227, 202);
      a1900 > 1900 ? a1900 = -100 : a1900 = a1900+2;
      p.translate(a1900, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push(); //1
    p.fill(89, 196, 221);
      b1900 < -100 ? b1900 = 1900 : b1900 = b1900-2;
      p.translate(b1900, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();

    p.push(); //2
    p.fill(89, 196, 221);
      a1700 > 1900 ? a1700 = -100 : a1700 = a1700+2;
      p.translate(a1700, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push(); //2
    p.fill(139, 227, 202);
      b2100 < -100 ? b2100 = 1900 : b2100 = b2100-2;
      p.translate(b2100, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();

    p.push(); //3
    p.fill(139, 227, 202);
      a1500 > 1900 ? a1500 = -100 : a1500 = a1500+2;
      p.translate(a1500, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push(); //3
    p.fill(89, 196, 221);
      b2300 < -100 ? b2300 = 1900 : b2300 = b2300-2;
      p.translate(b2300, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();

    p.push(); //4
    p.fill(89, 196, 221);
      a1300 > 1900 ? a1300 = -100 : a1300 = a1300+2;
      p.translate(a1300, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push(); //4
    p.fill(139, 227, 202);
      b2500 < -100 ? b2500 = 1900 : b2500 = b2500-2;
      p.translate(b2500, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();

    p.push() //5
    p.fill(139, 227, 202);
      a1100 > 1900 ? a1100 = -100 : a1100 = a1100+2;
      p.translate(a1100, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push(); //5
    p.fill(139, 227, 202);
      b2700 < -100 ? b2700 = 1900 : b2700 = b2700-2;
      p.translate(b2700, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();

    p.push(); //6
    p.fill(89, 196, 221);
      a900 > 1900 ? a900 = -100 : a900 = a900+2;
      p.translate(a900, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push(); //6
    p.fill(89, 196, 221);
      b2900 < -100 ? b2900 = 1900 : b2900 = b2900-2;
      p.translate(b2900, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();

    p.push(); //7
    p.fill(139, 227, 202);
      a700 > 1900 ? a700 = -100 : a700 = a700+2;
      p.translate(a700, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push(); //7
    p.fill(139, 227, 202);
      b3100 < -100 ? b3100 = 1900 : b3100 = b3100-2;
      p.translate(b3100, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();

    p.push(); //8
    p.fill(89, 196, 221);
      a500 > 1900 ? a500 = -100 : a500 = a500+2;
      p.translate(a500, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push(); //8
    p.fill(89, 196, 221);
      b3300 < -100 ? b3300 = 1900 : b3300 = b3300-2;
      p.translate(b3300, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();

    p.push(); //9
    p.fill(139, 227, 202);
      a300 > 1900 ? a300 = -100 : a300 = a300+2;
      p.translate(a300, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push(); //9
    p.fill(139, 227, 202);
      b3500 < -100 ? b3500 = 1900 : b3500 = b3500-2;
      p.translate(b3500, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();

    p.push(); //10
    p.fill(89, 196, 221);
      a100 > 1900 ? a100 = -100 : a100 = a100+2;
      p.translate(a100, 100);
      p.triangle(0, -100, 100, 0, 0, 100);
    p.pop()
    p.push() //10
    p.fill(89, 196, 221);
      b3700 < -100 ? b3700 = 1900 : b3700 = b3700-2;
      p.translate(b3700, 100);
        p.triangle(0, -100, -100, 0, 0, 100);
    p.pop();
  }
  function backgroundImage() {
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
  }
  function trianglesBottomTop() {

}

  p.draw = () => {

    p.background(89, 113, 255);
    p.noStroke();

    backgroundImage()
    trianglesTen()

  }
}
