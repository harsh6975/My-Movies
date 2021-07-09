import React from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import logo from '../../Images/logo.png';
import "./Navbar.css";
class Navbar extends React.Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <img className="navbar-logo" src={logo}/>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <div className="input">
            <input placeholder="Search"  className="giveInput"/>
            <Button>Search</Button>
          </div>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <a className={items.cName} href={items.url}>
                  {items.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
