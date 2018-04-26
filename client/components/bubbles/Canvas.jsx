import React from 'react'

import Bubble from './Bubble.jsx'

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight - 100,
      libraryOfBubbles: []
      }
      this.spawnBubble = this.spawnBubble.bind(this)
      // this.moveBubbles = this.moveBubbles.bind(this)
      this.spawnBubbleOnInterval = this.spawnBubbleOnInterval.bind(this)

      // this.moveBubbles()
      this.spawnBubbleOnInterval()
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

    spawnBubbleOnInterval() {
      window.setInterval(this.spawnBubble, 700)
    }

    spawnBubble(){
      //This is working
      let cx = Math.floor(Math.random() * this.state.width)
      let r = Math.floor(15 + Math.random() * (30 - 10))
      let bubble = {r: r, cx: cx, cy: this.state.height/2, tx: Math.floor(Math.random() * 5) - 2.5}
      this.state.libraryOfBubbles.push(bubble)
    }

    // moveBubbles(){
    //   let {libraryOfBubbles} = this.state
    //   libraryOfBubbles = libraryOfBubbles.map(bubble => {
    //     bubble.cy-= Math.floor(Math.random() * 15)
    //     bubble.cx+= bubble.tx
    //     if (Math.random() < 0.05) bubble.tx = Math.floor(Math.random() * 5) - 2.5
    //     return bubble
    //   })
    //   this.setState({libraryOfBubbles})
    //   window.setTimeout(this.moveBubbles, 100)
    // }

  render() {
    console.log(this.state.libraryOfBubbles)
    return (
      <div>
        <h1>Hello</h1>
        <svg width={this.state.width} height={this.state.height}>
          console.log("bubble")
          {
              this.state.libraryOfBubbles.map(bubble => {
                return <Bubble r={bubble.r} cx={bubble.cx} cy={bubble.cy} />
              })
            }
        </svg>
      </div>
    )
  }
}

export default Canvas
