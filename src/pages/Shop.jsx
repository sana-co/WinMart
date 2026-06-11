import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import { products } from '../data/mockData';
import { filterProducts, sortProducts } from '../utils/helpers';
import './Shop.css';

const Shop = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    colors: [],
    category: category || null,
  });

  // Get unique colors
  const allColors = [...new Set(products.flatMap((p) => p.colors))];

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    let result = filterProducts(products, { ...filters, search: searchQuery });
    return sortProducts(result, sortBy);
  }, [filters, sortBy, searchQuery]);

  const handleColorToggle = (color) => {
    setFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 10000,
      colors: [],
      category: category || null,
    });
  };

  return (
    <div className="shop">
      {/* Page Header */}
      <div className="shop-header">
        <div className="container">
          <h1>{category ? `Shop ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Shop All Products'}</h1>
          <p>{filteredProducts.length} products found</p>
        </div>
      </div>

      <div className="shop-container">
        <div className="container flex gap-lg">
          {/* Sidebar Filters */}
          <aside className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
            <div className="filters-header">
              <h3>Filters</h3>
              <button className="close-filters" onClick={() => setShowFilters(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Price Filter */}
            <div className="filter-group">
              <h4>Price Range</h4>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      minPrice: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="price-input"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      maxPrice: parseInt(e.target.value) || 10000,
                    }))
                  }
                  className="price-input"
                />
              </div>
            </div>

            {/* Color Filter */}
            <div className="filter-group">
              <h4>Colors</h4>
              <div className="color-filter-group">
                {allColors.map((color) => (
                  <label key={color} className="color-checkbox">
                    <input
                      type="checkbox"
                      checked={filters.colors.includes(color)}
                      onChange={() => handleColorToggle(color)}
                    />
                    <span>{color}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="btn-reset" onClick={handleResetFilters}>
              Reset Filters
            </button>
          </aside>

          {/* Main Content */}
          <main className="shop-content">
            {/* Toolbar */}
            <div className="shop-toolbar">
              <button
                className="toggle-filters-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                Filters
              </button>

              <div className="sort-dropdown">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="no-products">
                <p>No products found. Try adjusting your filters.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        title={quickViewProduct?.name}
      >
        {quickViewProduct && (
          <div className="quick-view-content">
            <img src={quickViewProduct.image} alt={quickViewProduct.name} />
            <div className="quick-view-info">
              <p className="quick-view-price">₹{quickViewProduct.price}</p>
              <p className="quick-view-description">{quickViewProduct.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Shop;
