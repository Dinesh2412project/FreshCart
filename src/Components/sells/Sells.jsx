import "./style.css";
import "/images/11.png";
import dailyBestSells from "../../assets/Sells.js";
import SellsCard from "./SellsCard.jsx";

const Sells = () => {
  return (
    <div className="daily-sells-section">
      <h1 className="daily-sells-title">Daily Best Sells</h1>

      <div className="product-sell-grid">
        <div className="highlighted-product-card">
          <h1 className="highlight-title">100% Organic Coffee Beans.</h1>
          <p className="highlight-subtext">Get the best deal before close.</p>
          <button className="shop-now-btn">Shop now</button>
        </div>

        {dailyBestSells.map((product, index) => (
          <SellsCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Sells;
