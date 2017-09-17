import React from 'react';
import {shallow} from 'enzyme';
import {Container} from './index.js';

describe('Container component', () => {
  it('should render H3 with text', () => {
    const wrapper = shallow(<Container />);
    expect((wrapper).contains(<h3>New Container</h3>)).toBe(true);
  });
});