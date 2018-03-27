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
  describe('clicking a mandala show equals true', () => {
    const component = mount(<Design />);
    console.log(component)
    // const onClick = component.find('.hvr-shrink').first().simulate('click');
    // expect(onClick.root.node.state.info[0].show).toBe(true);
  })
});
