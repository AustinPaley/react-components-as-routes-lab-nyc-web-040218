import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) =>
          <div key={index}>
            <h3>{movie.title}</h3>
            <p>Time: {movie.time}</p>
            <ul>
              <h4>Genres:</h4>
            {movie.genres.map((genre, index) =>
              <li key={index}>{genre}</li>
            )}
            </ul>
            <p>{movie.metascore}</p>
          </div>
        )}
    </div>
  );
};

export default Movies;
