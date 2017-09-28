import React from 'react';
import PropTypes from 'prop-types';
import ES6Promise from 'es6-promise';
import update from 'immutability-helper';
import _take from 'lodash.take';
import _shuffle from 'lodash.shuffle';
import {fetchResourceByUrl} from '../services';

ES6Promise.polyfill();

export class MovieProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      names: []
    };

    this.fetchResourceByUrl = fetchResourceByUrl.bind(this);
  }

  componentDidMount() {
    let urls = _take(_shuffle(this.props.movie.characters), 3);

    Promise.all(urls.map(url => {
      return fetchResourceByUrl(url).then((response) => {
        return response.data.name;
      });
    })).then((names) => {
      return this.setState(update(this.state, {names: {$push: names}}));
    });
  }

  render() {
    return (
      <div className='col-xs-6'>
        <img 
          width='auto'
          height='300px'
          src={'./assets/' + this.props.movie.episode_id + '.jpg'} 
        />
        <h4 className='title'>{this.props.movie.title}</h4>
        <ul>
          <li className='director'>Director: {this.props.movie.director}</li>
          <li>Some Characters:
            <p>
              {this.state.names.join(', ')}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

MovieProfile.propTypes = {
  movie: PropTypes.shape({
    characters: PropTypes.arrayOf(PropTypes.string),
    director: PropTypes.string,
    episode_id: PropTypes.number,
    title: PropTypes.string 
  })
};