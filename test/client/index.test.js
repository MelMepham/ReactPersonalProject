import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/App.jsx'
import './setup-dom'

App.prototype.componentDidMount = () => {}

test('Hello World renders on App', () => {
  const wrapper = shallow(<App />)
})
