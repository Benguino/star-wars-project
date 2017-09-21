import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = (props) => {

  return (
    <div className='col-xs-12 col-sm-6 col-md-4 movie-card'>
      <div className='row'> 
        {props.children}
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  children: PropTypes.any
};