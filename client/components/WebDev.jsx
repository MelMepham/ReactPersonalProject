  import React from 'react'
  import {HashRouter as Router, Route, Link} from 'react-router-dom'
  import P5Wrapper from 'react-p5-wrapper'

  import aboutMe from '../sketches/aboutMe'
  import BubbleCanvas from './bubbles/Canvas.jsx'
  import WebDevBody from './WebDevBody.jsx'



  var fixedBubbles = {
    position: "fixed",
    width: "100%",
    height: "100%",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }

  class webDev extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        aboutMe: aboutMe,
      }
  }

  render() {
        return (
          <Router>
            <div>
            <br/> <br/> <br/> <br/>
              <div className='mandalaCentered'>
                <P5Wrapper sketch={this.state.aboutMe}/>
              </div>
              <div className='mandalaCentered'>
                <WebDevBody/>
            </div>
            <div style={fixedBubbles} >
              <BubbleCanvas/>
            </div>
          </div>
          </Router>
        )
      }
  }

export default webDev
