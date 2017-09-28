import React from 'react';
import {mount} from 'enzyme';
import {LeftSidebar} from '../../src/components';

describe('LeftSidebar component', () => {
  it('should render child nodes', () => {
    const wrapper = mount(<LeftSidebar><h3>Child Header</h3></LeftSidebar>);
    expect((wrapper).contains(<h3>Child Header</h3>)).toBe(true);
  });
});