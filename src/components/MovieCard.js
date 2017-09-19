import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = (props) => {

  return (
    <div 
      className='col-md-4 col-sm-6 movie-card'>
      {props.card}
    </div>
  );
};

MovieCard.propTypes = {
  card: PropTypes.any
};