import React from 'react';
import PropTypes from 'prop-types';

export const CharacterCard = ({char_id}) => {
  return (
    <ul>
      <li>Character ID {char_id}</li>
    </ul>
  );
};

CharacterCard.propTypes = {
  char_id: PropTypes.number.isRequired
};