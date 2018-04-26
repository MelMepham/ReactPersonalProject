import React from 'react'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'

import aboutMe from '../sketches/aboutMe'



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
            </div>
          </Router>

        )}
  }



export default webDev
