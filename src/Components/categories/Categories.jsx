import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import icons from "../../assets/Store/Datas.js";
import CategoriesCard from "./CategoriesCard.jsx";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Categories = () => {
  return (
    <div className="category-section">
      <Carousel responsive={responsive}>
        {icons.map((icon, index) => (
          <CategoriesCard key={index} image={icon.image} label={icon.label} />
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;
