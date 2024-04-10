import { useEffect, useRef, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

import { getMoviesById } from '../../components/articies-api';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieListDetails from '../../components/MovieListDetails/MovieListDetails';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoader, setLoader] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchMoviesById = async () => {
      setLoader(true);
      try {
        const data = await getMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchMoviesById();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkRef.current}>⬅ Go back</Link>
      {error && <ErrorMessage />}
      {movie && (
        <MovieListDetails movie={movie} from={location} defLocation="/" />
      )}
      {isLoader && !error && <Loader />}
    </>
  );
};

export default MovieDetailsPage;
