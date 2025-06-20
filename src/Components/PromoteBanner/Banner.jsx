import "./style.css";
import PromoCard from "./PromoCard";

const promotions = [
  {
    title: "Fruits & Vegetables",
    offer: "Get Upto 30% Off",
    className: "promo-fruits",
  },
  {
    title: "Freshly Baked Buns",
    offer: "Get Upto 30% Off",
    className: "promo-bakery",
  },
];

const Banner = () => {
  return (
    <div className="promotion-banner">
      {promotions.map((promo, index) => (
        <PromoCard
          key={index}
          title={promo.title}
          offer={promo.offer}
          className={promo.className}
        />
      ))}
    </div>
  );
};

export default Banner;
