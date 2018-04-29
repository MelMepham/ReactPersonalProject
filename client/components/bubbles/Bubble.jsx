import React from 'react'


class Bubble extends React.Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)
  }


  click() {
    const { clickButton, id } = this.props
    clickButton(id)
  }

  render() {
    const {
      r, cx, cy,
      colour,
      opacity,
      bubbleStroke
    } = this.props
    return (
        <circle
          onClick={this.click}
          r={r}
          cx={cx}
          cy={cy}
          fill={colour}
          fillOpacity={opacity}
          strokeOpacity={bubbleStroke}
          stroke={colour} />
    )
  }
}

Bubble.defaultProps = {
  opacity: 0.4,
  bubbleStroke: 0.5
}


module.exports= {
  Bubble: Bubble,
}
