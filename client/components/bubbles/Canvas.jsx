import React from 'react'
var Bubble = require('./Bubble').Bubble
import Sound from 'react-sound';
import createId from 'incremental-id'


class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spawnIntervalId: null,
      moveIntervalId: null,
      libraryOfBubbles: [],
      width: window.innerWidth,
      height: window.innerHeight,
      playStatus: Sound.status.STOPPED,
      colour: "#FF53FF"
    }
    this.spawnBubble = this.spawnBubble.bind(this)
    this.moveBubbles = this.moveBubbles.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.deleteBubblesOffScreen = this.deleteBubblesOffScreen.bind(this)
    this.clickButton = this.clickButton.bind(this)
    this.deleteBubbleById = this.deleteBubbleById.bind(this)
    this.setBubbleIntervals = this.setBubbleIntervals.bind(this)
    this.clearBubbleIntervals = this.clearBubbleIntervals.bind(this)
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions)
    this.setBubbleIntervals()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
    this.clearBubbleIntervals()
  }

  updateDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight})
  }

  setBubbleIntervals() {
    const spawnIntervalId = window.setInterval(this.spawnBubble, 700)
    const moveIntervalId = window.setInterval(this.moveBubbles, 100)
    this.setState({ spawnIntervalId, moveIntervalId })
  }

  clearBubbleIntervals() {
    const { spawnIntervalId, moveIntervalId } = this.state
    window.clearInterval(spawnIntervalId)
    window.clearInterval(moveIntervalId)
    this.setState({spawnIntervalId: null, moveIntervalId: null})
  }

  clickButton(bubbleId) {
    this.setState({playStatus: Sound.status.PLAYING})
    window.setTimeout(this.soundStops.bind(this), 200)
    this.deleteBubbleById(bubbleId)
  }

  soundStops() {
    this.setState({playStatus: Sound.status.STOPPED})
  }

  deleteBubbleById(id) {
    let { libraryOfBubbles } = this.state
    let nextLibraryOfBubbles = libraryOfBubbles.filter(bubble => {
      return bubble.id !== id
    })
    this.setState({ libraryOfBubbles: nextLibraryOfBubbles })
  }

  spawnBubble(){
    let id = createId()
    let cx = Math.floor(Math.random() * 1500)
    let r = Math.floor(15 + Math.random() * (30 - 10))
    let bubble = { id, r, cx, cy: this.state.height, tx:  Math.floor(Math.random() * 5) - 2.5}
    this.state.libraryOfBubbles.push(bubble)

  }

  moveBubbles(){
    var newBubbles = this.state.libraryOfBubbles.map(bubble => {
        bubble.cy-= Math.floor(Math.random() * 15)
        bubble.cx+= bubble.tx
        return bubble
    })
    this.deleteBubblesOffScreen()
  }

  //This is making the errors I do believe...
  deleteBubblesOffScreen() {
    let { libraryOfBubbles } = this.state
    let nextLibraryOfBubbles = libraryOfBubbles.filter(bubble => {
      return bubble.cy >= 0
    })
    this.setState({ libraryOfBubbles: nextLibraryOfBubbles })
  }


  render() {
    return (
      <div>
        <div>
        <svg width={this.state.width} height={this.state.height}>
          {
            this.state.libraryOfBubbles.map(bubble=>{
              return <Bubble
                key={bubble.id}
                id={bubble.id}
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
