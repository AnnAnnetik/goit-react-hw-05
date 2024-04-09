import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';

export const MovieListDetails = ({ movie }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <div>
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

//
//   "adult": false,
//   "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
//   "belongs_to_collection": null,
//   "budget": 63000000,
//   "genres": [
//     {
//       "id": 18,
//       "name": "Drama"
//     },
//     {
//       "id": 53,
//       "name": "Thriller"
//     },
//     {
//       "id": 35,
//       "name": "Comedy"
//     }
//   ],
//   "homepage": "http://www.foxmovies.com/movies/fight-club",
//   "id": 550,
//   "imdb_id": "tt0137523",
//   "original_language": "en",
//   "original_title": "Fight Club",
//   "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//   "popularity": 61.416,
//   "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//   "production_companies": [
//     {
//       "id": 508,
//       "logo_path": "/7cxRWzi4LsVm4Utfpr1hfARNurT.png",
//       "name": "Regency Enterprises",
//       "origin_country": "US"
//     },
//     {
//       "id": 711,
//       "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
//       "name": "Fox 2000 Pictures",
//       "origin_country": "US"
//     },
//     {
//       "id": 20555,
//       "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
//       "name": "Taurus Film",
//       "origin_country": "DE"
//     },
//     {
//       "id": 54051,
//       "logo_path": null,
//       "name": "Atman Entertainment",
//       "origin_country": ""
//     },
//     {
//       "id": 54052,
//       "logo_path": null,
//       "name": "Knickerbocker Films",
//       "origin_country": "US"
//     },
//     {
//       "id": 4700,
//       "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
//       "name": "The Linson Company",
//       "origin_country": "US"
//     },
//     {
//       "id": 25,
//       "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
//       "name": "20th Century Fox",
//       "origin_country": "US"
//     }
//   ],
//   "production_countries": [
//     {
//       "iso_3166_1": "US",
//       "name": "United States of America"
//     }
//   ],
//   "release_date": "1999-10-15",
//   "revenue": 100853753,
//   "runtime": 139,
//   "spoken_languages": [
//     {
//       "english_name": "English",
//       "iso_639_1": "en",
//       "name": "English"
//     }
//   ],
//   "status": "Released",
//   "tagline": "Mischief. Mayhem. Soap.",
//   "title": "Fight Club",
//   "video": false,
//   "vote_average": 8.433,
//   "vote_count": 26280
// }
