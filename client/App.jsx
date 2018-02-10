
import React from 'react'
import {render} from 'react-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import ArtPage from './components/ArtPage'
import ContentNew from './components/ContentNew'




import {HashRouter as Router, Route} from 'react-router-dom'

const App = (props) => {
  return (
    <Router>
      <div>
      <Header />

      <Route exact path='/art' component={ContentNew} />
      <Route exact path='/design' component={ContentNew} />
      <Route exact path='/webdev' component={ContentNew} />
      <Route path='/home' component={HomePage} />
      <Route exact path='/aboutme' component={AboutMe} />
      <Route path='/' component={Footer} />

      </div>
    </Router>

  )
}

  export default App
