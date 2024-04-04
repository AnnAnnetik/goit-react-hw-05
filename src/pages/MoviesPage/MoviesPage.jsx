import MovieList from '../../components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { getInfo } from '../../components/articies-api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInfo(query);
        setMovies(data.results); // Припускається, що результат містить поле results зі списком фільмів
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  const handleSearch = e => {
    e.preventDefault();
    // Викликати новий запит для пошуку фільмів за введеним запитом
    // Це спричинить виклик useEffect з новим значенням query
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};
export default MoviesPage;
