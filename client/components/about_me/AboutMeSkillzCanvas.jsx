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
      id: [0, 1, 2, 3],
      names: ["CREATIVITY", "COMMUNICATION", "CRITICAL REFLECTION", "COLLABORATION"],
      colors: ["#74B7C1", "#167C55", "#31E384", "#5EEDCC"]
    };
    this.hoverMouseCircle = this.hoverMouseCircle.bind(this);
    this.createCircles = this.createCircles.bind(this);
    this.createRectangles = this.createRectangles.bind(this);
  }
  componentWillMount() {
    this.createCircles()
    this.createRectangles()
  }

  createCircles() {
    let newCircles = []
    for (let i = 0; i < 4; i++) {
      let circle = {
        id: this.state.id[i],
        cx: "30",
        cy: "30",
        r: "23"
      };
      newCircles.push(circle);
    }
    this.setState({ circles: newCircles });
  }

  createRectangles() {
    let { circles } = this.state
    let newRectangles = []
    for (let i = 0; i < 4; i++) {
      console.log("circles", circles)
      let rectangle = {
        id: this.state.id[i],
        key: createId(),
        width: 1,
        height: 40,
        x: "15%"
      };
      newRectangles.push(rectangle);
    }
    this.setState({ rectangles: newRectangles });
  }

  hoverMouseCircle(id) {
    let maxRectangle = document.getElementById("background-rect-length");
    let maxRectangleWidth = maxRectangle.width.animVal.value;
    let newRectangles = this.state.rectangles.filter((rectangle, i) => {
      if (id == rectangle.id) {
        rectangle.width > maxRectangleWidth
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
            let circle = this.state.circles[i]
            let rectangle = this.state.rectangles[i]
            return (
              <div className="about-me-item" key={createId()}>
                <h4 
                  style={{ 'color': color }} 
                  className="about-me-heading">{this.state.names[i]}
                </h4>
                <svg height="60" className="about-me-svg-container">

                  <SkillzCircle
                    id={circle.id}
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
                    id={rectangle.id}
                    key={rectangle.key}
                    height={rectangle.height}
                    width={rectangle.width}
                    color={color}
                    x={rectangle.x}/>
                </svg>
              </div>
            );
          }
        )}
      </div>
    );
  }
}

export default AboutMeSkillzCanvas;
