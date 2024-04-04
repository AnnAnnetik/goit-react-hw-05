import axios from 'axios';

const url = 'https://api.themoviedb.org/3/search/movie';
const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzllZWI4MjBjYjg0ZGRhNTk5MmM0MDcyMWEyZWRmOSIsInN1YiI6IjY2MGQ4MjI2ZGE5ZWYyMDE3ZDU4MzdjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4FKGH6BZpu3ZbVT7GZWO9-Lo1niXTIAFrupKLw6zSGU ';

export const getInfo = async query => {
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data } = await axios.get(url, {
      params: {
        include_adult: false,
        language: 'en-US',
        page: 1,
        query: query,
      },
      ...options,
    });
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
