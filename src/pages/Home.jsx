import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import { products, testimonials } from '../data/mockData';
import './Home.css';

const Home = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const bestSellers = products.slice(2, 8);

  const categories = [
    {
      name: "Women's Clothing & Accessories",
      to: '/shop/womens',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&h=520&fit=crop',
    },
    {
      name: "Men's Clothing & Accessories",
      to: '/shop/mens',
      image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=900&h=520&fit=crop',
    },
    {
      name: 'Kids and Babies',
      to: '/shop?search=kids',
      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=900&h=520&fit=crop',
    },
    {
      name: 'Home Textiles',
      to: '/shop?search=textiles',
      image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=900&h=520&fit=crop',
    },
    {
      name: 'Bags and Luggage',
      to: '/shop/accessories',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&h=520&fit=crop',
    },
    {
      name: 'Footwear',
      to: '/shop?search=footwear',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=520&fit=crop',
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Fashion Your Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Discover the latest trends in style and comfort with WinMart Fashion
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-highlights"
          >
            <span>New arrivals weekly</span>
            <span>Islandwide delivery</span>
            <span>Easy exchanges</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-cta"
          >
            <Link to="/shop" className="btn btn-primary btn-lg">
              Shop Now <ChevronRight size={20} aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              Our Story
            </Link>
          </motion.div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=600&fit=crop"
            alt="Fashion Banner"
          />
          <div className="hero-image-badge">
            <Sparkles size={18} aria-hidden="true" />
            Fresh 2026 edit
          </div>
        </div>
      </section>

      <section className="categories-section py-lg">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.to}
                className="category-card"
              >
                <img src={category.image} alt="" aria-hidden="true" />
                <span className="category-name">{category.name}</span>
                <span className="category-arrow">
                  <ChevronRight size={20} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="latest-section py-lg">
        <div className="container">
          <div className="latest-header">
            <h2 className="latest-title">Shop the Latest Styles</h2>
            <div className="latest-actions">
              <Link to="/shop" className="latest-shop-link">Shop All</Link>
              <button className="latest-arrow" type="button" aria-label="Previous best sellers">
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button className="latest-arrow" type="button" aria-label="Next best sellers">
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="products-grid latest-grid">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="story-section py-lg">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>About WinMart Fashion</h2>
              <p>
                Founded in 2018, WinMart Fashion is dedicated to bringing the latest
                trends and quality fashion to everyone. Our mission is to empower
                people through style, confidence, and affordability.
              </p>
              <p>
                We carefully curate our collection to ensure every piece meets our
                high standards for quality, design, and comfort. From casual wear to
                formal attire, we have something for everyone.
              </p>
              <ul className="story-list">
                <li><CheckCircle2 size={18} aria-hidden="true" /> Premium Quality Products</li>
                <li><CheckCircle2 size={18} aria-hidden="true" /> Fast & Reliable Shipping</li>
                <li><CheckCircle2 size={18} aria-hidden="true" /> 24/7 Customer Support</li>
                <li><CheckCircle2 size={18} aria-hidden="true" /> Easy Returns & Exchanges</li>
              </ul>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1552902917-48416bd8575a?w=500&h=500&fit=crop"
                alt="Our Story"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section py-lg">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-content">
            <h2>Refresh Your Wardrobe With WinMart Fashion</h2>
            <p>Explore everyday styles, statement pieces, and accessories in one place.</p>
            <Link to="/shop" className="btn btn-white">
              Shop Now <ChevronRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        title={quickViewProduct?.name}
      >
        {quickViewProduct && (
          <div className="quick-view-content">
            <img src={quickViewProduct.image} alt={quickViewProduct.name} />
            <div className="quick-view-info">
              <p className="quick-view-price">Rs. {quickViewProduct.price}</p>
              <p className="quick-view-description">{quickViewProduct.description}</p>
              <Link to={`/product/${quickViewProduct.id}`} className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Home;
