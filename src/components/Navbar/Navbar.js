import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import { Link as Link1 } from "react-scroll";
import logo from "../../Images/logo.png";
import "./Navbar.css";
import { addMovieToList, movieSearch } from "../../Redux/Action/type";

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

      <ul className={!clicked ? "nav-menu active" : "nav-menu"}>
        <div className="input">
          <input
            placeholder="Search"
            className="giveInput"
            onChange={handleChange}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {showSearchResults && (
          <div className="search-results">
            <div className="search-result">
              <img src={movie.Poster} alt="search-pic" />
              <div className="movie-info">
                <span>{movie.Title}</span>
                <button onClick={() => handleAddToMovies(movie)}>
                  Add to Movies
                </button>
              </div>
            </div>
          </div>
        )}
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
export default Navbar;
