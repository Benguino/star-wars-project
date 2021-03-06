import React from 'react';
import PropTypes from 'prop-types';
import {MovieProfile, MovieCard} from './';
import _chunk from 'lodash.chunk';

export const MainPanel = ({movies}) => {
  let pairedMovies = _chunk(movies, 2);
  let movieCards = pairedMovies.map((pair) => {
    return pair.map((movie) => <MovieProfile key={movie.episode_id} movie={movie} />);
  });

  return (
    <div className='col-lg-10 col-sm-8' id='main-panel'>
      <h3>The Movies</h3>
      {movieCards.map((card, index) => <MovieCard key={index}>{card}</MovieCard>)}
    </div>
  );
};

MainPanel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};
