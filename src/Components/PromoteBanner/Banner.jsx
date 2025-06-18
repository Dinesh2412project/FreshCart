import './banner.css';
import PromoCard from './PromoCard';


const promotions = [
  {
    title: 'Fruits & Vegetables',
    offer: 'Get Upto 30% Off',
    className: 'promo-fruits',
  },
  {
    title: 'Freshly Baked Buns',
    offer: 'Get Upto 30% Off',
    className: 'promo-bakery',
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
 )


    {/*<div>
        <div className="promotion-banner">
  <div className="promo-fruits">
   <h2>Fruits & Vegetables</h2>
   <p>Get Upto 30% Off</p>
   <button>shop now</button>
  </div>
  <div className="promo-bakery">
    <h2>Freshly Baked Buns</h2>
   <p>Get Upto 30% Off</p>
   <button>shop now</button>
  </div>
</div>
    </div>...*/}
 
}

export default Banner