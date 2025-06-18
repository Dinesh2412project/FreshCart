import './Products.css';

const Productcard = ({product}) => {
  return (
    
        <div className="product-card">
    <div className='product-card__content'>
        <img src={product.pic}className='product-card__image' alt="img" />
        <p className="product-card__category">{product.type}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__rating">
            <img src="images/11.png" className='product-card__star-icon' alt="img" />
            <span className='product-card__rating-value'>4.5(143)</span>
        </div>
        <div className="product-card__price-section">
            <div className="product-card__price">
                <span className='product-card__current-price'>$18</span>
                <h6 className='product-card__old-price'>$24</h6>
            </div>
            <button className='product-card__add-button'>+add</button>
        </div>
    </div>
    </div>
  )
}

export default Productcard