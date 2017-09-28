import React from 'react';
import PropTypes from 'prop-types';

export const CharacterCard = ({id}) => {
  return (
    <div className='character-card'>
      <h3>{(id == 'fav_char') ? 'Best Character' : 'Worst Character'}</h3>
      <img src={'./assets/' + (id == 'fav_char' ? 'bobafett' : 'jjb') + '.gif'} />
    </div>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.string
};