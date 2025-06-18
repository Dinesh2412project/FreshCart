

const SellsCard = ({image, category, name, price, originalPrice}) => {
  return (
    <>
    <div className="sells-card">
    <img src={image} alt="img" loading="lazy" />
    <p className="product-category">{category}</p>
    <h2 className="product-name">{name}</h2>
    <div className="price-section">
      <h6 className="current-price">
        ${price} <span className="original-price">${originalPrice}</span>
      </h6>
      <img src="/images/11.png" alt="icon" />
    </div>
    <button className="add-to-cart-btn">+ Add to cart</button>
      <div className="countdown-timer">
    {[
      { value: 1231, label: "days" },
      { value: 8, label: "hours" },
      { value: 46, label: "mins" },
      { value: 33, label: "sec" },
    ].map((item, index) => (
      <div className="time-box" key={index}>
        <h5>{item.value}</h5>
        <h4>{item.label}</h4>
      </div>
    ))}
  </div>
  </div>
    </>
  )
}

export default SellsCard