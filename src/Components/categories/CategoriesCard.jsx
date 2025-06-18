

const CategoriesCard = ({ image, label }) => {
  return (
    <div>
        <div className='category-card'>
    <img src={image} alt={label} />
    <p>{label}</p>
  </div>
    </div>

  )
}

export default CategoriesCard