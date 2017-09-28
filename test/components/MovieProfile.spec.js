import React from 'react';
import {mount} from 'enzyme';
import {MovieProfile} from '../../src/components';

const fetchResourceByUrl = jest.fn()
  .mockImplementation((url) => {
    return new Promise((resolve) => {
      process.nextTick(() => 
        resolve(['Sample Name'])
      );
    });  
  });


describe('MovieProfile component', () => {
  it('should render child nodes', (done) => {
    const props = {title:'Test', director:'Guy Homme'};
    const wrapper = mount(<MovieProfile movie={props}/>);
    wrapper.setState( {names: ['Some Name']});
    expect((wrapper).contains(<h4 className='title'>{props.title}</h4>)).toBe(true);
    expect((wrapper).contains(
      <ul>
        <li className='director'>Director: Guy Homme</li>
        <li>Some Characters:
          <p>Some Name</p>
        </li>
      </ul>
    )).toBe(true);
    done();
  });
});