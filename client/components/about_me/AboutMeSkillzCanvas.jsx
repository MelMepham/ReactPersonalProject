import React from "react";
var SkillzCircle = require("./AboutMeSkillz").AboutMeSkillzCircle;
var SkillzRectangle = require("./AboutMeSkillz").AboutMeSkillzRectangle;

import createId from "incremental-id";
import { registerHelper } from "handlebars";

class AboutMeSkillzCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseShapes: []
    };
    this.clickCircle = this.clickCircle.bind(this);
    this.createShapes = this.createShapes.bind(this);
    this.hoverMouseRectangle = this.hoverMouseRectangle.bind(this);
  }
  componentDidMount() {
    console.log(SkillzRectangle);
    this.createShapes();
    console.log(this.state);
  }

  createShapes() {
    let shapes = [];
    let names = [
      "CREATIVITY",
      "COMMUNICATION",
      "CRITICAL REFLECTION",
      "COLLABORATION"
    ];
    for (let i = 0; i < 4; i++) {
      let id = createId();
      let circle = {
        key: createId(),
        id: id,
        cx: "30",
        cy: "30",
        fill: "#FFD080"
      };
      let rectangle = {
        key: createId(),
        id: id,
        width: "10%",
        height: "40",
        fill: "#FFD080"
      };
      shapes.push({ name: names[i], circle: circle, rectangle: rectangle });
    }
    this.setState({ baseShapes: shapes });
  }

  clickCircle(id) {
    console.log(id);
  }

  clickRectangle(id) {
    console.log(id);
  }

  hoverMouseRectangle(id) {
    let newShapes = this.state.baseShapes.filter(shape => {
        if(shape.rectangle.id == id) {
            shape.rectangle.width = "70%"
            // console.log(shape)
        }
        return shape
    })
    console.log(newShapes)
  }

  render() {
    return (
      <div className="about-me-container">
        {this.state.baseShapes.map(shape => {
          console.log(shape.rectangle.height);
          return (
            <div className="about-me-item" key={createId()}>
              <h4 className="about-me-heading">{shape.name}</h4>
              <svg height="auto" height="60" className="about-me-svg-container">
                <svg width="20%">
                  <SkillzCircle
                    key={shape.circle.key}
                    id={shape.circle.id}
                    clickCircle={this.clickCircle}
                    cy={shape.circle.cy}
                    cx={shape.circle.cx}
                    r="23"
                    color={shape.circle.fill}
                  />
                </svg>
                <svg width="auto">
                  <SkillzRectangle
                    key={shape.rectangle.key}
                    id={shape.rectangle.id}
                    clickRectangle={this.clickRectangle}
                    hoverMouseRectangle={this.hoverMouseRectangle}
                    height={shape.rectangle.height}
                    width={shape.rectangle.width}
                    color={shape.circle.fill}
                  />
                </svg>
              </svg>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AboutMeSkillzCanvas;
