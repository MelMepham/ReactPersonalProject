export default function aboutMeSkillz (p) {

  var isOverCreativity, creativityY
  var isOverCommunication, communicationY
  function preload() {
  }

  p.setup = () => {
    p.createCanvas(600, 400);
    p.fill('#ED225D');
    p.textFont('Josefin Sans');
    creativityY = 0; communicationY = 0
  }

  function mousePressed() {
    if (isOverCreativity === true) {
      creativity()
    }
  }

  function creativity() {
    p.noStroke()
    p.fill("#31E384")
    creativityY > 400 ? creativityY == 400 : creativityY = creativityY + 4

    p.rect(175, 50, creativityY, 40, 10);
    p.push()
    p.fill(255)
    p.textAlign(p.CENTER);
    p.textSize(15);
    p.text("100%", 125, 75)
    p.pop()
  }

  function communication() {
    p.noStroke()
    p.fill("#5EEDCC")
    communicationY > 380 ? communicationY == 380 : communicationY = communicationY + 4

    p.rect(175, 130, communicationY, 40, 10);

    p.push()
    p.fill(255)
    p.textAlign(p.CENTER);
    p.textSize(15);
    p.text("90%", 125, 155)
    p.pop()
  }

  p.draw = () => {
    p.background(255)
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

    p.push() // CREATIVITY
    var communicationDistance = p.dist(p.mouseX, p.mouseY, 125, 140);
    communicationDistance < 20 ? (isOverCommunication = true, p.cursor(p.HAND)) : (isOverCommunication = false, p.cursor(p.ARROW))
    p.stroke('#5EEDCC')
    p.fill(255);
    p.push()
      p.noStroke()
      p.textSize(20);
      p.fill(89, 113, 255)
      p.textAlign(p.RIGHT);
      p.text("COMMUNICATION", 575, 120);
    p.pop()
    p.fill('#5EEDCC')
    p.ellipse(125, 150, 40, 40)
    p.noFill()
    p.rect(175, 130, 400, 40, 10);
    p.pop()

    isOverCreativity ? creativity() : ""
    isOverCommunication ? communication() : ""
  }


}
