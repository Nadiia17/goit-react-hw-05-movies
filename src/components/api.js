import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'a3b6d29cef5ec6a74db53e15ddd579d0';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data.results;
};

export const searchByQuery = async query => {
  const params = {
    api_key: KEY,
    query,
    include_adult: false,
    language: 'en-US',
  };
  const response = await axios.get('search/movie', { params });
  return response.data.results;
};

export const getMovieDetails = async movie_id => {
  const params = {
    api_key: KEY,
    language: 'en-US',
  };
  const response = await axios.get(`movie/${movie_id}`, { params });
  return response.data;
};

export const getCastInfo = async movie_id => {
  const params = {
    api_key: KEY,
    language: 'en-US',
  };
  const response = await axios.get(`movie/${movie_id}/credits`, { params });
  return response.data.cast;
};

export const getReviews = async movie_id => {
  const params = {
    api_key: KEY,
    language: 'en-US',
  };
  const response = await axios.get(`movie/${movie_id}/reviews`, { params });
  return response.data.results;
};
