import React from 'react'
var Bubble = require('./Bubble').Bubble
var requestAnimationFrame = window.requestAnimationFrame


class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      libraryOfBubbles: [],
      width: window.innerWidth,
      height: window.innerHeight - 200
    }
    this.spawnBubble = this.spawnBubble.bind(this)
    this.moveBubbles = this.moveBubbles.bind(this)
    this.spawnBubbleOnInterval = this.spawnBubbleOnInterval.bind(this)

    this.spawnBubbleOnInterval()
    this.moveBubbles()
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
    console.log(window.innerHeight)
    let cx = Math.floor(Math.random() * 1500)
    let r = Math.floor(15 + Math.random() * (30 - 10))
    let bubble = {r: r, cx: cx, cy: this.state.height, tx:  Math.floor(Math.random() * 5) - 2.5}
    this.state.libraryOfBubbles.push(bubble)
  }

  moveBubbles(){
    // console.log("moveBubbles")
    let {libraryOfBubbles} = this.state
    libraryOfBubbles = libraryOfBubbles.map(bubble => {
      bubble.cy-= Math.floor(Math.random() * 15)
      bubble.cx+= bubble.tx
      if (Math.random() < 0.05) bubble.tx = Math.floor(Math.random() * 5) - 2.5
      return bubble
    })
    // console.log(libraryOfBubbles)
    this.setState({libraryOfBubbles})
    window.setTimeout(this.moveBubbles, 100)
  }

  render() {
    return (
      <div>
        <h2 class="header"> Score:{this.state.score}</h2>
        <div class="buble">
        <svg width={this.state.width} height={this.state.height}>
          {
            this.state.libraryOfBubbles.map(bubble=>{
              return <Bubble r={bubble.r} cx={bubble.cx} cy={bubble.cy} />
            })
          }
        </svg>
        </div>
      </div>
    )
  }
}

export default Canvas
