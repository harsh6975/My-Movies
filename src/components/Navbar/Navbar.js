import React, { useState } from "react";
import { connect } from "react-redux";
import { Link as Link1 } from "react-scroll";
import { addMovieToList, movieSearch } from "../../Redux/Action/type";

import { MenuItems } from "./MenuItems";
import logo from "../../Images/logo.png";
import "./Navbar.css";

const Navbar = (props) => {
  const [clicked, setclick] = useState("false");
  const [searchTxt, setSearch] = useState("");

  const handleClick = () => {
    setclick(!clicked);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(searchTxt);
  };
  const handleSearch = () => {
    // console.log('Search Working');
    props.dispatch(movieSearch(searchTxt));
  };

  const handleAddToMovies = (movie) => {
    props.dispatch(addMovieToList(movie));
  };

  const { result: movie, showSearchResults } = props.search;

  return (
    <nav className="NavbarItems">
      <img className="navbar-logo" src={logo} alt="12345" />
      <div className="menu-icon" onClick={handleClick}>
        <i className={!clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="input">
        <input
          placeholder="Search"
          className="giveInput"
          onChange={handleChange}
        />
        <button onClick={handleSearch} className="mybut">Search</button>
      </div>
      {showSearchResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={movie.Poster} alt="search-pic" />
              <div className="movie-info">
                <span>{movie.Title}</span>
                <span>Rating : {movie.imdbRating}</span>
                <button onClick={() => handleAddToMovies(movie)}>
                  Add to Movies
                </button>
              </div>
            </div>
          </div>
        )}
      <ul className={!clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((items, index) => {
          return (
            <li key={index}>
              <div className={items.cName} href={items.url}>
                <Link1
                  to={items.scrol}
                  smooth={true}
                  duration={1000}
                  style={{ cursor: "pointer" }}
                >
                  {items.title}
                </Link1>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
// export default Navbar;

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}

export default connect(mapStateToProps)(Navbar);
