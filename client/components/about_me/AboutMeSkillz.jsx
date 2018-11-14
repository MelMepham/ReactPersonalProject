import React from "react";

class AboutMeSkillzCircle extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.hover = this.hover.bind(this);
  }

  click() {
    const { clickCircle, id } = this.props;
    clickCircle(id);
  }

  hover() {
    const { hoverMouseCircle, id } = this.props;
    hoverMouseCircle(id);
  }

  render() {
    const { cy, cx, r, color } = this.props;
    console.log(color)
    return (
      <svg>
        <defs>
          <radialGradient id="bones-gradient">
            <stop offset="0%" style={{stopColor: color, stopOpacity:'1'}} />
            {/* <stop offset="100%" style={{stopColor: 'white', stopOpacity:'0.5'}}/> */}
          </radialGradient>
        </defs>
        <circle
          onMouseOver={this.hover}
          onClick={this.click}
          cy={cy}
          cx={cx}
          r={r}
          fill="url(#bones-gradient)"
        >
          {/* <animate
            attributeType="CSS"
            attributeName="opacity"
            from="1"
            to="1"
            dur="5"
            values="1; 0; 1"
            repeatCount="indefinite"
          /> */}
        </circle>
      </svg>
    );
  }
}

class AboutMeSkillzRectangle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { width, height, color } = this.props;
    return (
      <rect width={width} height={height} fill={color} rx="5" y="10" x="80" />
    );
  }
}

module.exports = {
  AboutMeSkillzCircle: AboutMeSkillzCircle,
  AboutMeSkillzRectangle: AboutMeSkillzRectangle
};
