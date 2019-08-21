import React, { useState } from 'react';
import {Route} from 'react-router-dom';
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
   
      
      
      
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" render={props => <Movie {...props} movies={movie} />} /> </div>
      {/* <button onClick={handleRouteToClick} className="saved-button">Click</button> */}

    </div>
  );
};

export default App;
