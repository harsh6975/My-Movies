import React from "react";
import { connect} from "react-redux";
import { addmovies } from "./Redux/Action/type";

import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";
import { data as movieList } from "./data";
import FavMovies from "./components/Movies/FavMovie";
import "./App.css";


class App extends React.Component {
  componentDidMount() {
    // make api call (here we dont have api)

    // const { store } = this.props;

    // const =this.props.getState()
    // store.subscribe(() => {
    //   console.log("subscriber");
    //   this.forceUpdate();
    // });
    // dispatch action (to get vaules in store)

    this.props.dispatch(addmovies(movieList));
    //console.log("State", this.props.store.getState());
  }

  isfav = (movie) => {
    const { movies } = this.props;
    const { favourite } = movies;
    const index = favourite.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  render() {
    const { movies } = this.props;
    const { list, favourite } = movies;

    console.log(this.props);
    console.log("fav", favourite);

    return (
      <div className="App">
        <section className="nav">
          <Navbar/>
        </section>
        <section id="home">
          <Home />
        </section>
        <section id="movie">
          <h1 className="Fav">All Movies</h1>
          <Movies
            movies={list}
            dispatch={this.props.dispatch}
            isfav={this.isfav}
          />
        </section>
        <section id="fav">
          <h1 className="Fav">Fav Movies</h1>
          <FavMovies
            favmovie={favourite}
            dispatch={this.props.dispatch}
            isfav={this.isfav}
          />
        </section>
      </div>
    );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store)=> <App store={store}/>}
//       </StoreContext.Consumer>
//     )
//   }
// }
 
// export default AppWrapper;

function callback(state){
  return{
    movies:state.movies,
    search:state.search
  }
}

export default connect(callback)(App);
