import React,{useState} from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import { Link as Link1 } from "react-scroll";

import logo from '../../Images/logo.png';
import "./Navbar.css";

const Navbar = () => {
  const [clicked,setclick]=useState('false')
  const handleClick = () => {
      setclick(!clicked);
  };

    return (
      <nav className="NavbarItems">
        <img className="navbar-logo" src={logo}/>
        <div className="menu-icon" onClick={handleClick}>
          <i
            className={!clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={!clicked ? "nav-menu active" : "nav-menu"}>
          <div className="input">
            <input placeholder="Search"  className="giveInput"/>
            <Button>Search</Button>
          </div>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <div className={items.cName} href={items.url}>
                <Link1 to={items.scrol} smooth={true} duration={1000} style={{cursor:"pointer"}}>{items.title}</Link1>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    );
}
export default Navbar;
