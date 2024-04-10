import style from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li className={style.item} key={id}>
              <Link to={`/movies/${id}`} state={location}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
