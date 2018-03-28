export default function AboutMeMandala (p) {
  p.setup = () => {
    p.createCanvas(150, 150);
  }

  function rotation(degrees) {
    p.rotate(p.radians(degrees))
  }

  p.draw = () => {
    p.background(255, 255, 255);
    p.noStroke();

    p.push(); //FLOWER OF LIFE PATTERN
    p.translate(75, 75);
      p.fill(186, 242, 136);
      p.ellipse(0, 0, 30, 30);
      p.blendMode(p.MULTIPLY);
      for (let i=0; i<6; i++) {
        p.ellipse(-25, 0, 60, 60);
        rotation(60)
        }
    p.pop();

    }
}
