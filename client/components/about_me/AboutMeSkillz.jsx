import React from "react";

class AboutMeSkillzCircle extends React.Component {
  constructor(props) {
    super(props);
    this.hover = this.hover.bind(this);
  }


  hover() {
    const { hoverMouseCircle, id } = this.props;
    hoverMouseCircle(id);
  }

  render() {
    console.log("this.props", this.props)
    const { cy, cx, r, color, id } = this.props;
    let gradientFill = "url(#" + color + ")";
    return (
      <svg>
        <defs>
          <radialGradient id={color}>
            <stop offset="0%" style={{ stopColor: color, stopOpacity: "1" }} />
            <stop offset="70%" style={{ stopColor: color, stopOpacity: "1" }} />
            <stop
              offset="100%"
              style={{ stopColor: color, stopOpacity: "0" }} />
          </radialGradient>
        </defs>
        <circle
          cy={cy}
          cx={cx}
          r="30"
          fill={gradientFill}>
          <animate
            attributeType="CSS"
            attributeName="opacity"
            from="1"
            to="1"
            dur="5"
            values="1; 0; 1"
            repeatCount="indefinite" />
        </circle>
        <circle
          id={id}
          onMouseOver={this.hover}
          cy={cy}
          cx={cx}
          r={r}
          fill={gradientFill} />
      </svg>
    );
  }
}

class AboutMeSkillzRectangle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { width, height, color, x, id } = this.props;
    return (
      <rect id={id} width={width} height={height} fill={color} y="10" x={x} />
    );
  }
}

module.exports = {
  AboutMeSkillzCircle: AboutMeSkillzCircle,
  AboutMeSkillzRectangle: AboutMeSkillzRectangle
};
