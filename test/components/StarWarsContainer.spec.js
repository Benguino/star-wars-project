import React from 'react';
import {mount, shallow} from 'enzyme';
import {CrawlChart, StarWarsContainer, LeftSidebar, MainPanel} from '../../src/components';

describe('StarWarsContainer component', () => {
  describe('render', () => {
    const wrapper = mount(<StarWarsContainer />);
    
    it('should render child nodes', () => {
      const inst = wrapper.instance();
      
      expect((wrapper).contains(<LeftSidebar><CrawlChart crawl={inst.state.movies}/></LeftSidebar>)).toBe(true);
      expect((wrapper).contains(<MainPanel movies={inst.state.movies} />)).toBe(true);
    });
  });

  describe('#componentDidMount', () => {
    const wrapper = shallow(<StarWarsContainer />);
    it('should invoke #getMovies', () => {
      const inst = wrapper.instance();
      const fetchMoviesSpy = jest.spyOn(inst, 'fetchMovies');

      inst.componentDidMount();
      expect(fetchMoviesSpy).toHaveBeenCalled();
    });
  });

  xdescribe('#getMovies', () => {
    const wrapper = shallow(<StarWarsContainer />);
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
