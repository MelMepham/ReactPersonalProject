
import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'



import {HashRouter as Router, Route} from 'react-router-dom'

const App = (props) => {
  return (
    <Router>
      <div>
      <Header />

      <Route path='/art' component={Content} />
      <Route path='/design' component={Content} />
      <Route path='/webdev' component={Content} />
      <Route path='/home' component={HomePage} />
      <Route path='/aboutme' component={AboutMe} />
      <Route path='/' component={Footer} />

      </div>
    </Router>

  )
}

  export default App
