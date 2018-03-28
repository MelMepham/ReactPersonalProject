export default function AboutMeMandala (p) {
  var r;
  var move;
  p.setup = () => {
    move = p.createCanvas(150, 150);
    move.mouseOver(rotateMandala)
    r = 0;
  }

  function rotateMandala() {
    r = 400;
  }

  function rotation(degrees) {
    p.rotate(p.radians(degrees))
  }

  p.draw = () => {
    p.background(255, 255, 255);
    p.noStroke();

    p.push(); //FLOWER OF LIFE PATTERN
    p.translate(75, 75);
      p.rotate(p.radians(p.sin(p.frameCount/240)*r));
      p.fill(25, 238, 241);
      p.ellipse(0, 0, 30, 30);
      p.blendMode(p.MULTIPLY);
      for (let i=0; i<6; i++) {
        p.ellipse(-25, 0, 60, 60);
        rotation(60)
        }
    p.pop();

    }
}
