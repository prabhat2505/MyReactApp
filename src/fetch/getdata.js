import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const Getadata =() =>{
  const [movielist,setMovie]=useState([]);

  async function fetchMoviesHandler() {
     
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovie(transformedMovies);
  }
  return(
    <React.Fragment>
      <Button onClick={fetchMoviesHandler}>GetMovies</Button>
      {
        movielist.map((movie) => (
        <p>{movie.title}</p>
      ))
      }
    </React.Fragment>
  )
}

export default Getadata;
/***********
 * https://swapi.dev/api/films/
 * 
 * {
    "count": 6, 
    "next": null, 
    "previous": null, 
    "results": [
        {
            "title": "A New Hope", 
            "episode_id": 4, 
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
            "director": "George Lucas", 
            "producer": "Gary Kurtz, Rick McCallum", 
            "release_date": "1977-05-25", 
        }
      ]
    }
 */