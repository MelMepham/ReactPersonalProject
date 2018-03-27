import React from 'react'
import { shallow, mount } from 'enzyme'

import WebDev from '../../client/components/WebDev.jsx'

describe('<WebDev />', () => {
  it('renders 1 <WebDev /> component', () => {
    const component = shallow(<WebDev />);
    expect(component).toHaveLength(1);
  });
  describe('it renders props correctly', () => {
    const component = shallow(<WebDev name = "WebDev" />);
    expect(component.instance().props.name).toBe("WebDev");
  });
  describe('Clicking an image shows the text', () => {
    const component = mount(<WebDev />);
    const store = component.state()
    const onClick = component.find('img').first().simulate('click')
    expect(onClick.root.node.state.devInfo[0].show).toBe(true);
  })
});
