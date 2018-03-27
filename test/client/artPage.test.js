import React from 'react'
import { shallow, mount } from 'enzyme'

import ArtPage from '../../client/components/ArtPage.jsx'

describe('<ArtPage />', () => {
  it('renders 1 <ArtPage /> component', () => {
    const component = shallow(<ArtPage />);
    expect(component).toHaveLength(1);
  });
  describe('it renders props correctly', () => {
    const component = shallow(<ArtPage name = "ArtPage" />);
    expect(component.instance().props.name).toBe("ArtPage");
  });
  describe('Clicking an image shows the text', () => {
    const component = mount(<ArtPage />);
    const store = component.state()
    const onClick = component.find('img').first().simulate('click')
    expect(onClick.root.node.state.art[0].show).toBe(true);
  })
});
