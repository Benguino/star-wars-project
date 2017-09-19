import React from 'react';
import {mount} from 'enzyme';
import {MovieProfile} from '../../src/components';

describe('MovieProfile component', () => {
  it('should render child nodes', () => {
    const props = {title:'test', director:'Guy Homme'};
    const wrapper = mount(<MovieProfile movie={props}/>);
    expect((wrapper).contains(
      <ul>
        <li>{props.title}</li>
        <li>{props.director}</li>
      </ul>
    )).toBe(true);
  });
});