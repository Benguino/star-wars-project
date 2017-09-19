import React from 'react';
import {shallow} from 'enzyme';
import {StarWarsWrapper, LeftSidebar, MainPanel} from '../../src/components';

describe('StarWarsWrapper component', () => {
  describe('render', () => {
    const wrapper = shallow(<StarWarsWrapper />);
    it('should render child nodes', () => {
      expect((wrapper).contains(<LeftSidebar />)).toBe(true);
      expect((wrapper).contains(<MainPanel />)).toBe(true);
    });
  });

  describe('#componentDidMount', () => {
    const wrapper = shallow(<StarWarsWrapper />);
    it('should invoke #getMovies', () => {
      const inst = wrapper.instance();
      const fetchMoviesSpy = jest.spyOn(inst, 'fetchMovies');

      inst.componentDidMount();
      expect(fetchMoviesSpy).toHaveBeenCalled();
    });
  });

  xdescribe('#getMovies', () => {
    const wrapper = shallow(<StarWarsWrapper />);
    it('should update state with a new movie', () => {
      const inst = wrapper.instance();

      expect(inst.state.movies).toEqual([]);
      return inst.getMovies().then((data) => {
        expect(data).toBe('wrong');
        expect(inst.state.movies).toEqual(['Empire']);
      });
    });
  });
});
