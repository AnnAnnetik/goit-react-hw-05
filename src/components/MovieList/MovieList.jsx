import style from './MovieList.module.css';

import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <div>
      <ul></ul>
      {movies.map(({ id, title }) => {
        return (
          <li className={style.item} key={id}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </li>
        );
      })}
    </div>
  );
};
export default MovieList;
