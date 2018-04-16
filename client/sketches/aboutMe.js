export default function aboutMe (p) {
  var counter

  p.setup = () => {
    p.createCanvas(1600, 200);
    counter = 0
  }

  function counterTimer() {
    counter > 1600 ? counter = 0 : counter++;
  }

  function rotation(degrees) {
    p.rotate(p.radians(degrees))
  }

  function triangleLeft() {
  }

  p.draw = () => {

    var time = p.frameCount % 1600
    counterTimer()
    p.background(89, 113, 255);
    p.noStroke();

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
        var time = p.frameCount % 800
        p.fill(209, 238, 255);
        p.translate(800 + (time * 1), 100);
          p.triangle(0, -50, 50, 0, 0, 50);
        p.pop();
        p.push();
        var time = p.frameCount % 800
        p.fill(209, 238, 255);
        p.translate(800 - (time * 1), 100);
          p.triangle(0, -50, -50, 0, 0, 50);
        p.pop();
        p.push();
        var time = p.frameCount % 800
        p.fill(0, 238, 255);
        p.translate(-50 + (time * 2), 100);
          p.triangle(0, -50, 50, 0, 0, 50);
        p.pop();
        p.push();
        var time = p.frameCount % 800
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
