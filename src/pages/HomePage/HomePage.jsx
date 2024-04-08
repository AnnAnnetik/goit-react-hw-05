import { useEffect, useState } from 'react';

import { getMovies } from '../../components/articies-api';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoader(true);
      try {
        const response = await getMovies();

        setMovies(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <ErrorMessage />}
      {movies && <MovieList movies={movies} from={location} defLocation="/" />}
      {isLoader && !error && <Loader />}
    </div>
  );
};

export default HomePage;
