export default function HireMeMandala (p) {
  p.setup = () => {
    p.createCanvas(100, 100);
  }

  function rotation(degrees) {
    p.rotate(p.radians(degrees))
  }

  p.draw = () => {
    p.background(255, 255, 255);
    p.noStroke();

    p.push() //DARKEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      p.translate(50, 50);
      p.fill(0, 255, 255);
      for (let i=0; i<6; i++) {
        p.triangle(-52, 30, -52, -30, 0, 0);
        rotation(60);
      }
    p.pop()

    p.push() //LIGHTEST TRIANGLE IN THE CENTRAL HEXAGON SHAPE
      p.translate(50, 50);
      p.fill(197, 255, 215);
      for (let i=0; i<6; i++) {
        p.triangle(-52, -30, 0, 0, -35, 0);
        rotation(60);
      }
    p.pop()

    p.push() // CENTRAL TURQUOIUSE HEXAGON
      p.translate(50, 50);
      p.fill(0, 144, 207);
      for (let i=0; i<6; i++) {
        p.triangle(-52, 30, -35, 0, 0, 0);
        rotation(60);
      }
    p.pop();
  }
}
