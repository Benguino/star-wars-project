import React from 'react';
import update from 'immutability-helper';
import _pick from 'lodash.pick';
import {CrawlChart, LeftSidebar, MainPanel} from './';
import {fetchMovies} from '../services';

export class StarWarsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMessage: null,
      favoriteCharacter: null,
      leastFavoriteCharacter: null,
      movies: []
    };

    this.fetchMovies = fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies()
      .then((result) => {
        let sortedResults = result.data.results.sort((a,b) => a.episode_id > b.episode_id);
        this.setState(update(this.state, {movies: {$push: sortedResults}}));
      })
      .catch((error) => {
        this.setState({error: true, errorMessage: error.message});
      });
  }

  render() {
    return (
      <div className='containter' id='star-wars-container'>
        <div className='row'>
          <LeftSidebar>
            <CrawlChart movies={this.state.movies} />
          </LeftSidebar>
          <MainPanel movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}