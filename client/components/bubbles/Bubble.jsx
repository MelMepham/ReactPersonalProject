import React from 'react'


  class Bubble extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        r: props.r,
        cx: props.cx,
        cy: props.cy,
        opacity: 0.4,
        bubbleStroke: 0.5,
        colour: props.colour
      }
      this.click = this.click.bind(this)
    }
    componentWillReceiveProps(nextProps) {
      const {r, cx, cy, colour} = nextProps
      this.setState({r, cx, cy, colour})
    }

    click() {
      this.props.clickButton()
    }

    render() {
      return (
          <circle
            onClick={this.click}
            r={this.props.r}
            cx={this.props.cx}
            cy={this.props.cy}
            fill={this.props.colour}
            fillOpacity={this.state.opacity}
            strokeOpacity={this.state.bubbleStroke}
            stroke={this.props.colour} />
      )
    }
  }


module.exports= {
  Bubble: Bubble,
}
