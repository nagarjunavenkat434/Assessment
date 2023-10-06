import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.images[0].large} alt={`Image of ${product.title}`} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>Merchant: {product.merchant.name}</p>
        <p>Rating: {product.rating.rating}</p>
        <p>Total Reviews: {product.rating.total_reviews}</p>
        <p>Price: ${product.price.current_price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
