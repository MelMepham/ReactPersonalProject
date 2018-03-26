import React from 'react'
import { shallow } from 'enzyme'

import HomePage from '../../client/components/HomePage.jsx'

describe('<HomePage />', () => {
  it('renders 1 <HomePage /> component', () => {
    const component = shallow(<HomePage />);
    expect(component).toHaveLength(1);
  });
  describe('it renders props correctly', () => {
    const component = shallow(<HomePage name = "HomePage" />);
    expect(component.instance().props.name).toBe("HomePage");
  });
});
