import React from "react";
var SkillzCircle = require("./AboutMeSkillz").AboutMeSkillzCircle;
var SkillzRectangle = require("./AboutMeSkillz").AboutMeSkillzRectangle;

import createId from "incremental-id";

class AboutMeSkillzCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [],
      rectangles: [],
      names: ["CREATIVITY", "COMMUNICATION", "CRITICAL REFLECTION", "COLLABORATION"],
      colors: ["#74B7C1", "#167C55", "#31E384", "#5EEDCC"]
    };
    this.hoverMouseCircle = this.hoverMouseCircle.bind(this);
    this.createCircles = this.createCircles.bind(this);
    this.createRectangles = this.createRectangles.bind(this);
  }
  componentDidMount() {
    this.createCircles()
    this.createRectangles()
  }

  createCircles() {
    let newCircles = []
    for (let i = 0; i < 4; i++) {
      let circle = {
        key: createId(),
        cx: "30",
        cy: "30",
        r: "23"
      };
      newCircles.push(circle);
    }
    this.setState({ circles: newCircles });
  }

  createRectangles() {
    let newRectangles = []
    for (let i = 0; i < 4; i++) {
      let rectangle = {
        key: createId(),
        width: 1,
        height: 40,
        x: "15%"
      };
      newRectangles.push({ rectangles: rectangle });
    }
    this.setState({ rectangles: newRectangles });
  }

  hoverMouseCircle(id) {
    let maxRectangle = document.getElementById("background-rect-length");
    let maxRectangleWidth = maxRectangle.width.animVal.value;
    let newRectangles = this.state.rectangles.filter((rectangle, i) => {
      console.log(this.state.circles[i].id)

      if (this.state.circles[i].id == id) {

        console.log(rectangle.width)
        rectangle.rectangle.width > maxRectangleWidth
          ? rectangle
          : (rectangle.width = rectangle.width + 3);
      }
      return rectangle;
    });
    this.setState({ rectangles: newRectangles });
  }

  render() {
    return (
      <div className="about-me-container">

        {this.state.colors.map((color, i) => {
          if (this.state.circles.length > 0 && this.state.rectangles.length > 0) {
            let circle = this.state.circles[i]
            let rectangle = this.state.rectangles[i]
            return (
              <div className="about-me-item" key={createId()}>
                <h4 style={{ 'color': color }} className="about-me-heading">{this.state.name}</h4>
                <svg height="60" className="about-me-svg-container">
                  
                  <SkillzCircle
                    key={circle.key}
                    hoverMouseCircle={this.hoverMouseCircle}
                    cy={circle.cy}
                    cx={circle.cx}
                    r={circle.r}
                    color={color}/>
                  
                  <rect
                    id="background-rect-length"
                    width="75%"
                    height={rectangle.height}
                    rx="5"
                    y="10"
                    x={rectangle.x}
                    stroke={color}
                    fill="none"/>
                  
                  <SkillzRectangle
                    key={rectangle.key}
                    height={rectangle.height}
                    width={rectangle.width}
                    color={color}
                    x={rectangle.x}
                  />
                </svg>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default AboutMeSkillzCanvas;
