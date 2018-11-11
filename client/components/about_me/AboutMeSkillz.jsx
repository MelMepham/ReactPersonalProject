import React from 'react'


class AboutMeSkillzCircle extends React.Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)

  }

  click() {
    const { clickCircle, id } = this.props
    clickCircle(id)
  }

  render() {
    const { cy, cx, r, color } = this.props
    return (
      <svg>
        <circle
          onClick={this.click}
          cy={cy}
          cx={cx}
          r={r}
          fill={color}
        />
      </svg>
    )
  }
}



module.exports = {
  AboutMeSkillzCircle: AboutMeSkillzCircle,
}
