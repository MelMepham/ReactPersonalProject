
import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import WebDev from './components/WebDev'


import thisDesign from './data/design.json'
import thisArt from './data/artInfo.json'

import ImageGallery from './components/ImageGallery'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = (props) => {
  return (
    <Router>
      <div>

      <Route exact path='/' component={HomePage} />


      <Route exact path='/webdev' component={WebDev} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route exact path='/art' render={()=><ImageGallery info={thisArt}/>}/>
      <Route exact path='/design' render={()=><ImageGallery info={thisDesign}/>}/>
      <Route path='/' component={Footer} />

      </div>
    </Router>

  )
}


      // <Route exact path='/art' component={Art} />
      // <Route exact path='/design' component={Design} />

  export default App
