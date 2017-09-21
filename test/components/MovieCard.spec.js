import React from 'react';
import {mount} from 'enzyme';
import {MovieCard} from '../../src/components';

describe('MovieCard component', () => {
  it('should render child nodes', () => {
    const wrapper = mount(<MovieCard props={{card: 'card'}}></MovieCard>);
    expect((wrapper).contains(
      <div className='col-xs-12 col-sm-6 col-md-4 movie-card'>
        <div className='row'>
          {wrapper.props.card}
        </div>  
      </div>  
    )).toBe(true);
  });
});