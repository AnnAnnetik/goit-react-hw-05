import { useState, useParams, useEffect } from 'react';

const MovieCast = ({ cast }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  const { profile_path, name, character } = cast;
  const { movieId } = useParams();
  const [cast, setCast] = useState;
  const [error, setError] = useState(false);
  const [isLoader, setLoader] = useState(false);

  useEffect(() = {
    if (!movieId) return;
    const fetchMoviesCredits = async () => {
      setLoader(true);
      try {
        const data = await getMoviesCredits(movieId);
        setCast(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchMoviesCredits();
  }, [movieId]);

  

  return (
    <div>
      <ul>
        <li>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt={name}
          />
          <h2>{name}</h2>
          <p>Сharacter: {character}</p>
        </li>
      </ul>
    </div>
  );
};

export default MovieCast;

//  "cast": [
//     {
//       "adult": false,
//       "gender": 2,
//       "id": 819,
//       "known_for_department": "Acting",
//       "name": "Edward Norton",
//       "original_name": "Edward Norton",
//       "popularity": 26.99,
//       "profile_path": "/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg",
//       "cast_id": 4,
//       "character": "The Narrator",
//       "credit_id": "52fe4250c3a36847f80149f3",
//       "order": 0
//     },
