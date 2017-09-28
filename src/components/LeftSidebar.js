import React from 'react';
import PropTypes from 'prop-types';

export const LeftSidebar = (props) => {
  return (
    <div className='col-lg-2 col-sm-4' id='left-sidebar'>
      {props.children}
    </div>
  );
};

LeftSidebar.propTypes = {
  children: PropTypes.any.isRequired
};