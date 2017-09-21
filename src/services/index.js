import axios from 'axios';
import {SWAPI} from '../../config.js';

const fetchMovies = () => {
  return axios.get(SWAPI + 'films/');
};

const fetchResourceByUrl = (url) => {
  return axios.get(url);
};

export { fetchMovies, fetchResourceByUrl };

