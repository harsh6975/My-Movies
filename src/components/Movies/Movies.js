import React from "react";
import MovieCard from "./MovieCard";

import "./Movies.css";

class Movies extends React.Component {
  render() {
    const movies=this.props.movies
    return (
      <div className="moviecontainer">
        {movies.map((item, index) => (
          <MovieCard 
            movie={item} 
            key={index} 
            dispatch={this.props.dispatch}
            isfav={this.props.isfav(item)}
          />
        ))}
      </div>
    );
  }
}

export default Movies;
