import React from 'react';
import {shallow} from 'enzyme';
import {MainPanel} from '../../src/components';

describe('StarWarsWrapper component', () => {
  it('should render child nodes', () => {
    const wrapper = shallow(<MainPanel />);
    expect((wrapper).contains(<h3>Main Panel</h3>)).toBe(true);
  });
});