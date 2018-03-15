export default function MandalaOne (p) {

  function rotation(degrees) {
    p.rotate(p.radians(degrees))
  }

p.setup = () => {
    p.createCanvas(600, 600);
}

p.draw = () => {

    p.background(255, 242, 235);
    p.noStroke();

    p.push() //FLOWER OF LIFE PATTERN
      p.blendMode(p.MULTIPLY);
      p.ellipse(450, 450, 210, 210);
      p.translate(300, 300);
      p.fill(247, 175, 207);
        for (let i=0; i<6; i++) {
          p.ellipse(-60, 0, 120, 120);
          rotation(60)
        }
    p.pop();

    p.push() //CIRCLE FRAMING THE HEXAGON IN THE CENTER
      p.blendMode(p.MULTIPLY);
      p.translate(300, 300);
      p.fill(247, 76, 207);
      p.ellipse(0, 0, 120, 120);
    p.pop();

    p.push() //DARKEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      p.translate(300, 300);
      p.fill(0, 242, 199);
      for (let i=0; i<6; i++) {
        p.triangle(-52, 30, -52, -30, 0, 0);
        rotation(60)
      }
    p.pop()

    p.push() //LIGHTEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      p.translate(300, 300);
      p.fill(197, 255, 215);
      for (let i=0; i<6; i++) {
        p.triangle(-52, -30, 0, 0, -35, 0);
        rotation(60)
      }
    p.pop()

    p.push() // CENTRAL TURQUOIUSE HEXAGON
      p.translate(300, 300);
      p.fill(0, 144, 207);
      for (let i=0; i<6; i++) {
        p.triangle(-52, 30, -35, 0, 0, 0);
        rotation(60)
      }
    p.pop()


  }
}
