import React from 'react';
import PropTypes from 'prop-types';

export const MovieProfile = ({movie}) => {
  return (
    <ul>
      <li>{movie.title}</li>
      <li>{movie.director}</li>
    </ul>
  );
};

MovieProfile.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string, 
    director: PropTypes.string
  })
};