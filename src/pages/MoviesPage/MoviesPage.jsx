import { useEffect, useState } from 'react';
import { getMoviesByQuary } from '../../components/articies-api';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [error, setError] = useState(false);
  const [isLoader, setLoader] = useState(false);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) return;
    const fetchMoviesByQuery = async () => {
      setLoader(true);
      try {
        const data = await getMoviesByQuary(query);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchMoviesByQuery();
  }, [query]);

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {movies && <MovieList movies={movies} />}
      {isLoader && !error && <Loader />}
    </div>
  );
};

export default MoviesPage;
