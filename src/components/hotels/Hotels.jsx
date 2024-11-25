import React from "react";
import "./Hotels.css";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Hotels = ({ hotels, headimg }) => {
  const navigate = useNavigate();

  const handleViewDetail = (id) => {
    navigate(`/hotels/${id}`);
  };

  // Destructure props correctly
  return (
    <div className="hotels-container">
      <h1 className="hotels-header">{headimg}</h1>
      <div className="hotels">
        {hotels.map(
          (
            hotel // Correctly wrap map in curly braces
          ) => (
            <div className="hotel-item" key={hotel.id}>
              <img
                src={hotel.image}
                className="hotel-image"
                alt=""
                onClick={() => handleViewDetail(hotel.id)}
              />
              <div className="hotel-content">
                <span className="hotel-location">
                  <CiLocationOn className="icon" /> {hotel.location}
                </span>
                <span
                  className="hotel-name"
                  onClick={() => handleViewDetail(hotel.id)}
                >
                  {hotel.name}
                </span>
                <div className="hotel-rate">
                  <button>{hotel.rate}</button>
                  <span>{hotel.review}</span>
                </div>
                <span className="hotel-price">
                  <span>From</span> ${hotel.price} <span>per night</span>
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Hotels;
