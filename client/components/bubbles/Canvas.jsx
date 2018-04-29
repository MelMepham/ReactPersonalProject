import React from 'react'
var Bubble = require('./Bubble').Bubble
import Sound from 'react-sound';
import createId from 'incremental-id'


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
    this.deleteBubblesOffScreen = this.deleteBubblesOffScreen.bind(this)
    this.clickButton = this.clickButton.bind(this)
    this.deleteBubbleById = this.deleteBubbleById.bind(this)

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
    console.log('id', id)
    let cx = Math.floor(Math.random() * 1500)
    let r = Math.floor(15 + Math.random() * (30 - 10))
    let bubble = { id, r, cx, cy: this.state.height, tx:  Math.floor(Math.random() * 5) - 2.5}
    this.state.libraryOfBubbles.push(bubble)

  }

  moveBubbles(){
    var newBubbles = this.state.libraryOfBubbles.map((bubble, i) => {
        bubble.cy-= Math.floor(Math.random() * 15)
        bubble.cx+= bubble.tx
        return bubble
    })
    window.setTimeout(this.moveBubbles, 100) //This is the line the error is comming from
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
