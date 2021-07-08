import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Earr from "../Model/Earr";

function Navbar() {
  return (
    <div className="main">
      <div className="navbar">
        <h1>Audiophilo</h1>
        <ul className="list">
          <li>
            <NavLink exact to="/" className="nav" activeClassName="nav-active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/headphone"
              className="nav"
              activeClassName="nav-active"
            >
              Headphone
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/speaker"
              className="nav"
              activeClassName="nav-active"
            >
              Speaker
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/earphone"
              className="nav"
              activeClassName="nav-active"
            >
              Earphone
            </NavLink>
          </li>
        </ul>
        <div className="cart">
         <ShoppingCartIcon/>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default Navbar;
