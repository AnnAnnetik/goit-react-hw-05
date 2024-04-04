const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
