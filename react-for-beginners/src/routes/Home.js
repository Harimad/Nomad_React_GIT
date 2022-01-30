import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const [loading, setLoading] = useState(true);
const [movies, setMovies] = useState([]);

const getMovies = async function () {
  const response = await fetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  );
  const json = await response.json();

  setMovies(json.data.movies);
  setLoading(false);
};

useEffect(() => {
  getMovies();
}, []);

return (
  <div>
    {loading ? (
      <h1>Loading... </h1>
    ) : (
      <div>
        (
        <div>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_img}
              title={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
        )
      </div>
    )}
  </div>
);

export default Home;
