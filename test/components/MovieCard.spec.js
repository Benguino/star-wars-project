import React from 'react';
import {mount} from 'enzyme';
import {MovieCard} from '../../src/components';

describe('MovieCard component', () => {
  it('should render child nodes', () => {
    const wrapper = mount(<MovieCard props={{card: 'card'}}></MovieCard>);
    expect((wrapper).contains(
      <div className='col-lg-4 col-md-6 col-sm-12 movie-card'>
        <div className='row'>
          {wrapper.props.card}
        </div>  
      </div>  
    )).toBe(true);
  });
});