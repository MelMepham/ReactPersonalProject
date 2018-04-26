import React from 'react'

var svgcolour = {
  fill: "red",
  stroke: "blue",
}

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
      }
    }

    componentDidMount() {
      this.updateDimensions();
      window.addEventListener("resize", this.updateDimensions.bind(this))
    }

    componentWillUnmount() {
      this.updateDimensions();
      window.removeEventListener("resize", this.updateDimensions.bind(this))
    }

    updateDimensions() {
      this.setState({width: window.innerWidth, height: window.innerHeight - 100})
  }

  render() {
    return (
      <div>
        <svg width={this.state.width} height={this.state.height}>
          <circle r="30" cx="34" cy="34"
            style={svgcolour}/>
        </svg>
      <p>Hello</p>
      </div>
    )
  }
}

export default Canvas
