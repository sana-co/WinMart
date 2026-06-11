import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { formatPrice } from '../utils/helpers';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useApp();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-empty">
        <div className="container">
          <div className="wishlist-empty-content">
            <Heart size={44} />
            <h1>Your Wishlist is Empty</h1>
            <p>Save your favorite pieces here while you browse.</p>
            <Link to="/shop" className="btn btn-primary">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="wishlist-header">
          <div>
            <h1>Wishlist</h1>
            <p>{wishlist.length} saved {wishlist.length === 1 ? 'item' : 'items'}</p>
          </div>
          <Link to="/shop" className="btn btn-outline">
            Continue Browsing
          </Link>
        </div>

        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <article key={product.id} className="wishlist-card">
              <Link to={`/product/${product.id}`} className="wishlist-image">
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="wishlist-info">
                <div>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
                <div className="wishlist-card-footer">
                  <span>{formatPrice(product.price)}</span>
                  <button
                    type="button"
                    className="wishlist-remove"
                    onClick={() => toggleWishlist(product)}
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
