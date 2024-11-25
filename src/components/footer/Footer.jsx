import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { destinations, info, services } from "../../data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-lists">
        <ul className="footer-list">
          <h2>Destinations</h2>
          {destinations.map((destination) => (
            <li key={destination.id} className="footer-list-item">
              {destination.title}
            </li>
          ))}
        </ul>
        <ul className="footer-list">
          <h2>Information</h2>
          {info.map((item) => (
            <li className="footer-list-item" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
        <ul className="footer-list">
          <h2>Services</h2>
          {services.map((service) => (
            <li className="footer-list-item" key={service.id}>
              {service.title}
            </li>
          ))}
        </ul>

        <ul className="footer-list">
          <h2>Contact</h2>
          <li className="footer-list-item">
            <FaLocationDot /> Street name, City name
          </li>
          <li className="footer-list-item">
            <FaPhoneAlt /> +234-913-106-7862
          </li>
          <li className="footer-list-item">
            <IoMdMail /> frankokudo7@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
