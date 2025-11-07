import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaClock, FaTimes, FaWhatsapp, FaStar } from 'react-icons/fa';
import './Card.css';

function Card({ onClose }) {
  const handleCallNow = () => {
    window.location.href = 'tel:+917995369122';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/7995369122?text=Hi!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20interior%20design%20services.', '_blank');
  };

  return (
    <div className="card-overlay">
      <div className="card-container">
        {/* Close Button */}
        <button className="card-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Main Content - Horizontal Layout */}
        <div className="card-content">
          {/* Left Side - Store Image */}
          <div className="card-left">
            <div className="store-image-container">
              <img src="/src/assets/card.jpg" alt="Our Store" className="store-image" />
              <div className="image-overlay">
              </div>
            </div>
          </div>

          {/* Right Side - Store Info */}
          <div className="card-right">
            {/* Store Header */}
            <div className="store-header">
              <img src="/src/assets/logo.png" alt="Logo" className='store-name'/>
            </div>
            
            {/* Action Buttons */}
            <div className="card-actions">
              <button className="action-btn primary" onClick={handleCallNow}>
                <FaPhone className="btn-icon" />
                Call Now
              </button>
              <button className="action-btn secondary" onClick={handleWhatsApp}>
                <FaWhatsapp className="btn-icon" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;