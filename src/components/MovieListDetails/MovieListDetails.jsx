import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
import css from './MovieListDetails.module.css';

export const MovieListDetails = ({ movie }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div className={css.moviedetails}>
      <ul>
        <li>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
          />

          <h2>
            {movie.title} ({movie.release_date.split('-')[0]})
          </h2>
          <p>User Score: {Math.round(movie.vote_average * 10)} %</p>

          <p>Overview </p>
          <p>{movie.overview}</p>
          <p>Genres </p>
          <p>
            {movie.genres
              .map(genre => {
                return genre.name;
              })
              .join(', ')}
          </p>
        </li>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="credits">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
            <Routes>
              <Route path="credits" element={<MovieCast />}></Route>
              <Route path="reviews" element={<MovieReviews />}></Route>
            </Routes>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default MovieListDetails;
