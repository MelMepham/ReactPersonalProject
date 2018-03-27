import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/App.jsx'
import './setup-dom'

App.prototype.componentDidMount = () => {}

test('App component is rendering', () => {
  const wrapper = shallow(<App />)
})
