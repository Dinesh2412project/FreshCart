import Carousel from "react-bootstrap/Carousel";
import Slides from '../../assets/Store/HeadingData.js';
import HeadingCard from "../../../src/Components/head/HeadingCard.jsx";
import "./style.css";

const Head = () => {
  return (
    <div className="head-section">
      <Carousel data-bs-theme="dark">
        {Slides.map((slide, idx) => (
          <HeadingCard key={idx} slide= {slide}/>
        ))}
      </Carousel>
    </div>
  );

   {
     /* <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carousel-imag"
          src="https://png.pngtree.com/thumb_back/fw800/background/20240415/pngtree-fresh-vegetables-fruits-and-eggs-on-white-table-in-home-modern-image_15654865.jpg"
          alt="Second slide"
        />
        <div className="carousel-caption">
            <h6 className="promo-tagline">for shiping -order over $100</h6>
            <h1 className="carousel-heading">for shipping on orders over $100</h1>
            <p className="carousel-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia sint quia libero corporis!</p>
            <button className='carousel-button'>shop now</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-imag"
          src="https://t3.ftcdn.net/jpg/14/48/69/58/360_F_1448695843_BFEZO30DYBk2banlgmy2XtJ0cxmqyt3A.jpg"
          alt="Second slide"
        />
        <div className="carousel-caption">
            <h6 className='promo-tagline'>for shiping -order over $100</h6>
            <h1 className='carousel-heading'>supre market for fresh grocery</h1>
            <p className='carousel-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia sint quia libero corporis!</p>
            <button className='carousel-button'>shop now</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-imag"
          src="https://t4.ftcdn.net/jpg/02/25/39/25/360_F_225392553_24EMhQgs8YPwkONYflqbmExF4cmmTOIM.jpg"
          alt="Third slide"
        />
        <div className="carousel-caption">
            <h6 className='promo-tagline'>for shiping -order over $100</h6>
            <h1 className='carousel-heading'>for shipping on orders over <span className="highlight">$100</span></h1>
            <p className='carousel-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia sint quia libero corporis!</p>
            <button className='carousel-button'>shop now</button>
        </div>
      </Carousel.Item>
    </Carousel>...*/
  }
};

export default Head;
