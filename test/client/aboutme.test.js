import React from 'react'
import { shallow, mount } from 'enzyme'

import AboutMe from '../../client/components/AboutMe.jsx'

describe('<AboutMe />', () => {
  it('renders 1 <AboutMe /> component', () => {
    const component = shallow(<AboutMe />);
    expect(component).toHaveLength(1);
  });
  describe('it renders props correctly', () => {
    const component = shallow(<AboutMe name = "AboutMe" />);
    expect(component.instance().props.name).toBe("AboutMe");
  });
  describe('clicking a mandala show equals true', () => {
    // const component = mount(<AboutMe />);
    // console.log(<AboutMe />)
    console.log(mount(<AboutMe />))
    // const onClick = component.find('.mandalaCentered').first().simulate('click');
  //   expect(onClick.root.node.state.info[0].show).toBe(true);
});
});
