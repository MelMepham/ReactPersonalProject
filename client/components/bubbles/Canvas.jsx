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
    this.deleteBubbles = this.deleteBubbles.bind(this)

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
    console.log(this.state.libraryOfBubbles.length)
    let cx = Math.floor(Math.random() * 1500)
    let r = Math.floor(15 + Math.random() * (30 - 10))
    let bubble = {r: r, cx: cx, cy: this.state.height, tx:  Math.floor(Math.random() * 5) - 2.5}
    this.state.libraryOfBubbles.push(bubble)
  }

  moveBubbles(){
    let {libraryOfBubbles} = this.state
    libraryOfBubbles = libraryOfBubbles.map((bubble, i) => {
        bubble.cy-= Math.floor(Math.random() * 15)
        bubble.cx+= bubble.tx
        return bubble
    })
    this.setState({libraryOfBubbles})
    window.setTimeout(this.moveBubbles, 100)
    this.deleteBubbles()
  }


deleteBubbles() {
  let newBubble = this.state.libraryOfBubbles.filter(bubble => {
    if (bubble.cy < 0) {
    } else {
      return bubble
    }
  })
  this.setState({libraryOfBubbles: newBubble})
}

  render() {
    console.log("newBubble", this.state.libraryOfBubbles)
    return (
      <div>
        <div>
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
