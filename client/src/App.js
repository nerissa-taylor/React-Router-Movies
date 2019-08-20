import React, { useState } from 'react';
import {Route, Link} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  const {movie} = {}
  // const  handleRouteToClick = e =>{
  //   e.preventDefault();
   
  // };
  return (
    <div>
      <SavedList list={savedList} />
      <div>
   
      
      
      <Link className="movie-list" to={`/movies/$movies.id}`}>Movies</Link>
      <Route path="/movies" render={props => <MovieList {...props} movies={movie} />} />
      <Route exact path="/movies/:id" render={props => <Movie {...props} movies={movie} />} /> </div>
      {/* <button onClick={handleRouteToClick} className="saved-button">Click</button> */}

    </div>
  );
};

export default App;
