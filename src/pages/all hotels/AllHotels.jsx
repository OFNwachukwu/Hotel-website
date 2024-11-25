import "./AllHotels.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import FiltterBar from "./FilterBar";
import { allHotels } from "../../data";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsGrid3X2Gap } from "react-icons/bs";
import Hotels from "../../components/hotels/Hotels";
import Footer from "../../components/footer/Footer";

const AllHotel = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FiltterBar />
      <div className="allhotels-items">
        <h2 className="allhotel-heading">{allHotels.lenght} Hotel found</h2>
        <div className="allhotels-icon">
          <HiOutlineSquares2X2 />
          <BsGrid3X2Gap />
        </div>
      </div>

      <Hotels hotels={allHotels} />
      <Footer />
    </div>
  );
};

export default AllHotel;
