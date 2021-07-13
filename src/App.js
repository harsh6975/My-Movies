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
    const { favourite } = this.props.store.getState();
    const index = favourite.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  render() {
    const { list, favourite } = this.props.store.getState();
    console.log("fav", favourite);
    return (
      <div className="App">
        <section className="nav">
          <Navbar />
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
