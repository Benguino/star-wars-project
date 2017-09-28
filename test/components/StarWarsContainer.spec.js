import React from 'react';
import {mount, shallow} from 'enzyme';
import {CrawlChart, CharacterCard, StarWarsContainer, LeftSidebar, MainPanel} from '../../src/components';

describe('StarWarsContainer component', () => {
  describe('render', () => {
    const wrapper = mount(<StarWarsContainer />);
    
    it('should render child nodes', () => {
      const inst = wrapper.instance();
      
      expect((wrapper).contains(
        <div className='containter' id='star-wars-container'>
          <div className='row'>
            <LeftSidebar>
              <CharacterCard id='fav_char'/>
              <CharacterCard id='worst_char'/>
              <CrawlChart movies={inst.state.movies} />
            </LeftSidebar>
            <MainPanel movies={inst.state.movies}/>
          </div>
        </div>)).toBe(true);
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
