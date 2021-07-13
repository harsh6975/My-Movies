import React from "react";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";
import { data } from "./data";
import "./App.css";
import { addmovies } from "./Redux/Action/type";
import FavMovies from "./components/Movies/FavMovie";


class App extends React.Component {
  componentDidMount() {
    // make api call (here we dont have api)

    const { store } = this.props;

    // const =this.props.getState()
    store.subscribe(() => {
      console.log("subscriber");
      this.forceUpdate();
    });
    // dispatch action (to get vaules in store)

    store.dispatch(addmovies(data));
    console.log("State", this.props.store.getState());
  }

  isfav = (movie) => {
    const {movies}=this.props.store.getState();
    const { favourite } = movies;
    const index = favourite.indexOf(movie);
    if (index !== -1) {
      return true;
    } 
    return false;
  };
  render() {
    const {movies,search}=this.props.store.getState();
    const { list, favourite } = movies;
    console.log("fav", favourite);
    return (
      <div className="App">
        <section className="nav">
          <Navbar search={search}/>
        </section>
        <section id="home">
          <Home />
        </section>
        <section id="movie">
          <h1 className="Fav">All Movies</h1>
          <Movies
            movies={list}
            dispatch={this.props.store.dispatch}
            isfav={this.isfav}
          />
        </section>
        <section id="fav">
          <h1 className="Fav">Fav Movies</h1>
          <FavMovies
            favmovie={favourite}
            dispatch={this.props.store.dispatch}
            isfav={this.isfav}
          />
        </section>
      </div>
    );
  }
}

export default App;
