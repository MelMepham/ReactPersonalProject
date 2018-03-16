
import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import artPage from './components/ArtPage'
import Design from './components/Design'
import WebDev from './components/WebDev'
import CV from './components/CV'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = (props) => {
  return (
    <Router>
      <div>
      <Route path='/' component={Header} />
      <Route exact path='/art' component={artPage} />
      <Route exact path='/design' component={Design} />
      <Route exact path='/webdev' component={WebDev} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/CV' component={CV} />
      <Route path='/' component={Footer} />

      </div>
    </Router>

  )
}

  export default App
