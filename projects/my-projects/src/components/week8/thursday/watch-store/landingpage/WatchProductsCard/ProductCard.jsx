function ProductCard({ image, name, price, inStock, isNew }) {
  return (
    <div className="product-card">

      {isNew && <span className="badge">New Arrival</span>}

      <img src={image} alt={name} />

      <h3>{name}</h3>
      <p className="price">${price}</p>

      {inStock ? (
        <p className="in-stock">In Stock</p>
      ) : (
        <p className="out-of-stock">Out of Stock</p>
      )}

    </div>
  )
}

export default ProductCard