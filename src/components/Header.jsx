import { useEffect, useState } from 'react';
import { Menu, Moon, Search, Sun, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('winmart-theme');
    if (savedTheme) return savedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('winmart-theme', theme);
  }, [theme]);

  const isActive = (path) => (location.pathname === path ? 'active' : '');
  const closeMenu = () => setIsMenuOpen(false);
  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();

    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
    } else {
      navigate('/shop');
    }

    closeMenu();
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container header-shell">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/winmart-logo.jpg" alt="WinMart Fashion" className="logo-image" />
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-item ${isActive('/')}`} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/shop" className={`nav-item ${isActive('/shop')}`} onClick={closeMenu}>
            Shop
          </Link>

          <div className="nav-item-group">
            <span className="nav-item dropdown-trigger">Categories</span>
            <div className="dropdown-menu">
              <Link to="/shop/womens" className="dropdown-item" onClick={closeMenu}>
                Women's Wear
              </Link>
              <Link to="/shop/mens" className="dropdown-item" onClick={closeMenu}>
                Men's Wear
              </Link>
              <Link to="/shop/accessories" className="dropdown-item" onClick={closeMenu}>
                Accessories
              </Link>
            </div>
          </div>

          <Link to="/about" className={`nav-item ${isActive('/about')}`} onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className={`nav-item ${isActive('/contact')}`} onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/feedback" className={`nav-item ${isActive('/feedback')}`} onClick={closeMenu}>
            Feedback
          </Link>
        </nav>

        <div className="header-actions">
          <form className="header-search" onSubmit={handleSearch}>
            <Search size={18} aria-hidden="true" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search styles"
              aria-label="Search products"
            />
          </form>
          <button
            className="header-icon-btn theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
