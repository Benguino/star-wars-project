import React from 'react';
import {mount} from 'enzyme';
import {LeftSidebar} from '../../src/components';

describe('LeftSidebar component', () => {
  it('should render child nodes', () => {
    const wrapper = mount(<LeftSidebar><div></div></LeftSidebar>);
    expect((wrapper).contains(<h3>Left Sidebar</h3>)).toBe(true);
  });
});