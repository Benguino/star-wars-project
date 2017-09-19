import React from 'react';
import {mount} from 'enzyme';
import {MovieCard} from '../../src/components';

describe('MovieCard component', () => {
  it('should render child nodes', () => {
    const wrapper = mount(<MovieCard props={{card: 'card'}}></MovieCard>);
    expect((wrapper).contains(
      <div 
        className='col-md-4 col-sm-6 movie-card'>
        {wrapper.props.card}
      </div>  
    )).toBe(true);
  });
});