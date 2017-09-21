import React from 'react';
import {CharacterCard} from './';
import PropTypes from 'prop-types';

export class LeftSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='col-md-2 col-sm-4' id='left-sidebar'>
        <h3>Left Sidebar</h3>
        <CharacterCard char_id={3} />
        <CharacterCard char_id={5} />
        {this.props.children}
      </div>
    );
  }
}

LeftSidebar.propTypes = {
  children: PropTypes.element.isRequired
};