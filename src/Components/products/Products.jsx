import { useState } from "react";
import Data from "../../assets/Store/Product.json";
import Productcard from "./Productcard";

const Products = () => {
  const [Products] = useState(Data);

  return (
    <div className="popular">
      <h1>popular product</h1>
      <div className="product-cont">
        {Products.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
