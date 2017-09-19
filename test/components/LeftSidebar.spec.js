import React from 'react';
import {shallow} from 'enzyme';
import {LeftSidebar} from '../../src/components';

describe('StarWarsWrapper component', () => {
  it('should render child nodes', () => {
    const wrapper = shallow(<LeftSidebar />);
    expect((wrapper).contains(<h3>Left Sidebar</h3>)).toBe(true);
  });
});