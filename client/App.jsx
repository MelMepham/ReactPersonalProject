
import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import artPage from './components/artPage'
import Design from './components/Design'






import {HashRouter as Router, Route} from 'react-router-dom'

const App = (props) => {
  return (
    <Router>
      <div>
      <Header />

      <Route exact path='/art' component={artPage} />
      <Route exact path='/design' component={Design} />
      <Route exact path='/webdev' component={artPage} />
      <Route path='/home' component={HomePage} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route path='/' component={Footer} />

      </div>
    </Router>

  )
}

  export default App
