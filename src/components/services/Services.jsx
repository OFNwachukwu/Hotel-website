import { SiAmazonwebservices } from "react-icons/si";
import "./Services.css";
import { services } from "../../data";

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-header">Our Service</h1>
      <div className="services">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <img src={service.image} className="service-image" alt="" />
            <div className="service-content">
              <h1>{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
