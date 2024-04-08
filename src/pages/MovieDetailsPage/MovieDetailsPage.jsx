import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getMoviesById } from '../../components/articies-api';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieListDetails from '../../components/MovieListDetails/MovieListDetails';

const MovieDetailsPage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const [isLoader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMoviesById = async () => {
      setLoader(true);
      try {
        const data = await getMoviesById(movieId);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchMoviesById();
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage />}
      {movies && (
        <MovieListDetails movies={movies} from={location} defLocation="/" />
      )}

      {isLoader && !error && <Loader />}
    </div>
  );
};

export default MovieDetailsPage;
