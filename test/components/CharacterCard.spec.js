import React from 'react';
import {shallow} from 'enzyme';
import {CharacterCard} from '../../src/components';

describe('CharacterCard component', () => {
  it('should render best char based on id prop', () => {
    const wrapper = shallow(<CharacterCard id='fav_char' />);
    expect((wrapper).contains(
      <div className='character-card'>
        <h3>Best Character</h3>
        <img src={'./assets/bobafett.gif'} />
      </div>
    )).toBe(true);
  });

  it('should render worst char based on id prop', () => {
    const wrapper = shallow(<CharacterCard id='worst_char' />);
    expect((wrapper).contains(
      <div className='character-card'>
        <h3>Worst Character</h3>
        <img src={'./assets/jjb.gif'} />
      </div>
    )).toBe(true);
  });
});