import "./style.css";
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineGift } from "react-icons/hi2";
import { BsBox2 } from "react-icons/bs";
import { RiResetRightLine } from "react-icons/ri";

const Features = () => {
  return (
    <div className="feature-card">
      <div className="features-section">
        <div className="feature-box">
          <span className="feature-icon">
            <IoTimeOutline />
          </span>
          <h2 className="feature-title">10 minute grocery now</h2>
          <p className="feature-description">
            Lorem ipsum dolor sit amet, Non harum ea dolorum id nam porro magni
            ratione dolore incidunt quae? Atque eius maiores dolores facilis?
          </p>
        </div>

        <div className="feature-box">
          <span className="feature-icon">
            <HiOutlineGift />
          </span>
          <h2 className="feature-title">Best Prices & Offers</h2>
          <p className="feature-description">
            Lorem ipsum dolor sit amet,Non harum ea dolorum id nam porro magni
            ratione dolore incidunt quae? Atque eius maiores dolores facilis?
          </p>
        </div>

        <div className="feature-box">
          <span className="feature-icon">
            <BsBox2 />
          </span>
          <h2 className="feature-title">Wide Assortment</h2>
          <p className="feature-description">
            Lorem ipsum dolor sit amet,Non harum ea dolorum id nam porro magni
            ratione dolore incidunt quae? Atque eius maiores dolores facilis?
          </p>
        </div>

        <div className="feature-box">
          <span className="feature-icon">
            <RiResetRightLine />
          </span>
          <h2 className="feature-title">Easy Returns</h2>
          <p className="feature-description">
            Lorem ipsum dolor sit amet,Non harum ea dolorum id nam porro magni
            ratione dolore incidunt quae? Atque eius maiores dolores facilis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
