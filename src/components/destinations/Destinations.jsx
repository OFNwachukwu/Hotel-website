import React from "react";
import "./Destinations.css";
import { destinations } from "../../data";

const Destinations = () => {
  return (
    <div className="destinations-container">
      <h1 className="destinations-header"> Best Destinatons</h1>
      <div className="destinations">
        {destinations.map((destination) => (
          <div className="destinations-item" key={destination.id}>
            <img src={destination.image} alt="" className="destinations-img" />
            <div className="destinations-title">
              <h1>{destination.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
