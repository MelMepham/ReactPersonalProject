import React from 'react'
var Bubble = require('./Bubble').Bubble
import Sound from 'react-sound';


class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      libraryOfBubbles: [],
      width: window.innerWidth,
      height: window.innerHeight - 200,
      playStatus: Sound.status.STOPPED,
      colour: "#FF53FF"
    }
    this.spawnBubble = this.spawnBubble.bind(this)
    this.moveBubbles = this.moveBubbles.bind(this)
    this.spawnBubbleOnInterval = this.spawnBubbleOnInterval.bind(this)
    this.deleteBubbles = this.deleteBubbles.bind(this)
    this.clickButton = this.clickButton.bind(this)
    this.deleteBubbleOnclick = this.deleteBubbleOnclick.bind(this)

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

  clickButton() {
    this.setState({playStatus: Sound.status.PLAYING})
    window.setTimeout(this.soundStops.bind(this), 200)

    let newBubble = this.state.libraryOfBubbles.filter(bubble => {
      if (bubble) {
      } else {
        return bubble
      }
    })
    this.setState({libraryOfBubbles: newBubble})
  }

  soundStops() {
    this.setState({playStatus: Sound.status.STOPPED})
  }


  deleteBubbleOnclick() {
  }

  spawnBubble(){
    let cx = Math.floor(Math.random() * 1500)
    let r = Math.floor(15 + Math.random() * (30 - 10))
    let bubble = {r: r, cx: cx, cy: this.state.height, tx:  Math.floor(Math.random() * 5) - 2.5}
    this.state.libraryOfBubbles.push(bubble)

  }

  moveBubbles(){
    var newBubbles = this.state.libraryOfBubbles.map((bubble, i) => {
        bubble.cy-= Math.floor(Math.random() * 15)
        bubble.cx+= bubble.tx
        return bubble
    })
    window.setTimeout(this.moveBubbles, 100) //This is the line the error is comming from
    this.deleteBubbles()
  }

//This is making the errors I do believe...
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
    return (
      <div>
        <div>
        <svg width={this.state.width} height={this.state.height}>
          {
            this.state.libraryOfBubbles.map(bubble=>{
              return <Bubble
                clickButton={this.clickButton}
                r={bubble.r}
                cx={bubble.cx}
                cy={bubble.cy}
                colour={this.state.colour}/>
            })
          }
        </svg>
        </div>
        <Sound url="sound/bubblePop.mp3" playStatus={this.state.playStatus}/>

      </div>
    )
  }
}

export default Canvas
