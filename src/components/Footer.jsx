import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '../data/mockData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-section">
              <h3>About WinMart Fashion</h3>
              <p>
                Your one-stop destination for trendy, high-quality fashion at unbeatable prices. We believe in making style accessible to everyone.
              </p>
              <div className="social-links">
                <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span>f</span>
                </a>
                <a href={contactInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span>ig</span>
                </a>
                <a href={contactInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <span>x</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/feedback">Feedback</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-section">
              <h3>Categories</h3>
              <ul>
                <li><Link to="/shop/womens">Women's Wear</Link></li>
                <li><Link to="/shop/mens">Men's Wear</Link></li>
                <li><Link to="/shop/accessories">Accessories</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="footer-section">
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns & Exchanges</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3>Contact Us</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <Mail size={18} />
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
                <div className="contact-item">
                  <Phone size={18} />
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
              <div className="business-hours">
                <p><strong>Business Hours</strong></p>
                <p>Weekdays: {contactInfo.businessHours.weekday}</p>
                <p>Weekends: {contactInfo.businessHours.weekend}</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-credits">
              <p>&copy; 2024 WinMart Fashion. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
