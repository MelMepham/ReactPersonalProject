  import React from 'react'
  import {HashRouter as Router, Route, Link} from 'react-router-dom'
  import P5Wrapper from 'react-p5-wrapper'

  import aboutMe from '../sketches/aboutMe'
  import BubbleCanvas from './bubbles/Canvas.jsx'

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
      this.getTotalScore = this.getTotalScore.bind(this)
  }

  getTotalScore(score) {
    this.setState({totalScore: score})
    console.log(this.state.totalScore)
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
                <div>
                  <div className="container-fluid">
                    <div className="row">

                      <div className="col-md-2">
                        <div>
                          <h5 className="totalScore">TOTAL: { this.state.totalScore }</h5>
                          <h5 className="webDevTools">JAVASCRIPT</h5>
                          <h5 className="webDevTools">REACT.JS</h5>
                          <h5 className="webDevTools">REDUX</h5>
                          <h5 className="webDevTools">NODE.JS</h5>
                          <h5 className="webDevTools">P5.JS</h5>
                          <h5 className="webDevTools">WEBPACK</h5>
                          <h5 className="webDevTools">EXPRESS.JS</h5>
                          <h5 className="webDevTools">REST API'S</h5>
                        </div>
                      </div>

                      <div className="col-md-2">
                        <div>
                          <h5 className="hidden">HIDDEN</h5>
                          <h5 className="webDevTools">CSS</h5>
                          <h5 className="webDevTools">HTML</h5>
                          <h5 className="webDevTools">JEST TESTING</h5>
                          <h5 className="webDevTools">ENZYME TESTING</h5>
                          <h5 className="webDevTools">SQLITE</h5>
                          <h5 className="webDevTools">KNEX</h5>
                          <h5 className="webDevTools">TDD</h5>
                          <h5 className="webDevTools">AGILE</h5>
                        </div>
                      </div>

                      <div className="col-md-8 typePadding">
                        <h1> LOOK! I MADE THIS </h1>
                        <p className="pAboutMe">
                          So I thought about giving you some static images of what I have done, but how boring is that. Check out my site, press around and see what you find. If you want to talk more send me a message, if you want to see more code check out my github, and if you want to follow me check out my instagram and twitter. You can find all of these links in the top right corner. 
                        </p>
                      </div>
                    </div>
                  </div>
                  <br/><br/><br/><br/>
                </div>
            </div>
            <div style={fixedBubbles} >
              <BubbleCanvas sendData={this.getTotalScore}/>
            </div>
          </div>
          </Router>
        )
      }
  }

export default webDev
