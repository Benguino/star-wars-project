import React from 'react';
import PropTypes from 'prop-types';
import { VictoryAxis,
  VictoryBar, 
  VictoryChart, 
  VictoryTheme } from 'victory';

const calculateWordCount = (openingCrawl) => { 
  return 400;
};

export const CrawlChart = ({movies}) => {
  let data = [
    {movie: 1, word_count: calculateWordCount(movies)},
    {movie: 2, word_count: 165},
    {movie: 3, word_count: 142},
    {movie: 4, word_count: 190},
    {movie: 5, word_count: 900},
    {movie: 6, word_count: 350},
    {movie: 7, word_count: 180}
  ];

  return (
    <VictoryChart
      // adding the material theme provided with Victory
      theme={VictoryTheme.material}
      domainPadding={20}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6, 7]}
        tickFormat={['Ep 1', 'Ep 2', 'Ep 3', 'Ep 4', 'Ep 5', 'Ep 6', 'Ep 7']} 
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`${x}`)}
      />
      <VictoryBar
        data={data}
        x="movie"
        y="word_count"
      />
    </VictoryChart>
  );
};

CrawlChart.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      opening_crawl: PropTypes.string.isRequired,
      title: PropTypes.string
    })
  )
};