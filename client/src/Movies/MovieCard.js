import React from 'react';

const MovieCard = props => {
  const  handleRouteToClick = e =>{
    e.preventDefault();
    props.history.push("/movie-list/");
  };
  // const movie = moviesId.find(movie => props.match.params.id === movie.id);
  return
  <div className="movie-card">
  <button onClick={handleRouteToClick} className="save-button">Movie</button>
</div>
  );
  
}


export default MovieCard;
