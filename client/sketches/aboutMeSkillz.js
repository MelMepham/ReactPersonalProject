export default function aboutMeSkillz (p) {

  var isOverCreativity

  function preload() {
  }

  p.setup = () => {
    p.createCanvas(600, 400);
    p.fill('#ED225D');
    p.textFont('Josefin Sans');
  }

  function mousePressed() {
    if (isOverCreativity === true) {
      creativity()
    }
  }

  function creativity() {
    p.noStroke()
    p.fill("#31E384")
    p.rect(175, 50, 400, 40, 10);
    p.push()
    p.fill(255)
    p.textAlign(p.CENTER);
    p.textSize(15);
    p.text("100%", 125, 75)
    p.pop()
  }

  p.draw = () => {
    p.push() // CREATIVITY
    var creativityDistance = p.dist(p.mouseX, p.mouseY, 125, 75);
    creativityDistance < 20 ? (isOverCreativity = true, p.cursor(p.HAND)) : (isOverCreativity = false, p.cursor(p.ARROW))
    p.stroke('#31E384')
    p.fill(255);
    p.push()
      p.noStroke()
      p.textSize(20);
      p.fill(89, 113, 255)
      p.textAlign(p.RIGHT);
      p.text("CREATIVITY", 575, 40);
    p.pop()
    p.fill('#31E384')
    p.ellipse(125, 70, 40, 40)
    p.noFill()
    p.rect(175, 50, 400, 40, 10);
    p.pop()

    isOverCreativity ? creativity() : ""
  }


}
