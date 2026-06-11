import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { validateForm } from '../utils/helpers';
import { contactInfo } from '../data/mockData';
import { useApp } from '../context/AppContext';
import './Contact.css';

const Contact = () => {
  const { addToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const newErrors = validateForm(formData, ['name', 'email', 'subject', 'message']);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    addToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Send us your message!</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content flex gap-lg">
          {/* Contact Info */}
          <div className="contact-info-section">
            <h2>Get in Touch</h2>

            {/* Email */}
            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                <p className="response-time">We respond within 24 hours</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                <p className="response-time">Available during business hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h3>Address</h3>
                <p>{contactInfo.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-card">
              <div className="contact-icon">
                <Clock size={24} />
              </div>
              <div className="contact-details">
                <h3>Business Hours</h3>
                <p>
                  <strong>Weekdays:</strong> {contactInfo.businessHours.weekday}
                </p>
                <p>
                  <strong>Weekends:</strong> {contactInfo.businessHours.weekend}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
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

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="shipping">Shipping Issue</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership Opportunity</option>
                </select>
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  placeholder="Your message..."
                  rows="6"
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="map-section">
          <h2>Find Us on the Map</h2>
          <div className="map-placeholder">
            <iframe
              title="WinMart Fashion Location"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 'var(--border-radius-lg)' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890123"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
