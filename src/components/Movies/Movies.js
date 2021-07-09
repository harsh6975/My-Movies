import React from 'react';
import MovieCard from './MovieCard'
import { data } from "./data";
import './Movies.css';

class Movies extends React.Component{
  render() {
      return(
      <div className="moviecontainer" >
         {data.map(movie=>(
             <MovieCard movie={movie}/>
         ))}
      </div>
  )
  }
};

export default Movies;
