import React from "react";
var SkillzCircle = require("./AboutMeSkillz").AboutMeSkillzCircle;
var SkillzRectangle = require("./AboutMeSkillz").AboutMeSkillzRectangle;

import createId from "incremental-id";

class AboutMeSkillzCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseShapes: []
    };
    this.clickCircle = this.clickCircle.bind(this);
    this.createShapes = this.createShapes.bind(this);
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
        width: "20",
        height: "20",
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

  render() {
    return (
      <div className="about-me-container">
        {this.state.baseShapes.map(shape => {
          console.log(shape.rectangle.height);
          return (
            <div className="about-me-item" key={createId()}>
              <h4>{shape.name}</h4>
              <svg className="hello">
                <svg width="60">
                  <SkillzCircle
                    key={shape.circle.key}
                    id={shape.circle.id}
                    clickCircle={this.clickCircle}
                    cy={shape.circle.cy}
                    cx={shape.circle.cx}
                    r="30"
                    color={shape.circle.fill}
                  />
                </svg>
                <svg width="200">
                  <SkillzRectangle
                    key={shape.rectangle.key}
                    id={shape.rectangle.id}
                    clickRectangle={this.clickRectangle}
                    height="40"
                    width="455"
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
