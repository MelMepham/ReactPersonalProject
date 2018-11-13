import React from "react";

class AboutMeSkillzCircle extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    const { clickCircle, id } = this.props;
    clickCircle(id);
  }

  render() {
    const { cy, cx, r, color } = this.props;
    return (
      <circle onClick={this.click} cy={cy} cx={cx} r={r} fill={color} />
    );
  }
}

class AboutMeSkillzRectangle extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    const { clickRectangle, id } = this.props;
    clickRectangle(id);
  }

  render() {
    console.log("hello")
    const { width, height, color } = this.props;
    return (
      <rect 
        className="about-me-rectangle-svg" 
        onClick={this.click} 
        width={width} 
        height={height} 
        fill={color} 
        x="80"/>
    );
  }
}

module.exports = {
  AboutMeSkillzCircle: AboutMeSkillzCircle,
  AboutMeSkillzRectangle: AboutMeSkillzRectangle
};
