import React from 'react'
import { shallow, mount } from 'enzyme'

import Design from '../../client/components/Design.jsx'

describe('<Design />', () => {
  it('renders 1 <Design /> component', () => {
    const component = shallow(<Design />);
    expect(component).toHaveLength(1);
  });
  describe('it renders props correctly', () => {
    const component = shallow(<Design name = "Design" />);
    expect(component.instance().props.name).toBe("Design");
  });
  describe('Clicking an image shows the text', () => {
    const component = mount(<Design />);
    const store = component.state()
    const onClick = component.find('img').first().simulate('click')
    expect(onClick.root.node.state.design[0].show).toBe(true);
  })
});
