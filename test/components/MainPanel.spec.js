import React from 'react';
import {shallow} from 'enzyme';
import {MainPanel} from '../../src/components';

describe('MainPanel component', () => {
  it('should render child nodes', () => {
    const wrapper = shallow(<MainPanel />);
    expect((wrapper).contains(<h3>The Movies</h3>)).toBe(true);
  });
});