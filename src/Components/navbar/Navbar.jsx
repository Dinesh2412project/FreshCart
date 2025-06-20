import "./style.css";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-head">
        <div className="navbar-heading">
          <span>
            <BsCart4 />
          </span>
          <h2>Freshcart</h2>
        </div>
        <div className="navbar-input">
          <input type="text" placeholder="search for products" />
          <button>location</button>
        </div>
        <div className="navbar-icon">
          <span>
            <FaRegHeart />
          </span>
          <span>
            <RiContactsLine className="icons" />
          </span>
          <span>
            <IoBagOutline className="icons" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
