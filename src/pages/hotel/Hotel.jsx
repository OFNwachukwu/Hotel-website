import React, { useState } from "react";
import "./Hotel.css";
import { useParams } from "react-router-dom";
import { allHotels, facilities, rooms } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiDoubleStreetLights } from "react-icons/gi";
import { MdPool } from "react-icons/md";
import { TbParkingCircle } from "react-icons/tb";
import { FaCity } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
import {
  FaCircleArrowLeft,
  FaCircleArrowRight,
  FaCircleXmark,
} from "react-icons/fa6";

const Hotel = () => {
  const [open, setOpen] = useState(false); // Manages slider visibility
  const [sliderNumber, setSliderNumber] = useState(0); // Current image index in slider

  const { id } = useParams(); // Extract the hotel ID from route params
  const hotel = allHotels.find((hotel) => hotel.id === parseInt(id)); // Find hotel by ID

  // Handle cases where hotel or data is missing
  if (!hotel || !rooms || !facilities) {
    return <div>Hotel not found or data is missing</div>;
  }

  const handleOpen = (index) => {
    setSliderNumber(index); // Set the active image index
    setOpen(true); // Open the slider
  };

  const handleMove = (direction) => {
    const totalImages = rooms.length; // Get the total number of images
    let newSliderNumber = sliderNumber;

    if (direction === "left") {
      newSliderNumber = sliderNumber === 0 ? totalImages - 1 : sliderNumber - 1;
    } else if (direction === "right") {
      newSliderNumber = sliderNumber === totalImages - 1 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSliderNumber); // Update the slider image
  };

  return (
    <div>
      <Navbar />

      <div className="hotel-container">
        {open && (
          <div className="slider">
            <FaCircleXmark className="close" onClick={() => setOpen(false)} />
            <FaCircleArrowLeft
              className="arrow"
              onClick={() => handleMove("left")}
            />
            <div className="slider-wrapper">
              <img
                src={rooms[sliderNumber].image}
                alt={`Room ${sliderNumber + 1}`}
                className="slider-img"
              />
            </div>
            <FaCircleArrowRight
              className="arrow"
              onClick={() => handleMove("right")}
            />
          </div>
        )}

        <div className="hotel-wrapper">
          <h1 className="hotel-title">{hotel.title}</h1>
          <div className="hotel-location">
            <FaMapMarkerAlt />
            <span>{hotel.location}</span>
          </div>

          <span className="hotel-distance">
            Excellent location - 5000m from center
          </span>
          <span className="hotel-price">
            Enjoy a comfortable stay starting at ${hotel.price} per night
          </span>

          <div className="hotel-images">
            {rooms.map((room, index) => (
              <div className="hotel-images-wrapper" key={index}>
                <img
                  src={room.image}
                  className="hotel-img"
                  alt={`Room ${index + 1}`}
                  onClick={() => handleOpen(index)}
                />
              </div>
            ))}
          </div>

          <div className="hotel-details">
            <div className="hotel-details-text">
              <h1 className="hotel-title">About this Hotel</h1>
              <p>
                Accommodations in these hotels are a testament to comfort and
                style, featuring plush bedding, spacious layouts, and
                state-of-the-art amenities.
              </p>
              <p>
                Dining at a five-star hotel is a culinary journey, offering
                gourmet dishes crafted by renowned chefs.
              </p>
              <p>
                Beyond accommodation and dining, these hotels excel in amenities
                like infinity pools, rejuvenating spas, and cutting-edge fitness
                centers.
              </p>
              <p>
                In essence, a five-star hotel is more than a place to stay—it is
                an escape into luxury where every moment is designed to be
                extraordinary.
              </p>

              <div className="hotel-facilities">
                <h1 className="hotel-facilities-title">Hotel Facilities</h1>
                <div className="facilities">
                  {facilities.map((facility) => (
                    <div className="facility" key={facility.id}>
                      <span className="facilities-icon">{facility.icon}</span>
                      <span>{facility.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hotel-highlights">
              <h1>Hotel Highlights</h1>
              <h4>Perfect for a 4-night stay!</h4>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent score of 9.5!
              </span>
              <h4>Breakfast Info</h4>
              <span>French, Protein-packed, Savory</span>
              <h4>Room With</h4>
              <ul>
                <li>
                  <GiDoubleStreetLights /> Quick street view
                </li>
                <li>
                  <MdPool /> Pool with a view
                </li>
                <li>
                  <FaCity /> City view
                </li>
                <li>
                  <TbParkingCircle /> Free Parking
                </li>
              </ul>
              <button>Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hotel;
