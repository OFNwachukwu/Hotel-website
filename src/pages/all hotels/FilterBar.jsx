import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { filterOptions } from "../../data";

const FiltterBar = () => {
  // Correctly initializing useState
  const [open, setOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(250);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [priceRange, setPriceRange] = useState([250, 5000]);
  const [openFilter, setOpenFIlter] = useState(null);

  //  slider change handler
  const handleSliderChange = (e) => {
    const value = Number(e.target.value); // Convert value to a number
    setMinPrice(value); // Example logic: updating minPrice (you can adapt as needed)
    setPriceRange([value, maxPrice]); // Update the range
  };

  const handleFilterClick = (index) => {
    setOpenFIlter(openFilter === index ? null : index);
  };

  return (
    <div className="filter-bar">
      <div className="filter-item">
        <span
          onClick={() => {
            setOpen(!open);
          }}
        >
          Price <FaChevronDown className="filter-icon" />
        </span>

        {open && (
          <div className="filter-options">
            <div className="filter-title">
              <div className="price-filter">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange[0]} // Single value binding
                  onChange={handleSliderChange}
                  className="price-slider"
                />

                <div className="price-range-labels">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>

                <div className="price-inputs">
                  <div className="price-input">
                    Min Price <span>${minPrice}</span>
                  </div>
                  <span>-</span>
                  <div className="price-input">
                    Max Price <span>${maxPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {filterOptions.map((filter, index) => (
        <div className="filter-item" key={index}>
          <span onClick={() => handleFilterClick(index)}>
            {filter.title} <FaChevronDown className="filter-icon" />
          </span>

          {openFilter === index && (
            <div className="filter-options">
              <div className="filter-title">{filter.title}</div>
              {filter.options.map((option) => (
                <label key={option} className="filter-option">
                  <input type="checkbox" />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FiltterBar;
