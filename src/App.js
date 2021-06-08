import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovie] = useState({});

  async function fetchMoviesHandler() {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    setMovie(data);
  }

  return (
    <React.Fragment>
     <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      {
        movies['count']
      }
    </React.Fragment>
  );
}

export default App;
