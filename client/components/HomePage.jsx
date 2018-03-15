
import React from 'react'
import ReactDOM from 'react-dom'
import P5Wrapper from 'react-p5-wrapper'
import MandalaOne from './MandalaOne'

import {HashRouter as Router, Route} from 'react-router-dom'


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
      <div>Hello World</div>
        <P5Wrapper sketch={this.state.MandalaOne}/>
        </div>
    </Router>


  )
}
}

  export default Home
