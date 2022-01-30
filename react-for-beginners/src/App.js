import { useEffect, useState } from 'react';

function App() {
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
              <div key={movie.id}>
                <img src={movie.medium_cover_image} />
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                {movie.hasOwnProperty('genres') ? (
                  <ul>
                    {movie.genres.map(g => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
          )
        </div>
      )}
    </div>
  );
}

export default App;
