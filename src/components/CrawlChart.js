import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash.get';
import _words from 'lodash.words';
import { VictoryAxis,
  VictoryBar, 
  VictoryChart, 
  VictoryTheme } from 'victory';

export class CrawlChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {movie: 1, word_count: 0},
        {movie: 2, word_count: 0},
        {movie: 3, word_count: 0},
        {movie: 4, word_count: 0},
        {movie: 5, word_count: 0},
        {movie: 6, word_count: 0},
        {movie: 7, word_count: 0}
      ]
    };
  }

  componentWillReceiveProps(nextProps) {
    let movieCrawls = nextProps.movies.map((m) => _get(m, 'opening_crawl', ''));
    let newState = {
      data: movieCrawls.map((c, i) => { return { movie: i+1, word_count: _words(c).length}; })
    };

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h3>Opening Crawl Word Count</h3>
        <VictoryChart
          // adding the material theme provided with Victory
          animate={{duration: 500}}
          theme={VictoryTheme.material}
          domainPadding={20}
        >
          <VictoryAxis
            tickFormat={['Ep 1', 'Ep 2', 'Ep 3', 'Ep 4', 'Ep 5', 'Ep 6', 'Ep 7']} 
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
          />
          <VictoryAxis
            dependentAxis
            domain={[0, 100]}
            tickFormat={(x) => (`${x}`)}
          />
          <VictoryBar
            data={this.state.data}
            style={{ 
              data: {fill: '#fe9901', width:12}
            }}
            labels={(d) => `${Math.ceil(d.y)}`}
            x="movie"
            y="word_count"
          />
        </VictoryChart>
      </div>
    );
  }
}

CrawlChart.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      opening_crawl: PropTypes.string.isRequired,
      title: PropTypes.string
    })
  )
};