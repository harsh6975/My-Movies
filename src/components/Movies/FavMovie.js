import React from "react";
import MovieCard from "./MovieCard";

class FavMovies extends React.Component {
  render() {
    const movies = this.props.favmovie;
    console.log("Movies Size", movies.length);
    return (
      <div className="moviecontainer">
        {movies.length === 0 ? (
          <h2 className="nofav">No Favourite Movies</h2>
        ) : (
          movies.map((item, index) => (
            <MovieCard 
              movie={item} 
              key={index}
              dispatch={this.props.dispatch}
              isfav={this.props.isfav(item)}
            />))
        )}
      </div>
    );
  }
}

export default FavMovies;
