import React from "react";
var SkillzCircle = require("./AboutMeSkillz").AboutMeSkillzCircle;
var SkillzRectangle = require("./AboutMeSkillz").AboutMeSkillzRectangle;

import createId from "incremental-id";
import { INSPECT_MAX_BYTES } from "buffer";

class AboutMeSkillzCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseShapes: []
    };
    this.clickCircle = this.clickCircle.bind(this);
    this.createShapes = this.createShapes.bind(this);
    this.hoverMouseCircle = this.hoverMouseCircle.bind(this);
  }
  componentDidMount() {
    this.createShapes();
  }

  createShapes() {
    let shapes = [];
    let names = [
      "CREATIVITY",
      "COMMUNICATION",
      "CRITICAL REFLECTION",
      "COLLABORATION"
    ];
    let colors = ["#74B7C1", "#167C55", "#31E384", "#5EEDCC"];
    for (let i = 0; i < 4; i++) {
      let id = createId();
      let circle = {
        key: createId(),
        id: id,
        cx: "30",
        cy: "30",
        fill: colors[i]
      };
      let rectangle = {
        key: createId(),
        id: id,
        width: 1,
        height: 40,
        fill: colors[i]
      };
      shapes.push({ name: names[i], circle: circle, rectangle: rectangle });
    }
    this.setState({ baseShapes: shapes });
  }

  clickCircle(id) {}

  hoverMouseCircle(id) {
    let maxRectangle = document.getElementById("background-rect-length");
    let maxRectangleWidth = maxRectangle.width.animVal.value;
    let newShapes = this.state.baseShapes.filter(shape => {
      if (shape.circle.id == id) {
        shape.rectangle.width > maxRectangleWidth
          ? shape
          : (shape.rectangle.width = shape.rectangle.width + 1);
      }
      return shape;
    });
    this.setState({ baseShapes: newShapes });
  }

  render() {
    return (
      <div className="about-me-container">
        {this.state.baseShapes.map(shape => {
          return (
            <div className="about-me-item" key={createId()}>
              <h4 className="about-me-heading">{shape.name}</h4>
              <svg width="auto" height="60" className="about-me-svg-container">
                <SkillzCircle
                  key={shape.circle.key}
                  id={shape.circle.id}
                  hoverMouseCircle={this.hoverMouseCircle}
                  clickCircle={this.clickCircle}
                  cy={shape.circle.cy}
                  cx={shape.circle.cx}
                  r="23"
                  color={shape.circle.fill}
                />
                <rect
                  id="background-rect-length"
                  width="70%"
                  height="40"
                  rx="5"
                  y="10"
                  x="80"
                  stroke={shape.circle.fill}
                  fill="none"
                />
                <SkillzRectangle
                  key={shape.rectangle.key}
                  id={shape.rectangle.id}
                  height={shape.rectangle.height}
                  width={shape.rectangle.width}
                  color={shape.circle.fill}
                />
              </svg>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AboutMeSkillzCanvas;
