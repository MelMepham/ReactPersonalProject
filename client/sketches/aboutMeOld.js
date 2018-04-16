export default function aboutMe (p) {
  var counter
  var size
  var newSize

  var a, b

  p.setup = () => {
    p.createCanvas(1600, 200);
    counter = 0
    size = 0; newSize = 0
    a = 800; b = 800
  }

  function counterTimer() {
    counter > 1600 ? counter = 0 : counter++;
  }

  function rotation(degrees) {
    p.rotate(p.radians(degrees))
  }

  function leftSquare() {
    p.push()
    var time = p.frameCount % 1600
    size > 1 ? size = 1 : size = size + .005
    // p.translate((size < 1 ? 800 : (800 - (time - 100) * .5)), 100);
    p.fill(255, 255, 255);
    p.scale(size, size)
    p.beginShape();
      p.vertex(0, -100);
      p.vertex(100, 0);
      p.vertex(0, 100);
      p.vertex(-100, 0);
    p.endShape(p.CLOSE);
    p.pop()
  }

  function rightSquare() {
    p.push()
    var time = p.frameCount % 1600
    size > 1 ? size = 1 : size = size + .005
    // p.translate((size < 1 ? 800 : (800 ++), 100);
    p.fill(255, 255, 255);
    p.scale(size, size)
    p.beginShape();
      p.vertex(0, -100);
      p.vertex(100, 0);
      p.vertex(0, 100);
      p.vertex(-100, 0);
    p.endShape(p.CLOSE);
    p.pop()
  }

  p.draw = () => {

    var time = p.frameCount % 1600
    counterTimer()
    p.background(89, 113, 255);
    p.noStroke();


        leftSquare()
        rightSquare()

        if (time > 100) {
          p.push()
          p.scale((p.sin(p.time/120)*1))
          p.fill(31, 72, 255);
          p.translate(800, 100);
          p.beginShape();
            p.vertex(0, -100);
            p.vertex(100, 0);
            p.vertex(0, 100);
            p.vertex(-100, 0);
          p.endShape(p.CLOSE);
          p.pop()
        }

      if (time > 40) {
        p.push();
        p.fill(209, 238, 255);
        p.translate(1700 - ((time - 40) * 1), 100);
          p.triangle(0, -100, -100, 0, 0, 100);
        p.pop();
        p.push();
        p.fill(209, 238, 255);
        p.translate(-100 + ((time - 40) * 1), 100);
          p.triangle(0, -100, 100, 0, 0, 100);
        p.pop();
      }
      if (time > 0) {
        p.push();
        var time = p.frameCount % 1600
        p.fill(209, 238, 255);
        p.translate(800 + (time * 1), 50);
          p.triangle(0, -50, 50, 0, 0, 50);
        p.pop();
        p.push();
        var time = p.frameCount % 1600
        p.fill(209, 238, 255);
        p.translate(800 - (time * 1), 50);
          p.triangle(0, -50, -50, 0, 0, 50);
        p.pop();

        p.push();
        var time = p.frameCount % 1600
        p.fill(209, 238, 255);
        p.translate(800 + (time * 1), 150);
          p.triangle(0, -50, 50, 0, 0, 50);
        p.pop();
        p.push();
        var time = p.frameCount % 1600
        p.fill(209, 238, 255);
        p.translate(800 - (time * 1), 150);
          p.triangle(0, -50, -50, 0, 0, 50);
        p.pop();

        p.push();
        var time = p.frameCount % 1600
        p.fill(0, 238, 255);
        p.translate(-50 + (time * 2), 100);
          p.triangle(0, -50, 50, 0, 0, 50);
        p.pop();
        p.push();
        var time = p.frameCount % 1600
        p.fill(0, 238, 255);
        p.translate(1650 - (time * 2), 100);
          p.triangle(0, -50, -50, 0, 0, 50);
        p.pop();
      }

}



    // p.push()
    // p.fill(255, 0, 255);
    // p.translate((x - p.frameCount/2), 100);
    //   p.triangle(0, 50, -50, 0, 0, -50)
    // p.pop()

    // p.push()
    // p.fill(255, 255, 255);
    // p.translate(800, 100);
    // rotation(p.frameCount/2);
    //   p.rect(-50, -50, 100, 100);
    // p.pop()

    // function triangleRight(num) {
    //   p.push()
    //     num > 1600 ? num = 800 : num = num+2;
    //     p.fill(209, 238, 255);
    //     p.translate(num, 100);
    //       p.triangle(0, -50, 50, 0, 0, 50)
    //   p.pop()
    // }

}
