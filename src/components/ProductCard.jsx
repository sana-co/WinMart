import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatPrice, calculateDiscount } from '../utils/helpers';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView }) => {
  const { isInWishlist, toggleWishlist } = useApp();
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);

  const discount = calculateDiscount(product.originalPrice, product.price);
  const inWishlist = isInWishlist(product.id);

  const handleToggleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      {/* Image Section */}
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        {discount > 0 && <div className="product-discount">{discount}% OFF</div>}
        
        <div className="product-overlay">
          <button 
            className="product-btn quick-view-btn"
            onClick={() => onQuickView(product)}
          >
            Quick View
          </button>
        </div>

        <button
          className={`wishlist-btn ${inWishlist ? 'active' : ''}`}
          onClick={handleToggleWishlist}
          aria-label="Toggle wishlist"
        >
          <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        {/* Rating */}
        <div className="product-rating">
          <span className="stars">
            {'⭐'.repeat(Math.floor(product.rating))}
          </span>
          <span className="rating-text">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="product-price">
          <span className="current-price">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Color Options */}
        {product.colors && product.colors.length > 0 && (
          <div className="product-colors">
            {product.colors.map((color) => (
              <button
                key={color}
                className={`color-btn ${selectedColor === color ? 'selected' : ''}`}
                onClick={() => setSelectedColor(color)}
                title={color}
              >
                {color.substring(0, 1)}
              </button>
            ))}
          </div>
        )}

        {/* Size Options */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="product-sizes">
            {product.sizes.slice(0, 3).map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
            {product.sizes.length > 3 && <span className="more-sizes">+{product.sizes.length - 3}</span>}
          </div>
        )}

        <Link to={`/product/${product.id}`} className="product-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
