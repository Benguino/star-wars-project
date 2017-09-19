import React from 'react';
import PropTypes from 'prop-types';

export const MovieProfile = (props) => {
  return (
    <ul>
      <li>{props.movie.title}</li>
      <li>{props.movie.director}</li>
    </ul>
  );
};

MovieProfile.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string, 
    director: PropTypes.string
  })
};