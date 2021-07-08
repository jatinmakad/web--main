import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_main">
        <div className="footer_first">
          <h1>audiophile</h1>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <h4>Copyright 2021. All Rights Reserved</h4>
        </div>
        <div className="footer_two">
          <div className="footer_nav">
            <ul>
              <li>
                <NavLink
                  exact
                  to="/"
                  className="foot"
                  activeClassName="foot_nav"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/headphone"
                  className="foot"
                  activeClassName="foot_nav"
                >
                  Headphone
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/speaker"
                  className="foot"
                  activeClassName="foot_nav"
                >
                  Speaker
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/earphone"
                  className="foot"
                  activeClassName="foot_nav"
                >
                  Earphone
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer_logo">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
