export default function aboutMeSkillz (p) {

  var isOverCreativity, creativityY
  var isOverCommunication, communicationY
  var isOverCollaboration, collaborationY
  var isOverCritcalReflection, criticalReflectionY
  function preload() {
  }


  p.setup = () => {
    p.createCanvas(1200, 250);

    p.fill('#ED225D');
    p.textFont('Josefin Sans');
    creativityY = 0; communicationY = 0; collaborationY = 0, criticalReflectionY = 0
  }

  function criticalReflection() {
    p.noStroke()
    p.fill("#74B7C1")
    criticalReflectionY > 380 ? criticalReflectionY == 380 : criticalReflectionY = criticalReflectionY + 8
    p.rect(700, 50, criticalReflectionY, 41, 10);
    p.push()
    p.fill(255)
    p.textAlign(p.CENTER);
    p.textSize(15);
    p.text("90%", 650, 75)
    p.pop()
  }

  function collaboration() {
    p.noStroke()
    p.fill("#167C55")
    collaborationY > 380 ? collaborationY == 380 : collaborationY = collaborationY + 8
    p.rect(700, 130, collaborationY, 41, 10);
    p.push()
    p.fill(255)
    p.textAlign(p.CENTER);
    p.textSize(15);
    p.text("95%", 650, 155)
    p.pop()
  }

  function creativity() {
    p.noStroke()
    p.fill("#31E384")
    creativityY > 420 ? creativityY == 420 : creativityY = creativityY + 8
    p.rect(175, 50, creativityY, 41, 10);
    p.push()
    p.fill(255)
    p.textAlign(p.CENTER);
    p.textSize(15);
    p.text("120%", 125, 75)
    p.pop()
  }

  function communication() {
    p.noStroke()
    p.fill("#5EEDCC")
    communicationY > 380 ? communicationY == 380 : communicationY = communicationY + 8

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
    if (isOverCritcalReflection || isOverCollaboration || isOverCommunication || isOverCreativity){
      p.cursor(p.HAND)
    } else {
      p.cursor(p.ARROW)
    }
    p.push() // CREATIVITY
    var creativityDistance = p.dist(p.mouseX, p.mouseY, 125, 75);
    creativityDistance < 20 ? (isOverCreativity = true) : (isOverCreativity = false)
    creativityDistance > 20 ? creativityY = 0 : ""
    p.stroke('#31E384')
    p.fill(255);
    p.push()
      p.noStroke()
      p.textSize(20);
      p.fill('#31E384')
      p.textAlign(p.RIGHT);
      p.text("CREATIVITY", 575, 40);
    p.pop()
    p.fill('#31E384')
    p.ellipse(125, 70, 40, 40)
    p.noFill()
    p.rect(175, 50, 400, 40, 10);
    p.pop()

    p.push() // COMMUNICATION
    var communicationDistance = p.dist(p.mouseX, p.mouseY, 125, 140);
    communicationDistance < 20 ? (isOverCommunication = true) : (isOverCommunication = false)
    communicationDistance > 20 ? communicationY = 0 : ""
    p.stroke('#5EEDCC')
    p.fill(255);
    p.push()
      p.noStroke()
      p.textSize(20);
      p.fill('#5EEDCC')
      p.textAlign(p.RIGHT);
      p.text("COMMUNICATION", 575, 120);
    p.pop()
    p.fill('#5EEDCC')
    p.ellipse(125, 150, 40, 40)
    p.noFill()
    p.rect(175, 130, 400, 40, 10);
    p.pop()

    p.push() // COLLABORATION
    var collaborationDistance = p.dist(p.mouseX, p.mouseY, 650, 140);
    p.push()
    collaborationDistance < 20 ? (isOverCollaboration = true) : (isOverCollaboration = false)
    collaborationDistance > 20 ? collaborationY = 0 : ""
    p.pop()
    p.stroke('#167C55')
    p.fill(255);
    p.push()
      p.noStroke()
      p.textSize(20);
      p.fill('#167C55')
      p.textAlign(p.RIGHT);
      p.text("COLLABORATION", 1100, 120);
    p.pop()
    p.fill('#167C55')
    p.ellipse(650, 150, 40, 40)
    p.noFill()
    p.rect(700, 130, 400, 40, 10);
    p.pop()

    p.push() // CRITICAL REFFLECTIN
    var criticalReflectionDistance = p.dist(p.mouseX, p.mouseY, 650, 75);
    p.push()
    criticalReflectionDistance < 20 ? (isOverCritcalReflection = true) : (isOverCritcalReflection = false)
    criticalReflectionDistance > 20 ? criticalReflectionY = 0 : ""
    p.pop()
    p.stroke('#74B7C1')
    p.fill(255);
    p.push()
      p.noStroke()
      p.textSize(20);
      p.fill('#74B7C1')
      p.textAlign(p.RIGHT);
      p.text("CRITICAL REFLECTION", 1100, 40);
    p.pop()
    p.fill('#74B7C1')
    p.ellipse(650, 70, 40, 40)
    p.noFill()
    p.rect(700, 50, 400, 40, 10);
    p.pop()



    isOverCreativity ? creativity() : ""
    isOverCommunication ? communication() : ""
    isOverCollaboration ? collaboration() : ""
    isOverCritcalReflection ? criticalReflection() : ""
  }


}
