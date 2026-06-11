import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import RatingStars from '../components/RatingStars';
import { useApp } from '../context/AppContext';
import { products, reviews } from '../data/mockData';
import { formatPrice, calculateDiscount } from '../utils/helpers';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const productReviews = reviews.filter((r) => r.productId === parseInt(productId));
  const { isInWishlist, toggleWishlist } = useApp();

  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  const discount = calculateDiscount(product.originalPrice, product.price);
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="product-detail">
      {/* Breadcrumb */}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <div className="product-detail-container">
        <div className="container flex gap-lg">
          {/* Image Section */}
          <div className="product-images">
            <div className="main-image">
              <img src={mainImage} alt={product.name} />
              {discount > 0 && <div className="discount-badge">{discount}% OFF</div>}
            </div>
            <div className="thumbnail-images">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="product-details">
            <h1>{product.name}</h1>

            {/* Rating */}
            <div className="rating-section">
              <RatingStars rating={product.rating} />
              <span className="review-count">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="price-section">
              <span className="current-price">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <span className="original-price">{formatPrice(product.originalPrice)}</span>
              )}
              <span className="discount-percent">{discount}% OFF</span>
            </div>

            {/* Description */}
            <p className="description">{product.description}</p>

            {/* Material Info */}
            <div className="info-section">
              <p>
                <strong>Material:</strong> {product.material}
              </p>
            </div>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="selection-section">
                <label>
                  <strong>Color:</strong>
                </label>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="selection-section">
                <label>
                  <strong>Size:</strong>
                </label>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                className={`btn btn-primary btn-lg btn-wishlist-main ${inWishlist ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
              >
                <Heart size={20} fill={inWishlist ? 'currentColor' : 'none'} />
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            {/* Additional Info */}
            <div className="additional-info">
              <div className="info-item">
                <span className="info-label">✓</span>
                <span>New arrivals added weekly</span>
              </div>
              <div className="info-item">
                <span className="info-label">✓</span>
                <span>Easy Returns & Exchanges</span>
              </div>
              <div className="info-item">
                <span className="info-label">✓</span>
                <span>Save favorites to your wishlist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="container mt-lg">
          <div className="reviews-section">
            <h2>Customer Reviews</h2>
            {productReviews.length > 0 ? (
              <div className="reviews-list">
                {productReviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <strong>{review.author}</strong>
                      <RatingStars rating={review.rating} size="sm" />
                    </div>
                    <p className="review-text">{review.text}</p>
                    <small className="review-date">{review.date}</small>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-reviews">No reviews yet. Be the first to review this product!</p>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="container mt-lg">
          <div className="related-section">
            <h2>Related Products</h2>
            <div className="related-grid">
              {products
                .filter(
                  (p) =>
                    p.category === product.category &&
                    p.subcategory === product.subcategory &&
                    p.id !== product.id
                )
                .slice(0, 4)
                .map((related) => (
                  <Link
                    key={related.id}
                    to={`/product/${related.id}`}
                    className="related-card"
                  >
                    <img src={related.image} alt={related.name} />
                    <h4>{related.name}</h4>
                    <p className="related-price">{formatPrice(related.price)}</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
