import React from 'react';

const MovieCard = props => {
  

  
  // const movie = moviesId.find(movie => props.match.params.id === movie.id);
  return(
  <div className="movie-card">
          <div onClick={() => routeToMovies(props, movie)}>{movie.title}</div> 

  </div>
  );
  function routeToMovies(props, movie){
    props.history.push(`/movies/${movie.id}`);
  }
}


export default MovieCard;
