import React from 'react'
import { shallow, mount } from 'enzyme'

import CV from '../../client/components/CV.jsx'

describe('<CV />', () => {
  it('renders 1 <CV /> component', () => {
    const component = shallow(<CV />);
    expect(component).toHaveLength(1);
  });
  describe('it renders props correctly', () => {
    const component = shallow(<CV name = "CV" />);
    expect(component.instance().props.name).toBe("CV");
  });
  describe('h1 says WATCH THIS SPACE', () => {
    const component = shallow(<CV name = "CV" />);
    expect(component.find('h1').node.props.children).toBe('WATCH THIS SPACE');
  });
});
