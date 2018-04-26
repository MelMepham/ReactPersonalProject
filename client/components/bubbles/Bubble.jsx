import React from 'react'

  class Bubble extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        r: props.r,
        cx: props.cx,
        cy: props.cy,
        opacity: 0.8,
        bubbleStroke: 1,
        colour: "#FF53FF"
      }
      this.click = this.click.bind(this)
    }

    componentWillReceiveProps(nextProps) {
      console.log("receive props")
      const {r, cx, cy} = nextProps
      this.setState({r, cx, cy})
    }

    click() {
      console.log("Hello")
    }

    render() {
      console.log("child");
      return (
        <circle r={this.state.r} cx={this.state.cx} cy={this.state.cy} fill="#FF53FF" fillOpacity={this.state.opacity} strokeOpacity={this.state.bubbleStroke} stroke={this.state.colour}/>
      )
    }
  }

  module.exports = {
    Bubble: Bubble
  }
