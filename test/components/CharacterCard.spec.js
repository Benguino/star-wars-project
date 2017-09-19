import React from 'react';
import {shallow} from 'enzyme';
import {CharacterCard} from '../../src/components';

describe('CharacterCard component', () => {
  it('should render character ids', () => {
    const wrapper = shallow(<CharacterCard char_id={13} />);
    expect((wrapper).contains(<li>Character ID 13</li>)).toBe(true);
  });
});