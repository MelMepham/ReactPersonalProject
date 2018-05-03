
import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import WebDev from './components/WebDev'
import ImageGallery from './components/ImageGallery'

import designInfo from './data/design.json'
import artInfo from './data/artInfo.json'

const App = (props) => {
  return (
    <Router>
      <div>

      <Route exact path='/' component={HomePage} />
      <Route exact path='/webdev' component={WebDev} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/art' render={()=><ImageGallery info={artInfo}/>}/>
      <Route exact path='/design' render={()=><ImageGallery info={designInfo}/>}/>
      <Route path='/' component={Footer} />

      </div>
    </Router>

  )
}

  export default App
