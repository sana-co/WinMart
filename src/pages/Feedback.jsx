import React, { useState } from 'react';
import RatingStars from '../components/RatingStars';
import { validateForm } from '../utils/helpers';
import { useApp } from '../context/AppContext';
import './Feedback.css';

const Feedback = () => {
  const { addToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: 'product-quality',
    rating: 5,
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const feedbackTypes = [
    { value: 'product-quality', label: 'Product Quality' },
    { value: 'customer-service', label: 'Customer Service' },
    { value: 'shipping', label: 'Shipping & Delivery' },
    { value: 'website', label: 'Website Experience' },
    { value: 'pricing', label: 'Pricing & Value' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData, ['name', 'email', 'message']);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    addToast('Thank you for your feedback! We appreciate your input.', 'success');
    setFormData({
      name: '',
      email: '',
      feedbackType: 'product-quality',
      rating: 5,
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="feedback-page">
      {/* Page Header */}
      <div className="feedback-header">
        <div className="container">
          <h1>Share Your Feedback</h1>
          <p>Help us improve by sharing your experience with WinMart Fashion</p>
        </div>
      </div>

      <div className="container">
        <div className="feedback-wrapper">
          {/* Feedback Form */}
          <div className="feedback-form-container">
            <form onSubmit={handleSubmit} className="feedback-form">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Feedback Type */}
              <div className="form-group">
                <label htmlFor="feedbackType">What is your feedback about? *</label>
                <select
                  id="feedbackType"
                  name="feedbackType"
                  value={formData.feedbackType}
                  onChange={handleChange}
                  className="form-input"
                >
                  {feedbackTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating */}
              <div className="form-group">
                <label>Rate Your Experience *</label>
                <div className="rating-input">
                  <RatingStars
                    rating={formData.rating}
                    onChange={handleRatingChange}
                    interactive={true}
                    size="lg"
                  />
                  <span className="rating-label">
                    {['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][formData.rating - 1]}
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Your Feedback *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  placeholder="Please share your detailed feedback..."
                  rows="8"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
                <small className="char-count">
                  {formData.message.length}/1000
                </small>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </form>

            {/* Benefits Section */}
            <div className="feedback-benefits">
              <h3>Why Share Your Feedback?</h3>
              <ul>
                <li>✓ Help us improve our products and services</li>
                <li>✓ Your voice matters to our team</li>
                <li>✓ Exclusive rewards for detailed feedback</li>
                <li>✓ Chance to win shopping vouchers</li>
                <li>✓ Directly influence future offerings</li>
              </ul>
            </div>
          </div>

          {/* Sidebar Info */}
          <aside className="feedback-sidebar">
            <div className="feedback-card">
              <h3>📊 Recent Feedback</h3>
              <p>We've received feedback from over 5,000+ customers this month!</p>
              <div className="feedback-stats">
                <div className="stat">
                  <span className="stat-label">Positive Feedback</span>
                  <span className="stat-value">94%</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Avg Rating</span>
                  <span className="stat-value">4.7/5</span>
                </div>
              </div>
            </div>

            <div className="feedback-card">
              <h3>🎁 Feedback Rewards</h3>
              <ul>
                <li>⭐ 5-star: 500 bonus points</li>
                <li>⭐⭐⭐⭐ 4-star: 250 bonus points</li>
                <li>🎯 Monthly draw: Win ₹5,000 voucher</li>
                <li>🏆 Top reviewer: Get exclusive badge</li>
              </ul>
            </div>

            <div className="feedback-card">
              <h3>💬 Common Feedback Topics</h3>
              <ul>
                <li>Product Quality & Fit</li>
                <li>Shipping Speed</li>
                <li>Customer Support</li>
                <li>Website Usability</li>
                <li>Price Competitiveness</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
