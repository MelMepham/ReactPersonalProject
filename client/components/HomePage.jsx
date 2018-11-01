
import React from 'react'
import ReactDOM from 'react-dom'
import P5Wrapper from 'react-p5-wrapper'
import MandalaOne from '../sketches/MandalaOne'

import { HashRouter as Router, Route } from 'react-router-dom'


class Home extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    MandalaOne: MandalaOne,
  };

}

render() {
  return (
    <Router>
      <div>
      <br/> <br/>
        <div className='mandalaCentered'>
          <P5Wrapper sketch={this.state.MandalaOne}/>
        </div>
        <div>
          <p className="txtCentered">I hope you enjoy my site, make sure you poke around. <br/> There are heaps of little interactive bits if you know where to look.</p>
        </div>
        <br /> <br /><br /> <br />
      </div>
    </Router>
  )}
}

  export default Home
