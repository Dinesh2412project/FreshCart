import React from 'react'

const PromoCard = ({ title, offer, className }) => {
  return (
    <>
<div className={className}>
    <h2>{title}</h2>
    <p>{offer}</p>
    <button>Shop Now</button>
  </div>
    </>
  )
}

export default PromoCard