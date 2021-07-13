import React from "react";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";
import {data} from './data';
import "./App.css";




class App extends React.Component {

  componentDidMount(){
    // make api call (here we dont have api)

    const {store}=this.props

    // const =this.props.getState()
    store.subscribe(()=>{
      console.log('subscriber');
      this.forceUpdate();
    })
    


    // dispatch action (to get vaules in store)

    store.dispatch({
      type: 'Add_MOVIES',
      movies: data
    })
    console.log('State',this.props.store.getState())
  }
  render() {
    const movies=this.props.store.getState()
    return (
      <div className="App">
        <section className="nav">
          <Navbar />
        </section>
        <section id="home">
          <Home />
        </section>
        <section id="movie">
          <Movies movies={movies} />
        </section>
      </div>
    );
  }
}

export default App;
