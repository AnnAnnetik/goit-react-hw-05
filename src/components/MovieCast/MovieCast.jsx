import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from '../articies-api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MovieCast = () => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMoviesCredits = async () => {
      setLoader(true);
      try {
        const data = await getMoviesCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchMoviesCredits();
  }, [movieId]);

  return (
    movieId && (
      <div>
        {isLoader && <Loader />}
        {error && <ErrorMessage />}
        {cast && (
          <ul>
            {cast.map(item => (
              <li key={item.cast_id}>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                      : defaultImg
                  }
                  alt={item.name}
                />
                <h2>{item.name}</h2>
                <p>Character: {item.character}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};

export default MovieCast;
