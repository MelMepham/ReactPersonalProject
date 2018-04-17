export default function aboutMeSkillz (p) {

  var isOverOne

  p.setup = () => {
    p.createCanvas(600, 400);

  }

  function newShape() {
    p.fill(255)
    p.rect(175, 25, 400, 50);

  }

  p.draw = () => {
    var distance = p.dist(p.mouseX, p.mouseY, 125, 50);

    distance < 50 ? isOverOne = true : isOverOne = false


    p.background(89, 113, 255)
    isOverOne ? newShape() : ""
    p.noFill()
    p.ellipse(125, 50, 50)
    p.rect(175, 25, 400, 50);
  }


}
