import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getMoviesReviews } from '../articies-api';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      setLoader(true);
      try {
        const data = await getMoviesReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchMoviesReviews();
  }, [movieId]);

  return (
    movieId && (
      <div>
        {isLoader && <Loader />}
        {error && <ErrorMessage />}
        <ul>
          {reviews &&
            reviews.map(item => (
              <li key={item.id}>
                <p>Author: {item.author}</p>
                <p>{item.content}</p>
              </li>
            ))}
        </ul>
      </div>
    )
  );
};

export default MovieReviews;
