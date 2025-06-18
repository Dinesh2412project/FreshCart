import './Sells.css';
import '/images/11.png';
import dailyBestSells from '../../assets/Sells.js';
import SellsCard from './SellsCard.jsx';

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


  )

   {/*<div className='daily-sells-section'>
      <h1 className='daily-sells-title'>daily best sells</h1>
      <div className="product-sell-grid">
        <div className="highlighted-product-card">
            <h1 className='highlight-title'>100% Organic Coffee Beans.</h1>
            <p className='highlight-subtext'>Get the best deal before close.</p>
            <button className='shop-now-btn'>shop now-</button>
        </div>
        <div className="sells-card">
            <img src="https://freshcart.codescandy.com/tailwindcss/assets/images/products/product-img-11.jpg" alt="img" />
            <p className='product-category'>tea & coffe,drings</p>
            <h2 className='product-name'>Roast Ground Coffee</h2>
            <div className="price-section">
                <h6 className='current-price'>$13 <span className='original-price'>$18</span></h6>
                <img src="/images/11.png" alt="img" />
            </div>
            <button className='add-to-cart-btn'>+add to chat</button>
            <div className="countdown-timer">
                <div className="time-box">
                    <h5>1231</h5>
                    <h4>days</h4>
                </div>
                <div className="time-box">
                    <h5>8</h5>
                    <h4>hours</h4>
                </div>
                <div className="time-box">
                    <h5>46</h5>
                    <h4>mins</h4>
                </div>
                <div className="time-box">
                    <h5>33</h5>
                    <h4>sec</h4>
                </div>
            </div>
        </div>
        
        <div className="sells-card">
            <img src="https://freshcart.codescandy.com/tailwindcss/assets/images/products/product-img-12.jpg" alt="img" />
            <p className='product-category'>fruits & vegetables</p>
            <h2 className='product-name'>Crushed Tomatoes</h2>
            <div className="price-section">
                <h6 className='current-price'>$13 <span className='original-price'>$18</span></h6>
                <img src="/images/11.png" alt="img" />
            </div>
            <button className='add-to-cart-btn'>+add to chat</button>
            <div className="countdown-timer">
                <div className="time-box">
                    <h5>1231</h5>
                    <h4>days</h4>
                </div>
                <div className="time-box">
                    <h5>8</h5>
                    <h4>hours</h4>
                </div>
                <div className="time-box">
                    <h5>46</h5>
                    <h4>mins</h4>
                </div>
                <div className="time-box">
                    <h5>33</h5>
                    <h4>sec</h4>
                </div>
            </div>
        </div>

        <div className="sells-card">
            <img src="https://freshcart.codescandy.com/tailwindcss/assets/images/products/product-img-13.jpg" alt="img" />
            <p className='product-category'>fruits & vegetables</p>
            <h2 className='product-name'>Golden Pineapple</h2>
            <div className="price-section">
                <h6 className='current-price'>$13 <span className='original-price'>$18</span></h6>
                <img src="/images/11.png" alt="img" />
            </div>
            <button className='add-to-cart-btn'>+add to chat</button>
            <div className="countdown-timer">
                <div className="time-box">
                    <h5>1231</h5>
                    <h4>days</h4>
                </div>
                <div className="time-box">
                    <h5>8</h5>
                    <h4>hours</h4>
                </div>
                <div className="time-box">
                    <h5>46</h5>
                    <h4>mins</h4>
                </div>
                <div className="time-box">
                    <h5>33</h5>
                    <h4>sec</h4>
                </div>
            </div>
        </div>
      </div>
              
            



    </div>...*/}

}

export default Sells