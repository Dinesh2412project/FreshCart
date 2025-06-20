import Carousel from "react-bootstrap/Carousel";

const HeadingCard = ({slide}) => {
  return (
  <>
    <Carousel.Item>
      <img className="carousel-imag" src={slide.imgSrc} alt="Carousel slide" />
      <div className="carousel-caption">
        <h6 className="promo-tagline">{slide.tagline}</h6>
        <h1 className="carousel-heading">{slide.heading}</h1>
        <p className="carousel-description">{slide.description}</p>
        <button className="carousel-button">Shop Now</button>
      </div>
    </Carousel.Item>
  </>
  )
};

export default HeadingCard
