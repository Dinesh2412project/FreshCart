import "./style.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>Vegetables & Fruits</li>
            <li>Vegetables & Fruits</li>
            <li>Bakery & Biscuits</li>
            <li>Atta, rice & dal</li>
            <li>Sauces & spreads</li>
            <li>Organic & gourmet</li>
            <li>Baby care</li>
            <li>Cleaning essentials</li>
            <li>Personal care</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>.</h4>
          <ul>
            <li>Dairy, bread & eggs</li>
            <li>Cold drinks & juices</li>
            <li>Tea, coffee & drinks</li>
            <li>Masala, oil & more</li>
            <li>Chicken, meat & fish</li>
            <li>Paan corner</li>
            <li>Pharma & wellness</li>
            <li>Home & office</li>
            <li>Pet care</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Pet care</h4>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>blog</li>
            <li>help center</li>
            <li>our value</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>For Consumers</h4>
          <ul>
            <li>Payments</li>
            <li>shipping</li>
            <li>Product Returns</li>
            <li>FAQ</li>
            <li>Shop Checkout</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Become a Shopper</h4>
          <ul>
            <li>Shopper Opportunities</li>
            <li>Become a Shopper</li>
            <li>Earnings</li>
            <li>Ideas & Guides</li>
            <li>New Retailers</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Freshcart programs</h4>
          <ul>
            <li>Freshcart programs</li>
            <li>Gift Cards</li>
            <li>Promos & Coupons</li>
            <li>Freshcart Ads</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/*Footer Bottom Section.......*/}

      <div className="footer-bottom">
        <div className="footer-payments">
          <h5>Payment Partners</h5>
          <div className="footer-payment-logos">
            <img
              src="https://freshcart.codescandy.com/tailwindcss/assets/images/payment/amazonpay.svg"
              alt="img"
            />
            <img
              src="https://freshcart.codescandy.com/tailwindcss/assets/images/payment/american-express.svg"
              alt=""
            />
            <img
              src="https://freshcart.codescandy.com/tailwindcss/assets/images/payment//mastercard.svg"
              alt=""
            />
            <img
              src="https://freshcart.codescandy.com/tailwindcss/assets/images/payment/paypal.svg"
              alt=""
            />
            <img
              src="https://freshcart.codescandy.com/tailwindcss/assets/images/payment/visa.svg"
              alt=""
            />
          </div>
        </div>

        <div className="footer-apps">
          <h5>Get deliveries with FreshCart</h5>
          <div className="footer-app-links">
            <img
              src="https://freshcart.codescandy.com/tailwindcss/assets/images/appbutton/appstore-btn.svg"
              alt=""
            />
            <img
              src="https://freshcart.codescandy.com/tailwindcss/assets/images/appbutton/googleplay-btn.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
