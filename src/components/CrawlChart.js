import React from 'react';
import PropTypes from 'prop-types';

export const CrawlChart = ({crawl}) => {
  return (
    <ul>
      <li>Crawl Chart here: {crawl.length}</li>
    </ul>
  );
};

CrawlChart.propTypes = {
  crawl: PropTypes.array.isRequired
};