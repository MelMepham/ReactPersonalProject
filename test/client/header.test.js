import React from 'react'
import { shallow, mount } from 'enzyme'

import Header from '../../client/components/Header.jsx'

describe('<Header />', () => {
  it('renders 1 <Header /> component', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });
  describe('it renders props correctly', () => {
    const component = shallow(<Header name = "Header" />);
    expect(component.instance().props.name).toBe("Header");
  });
});
