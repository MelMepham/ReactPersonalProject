
import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import Art from './components/ArtPage'
import Design from './components/Design'
import WebDev from './components/WebDev'

import ImageGallery from './components/ImageGallery'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = (props) => {
  return (
    <Router>
      <div>

      <Route exact path='/' component={HomePage} />


      <Route exact path='/webdev' component={WebDev} />
      <Route exact path='/aboutme' component={AboutMe} />

      <Route exact path='/art' component={Art} />
      <Route exact path='/design' component={Design} />


      <Route path='/' component={Footer} />

      </div>
    </Router>

  )
}

  export default App
