import "./Newsletter.css";
import discover from "../../assets/discover.jpg";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-wrapper">
        <div className="newsletter-image">
          <img src={discover} alt="" />
        </div>
        <div className="news-content">
          <h1>Explore the world with us</h1>
          <p>suscribe to see secret deals</p>
          <div className="input-container">
            <input type="text" placeholder="Enter your email" />
            <button>Suscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
