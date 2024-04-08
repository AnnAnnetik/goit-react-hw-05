import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzllZWI4MjBjYjg0ZGRhNTk5MmM0MDcyMWEyZWRmOSIsInN1YiI6IjY2MGQ4MjI2ZGE5ZWYyMDE3ZDU4MzdjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4FKGH6BZpu3ZbVT7GZWO9-Lo1niXTIAFrupKLw6zSGU',
  },
};

export const getMovies = async () => {
  const { data } = await axios.get('/trending/movie/day', options);
  return data;
};

export const getMoviesByQuary = async query => {
  const { data } = await axios.get('search/movie', {
    ...options,
    params: { query },
  });
  return data;
};

export const getMoviesById = async id => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const getMoviesCredits = async id => {
  const { data } = await axios.get(`/movie/${id} / credits`, options);
  return data;
};

export const getMoviesReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`, options);
  return data;
};
