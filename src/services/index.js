import axios from 'axios';
import {SWAPI} from '../../config.js';

const fetchMovies = () => {
  return axios.get(SWAPI + 'films/');
};

export { fetchMovies };