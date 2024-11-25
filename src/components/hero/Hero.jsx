import React from "react";
import "./Hero.css";
import Date from "./Date";
import Location from "./Location";
import Guests from "./Guests";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1>Start your journey with us</h1>
        <p>Find what makes you happy anytime and anywhere</p>
        <div className="hero-search-container">
          <div className="hero-search">
            <div className="hero-wrapper">
              <Location />
              <Guests />
              <Date />

              <Link to="/hotels">
                <div className="search-button">
                  <button>Search</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
