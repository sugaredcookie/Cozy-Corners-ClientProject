import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FinalEstimate.css';
import { 
  FaWhatsapp, 
  FaPhone, 
  FaCheck, 
  FaArrowLeft, 
  FaHome,
  FaSun,
  FaMoon
} from 'react-icons/fa';

const FinalEstimate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = React.useState(false);
  
  const selectedOptions = location.state?.selectedOptions;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (!selectedOptions || !selectedOptions.floorPlan) {
      navigate('/estimate');
    }
  }, [selectedOptions, navigate]);

  if (!selectedOptions || !selectedOptions.floorPlan) {
    return (
      <div className="final-estimate-page">
        <div className="final-estimate-container">
          <div className="loading-message">
            Loading your selections...
          </div>
        </div>
      </div>
    );
  }

  const floorPlans = [
    {
      id: '1bhk',
      name: '1 BHK',
      size: '500-700 sq.ft',
      bedrooms: 1
    },
    {
      id: '2bhk',
      name: '2 BHK',
      size: '800-1000 sq.ft',
      bedrooms: 2
    },
    {
      id: '3bhk',
      name: '3 BHK',
      size: '1200-1500 sq.ft',
      bedrooms: 3
    },
    {
      id: '4bhk',
      name: '4 BHK',
      size: '1800-2200 sq.ft',
      bedrooms: 4
    }
  ];

  const requirementsConfig = {
    kitchen: { label: 'Kitchen' },
    wardrobe: { label: 'Wardrobe' },
    entertainmentUnit: { label: 'Entertainment Unit' },
    studyUnit: { label: 'Study Unit' },
    crockeryUnit: { label: 'Crockery Unit' },
    tvUnit: { label: 'TV Unit' },
    storageUnit: { label: 'Storage Unit' }
  };

  const getTotalItems = () => {
    return Object.values(selectedOptions.requirements).reduce((sum, count) => sum + count, 0);
  };

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);


  const handleContactUs = () => {
    const selectedPlan = floorPlans.find(fp => fp.id === selectedOptions.floorPlan);
    let message = `Hello! I'm interested in interior design services.\n\n`;
    message += `*Floor Plan:* ${selectedPlan?.name}\n`;
    message += `*Size:* ${selectedPlan?.size}\n`;
    message += `*Bedrooms:* ${selectedPlan?.bedrooms}\n\n`;
    message += `*Requirements:*\n`;
    
    Object.entries(selectedOptions.requirements).forEach(([type, count]) => {
      if (count > 0) {
        const label = requirementsConfig[type].label;
        message += `• ${label}: ${count}\n`;
      }
    });
    
    message += `\nTotal Items: ${getTotalItems()}\n`;
    message += `Please contact me with more information.`;

    const whatsappUrl = `https://wa.me/7995369122?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+917995369122';
  };

  const handleBackToEstimate = () => {
    navigate('/estimate', { state: { selectedOptions } });
  };

  const selectedPlan = floorPlans.find(fp => fp.id === selectedOptions.floorPlan);

  return (
    <div className={`final-estimate-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo" onClick={handleGoHome} style={{ cursor: 'pointer' }} src='/src/assets/logo.png'/>
          <ul className="nav-links">
            <li><a href="#home" onClick={handleGoHome}>Home</a></li>
            <li><a href="#about" onClick={handleGoHome}>About</a></li>
            <li><a href="#process" onClick={handleGoHome}>Process</a></li>
            <li><a href="#services" onClick={handleGoHome}>Services</a></li>
            <li><a href="#key-features" onClick={handleGoHome}>Features</a></li>
            <li><a href="#contact" onClick={handleGoHome}>Contact</a></li>
          </ul>
          <div className="nav-actions">
            <button className="estimate-btn" onClick={handleGoHome}>
              <FaHome className="btn-icon" />
              Back to Home
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Background */}
      <div className="final-estimate-background">
        <div 
          className="final-estimate-bg-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')`
          }}
        ></div>
        <div className="final-estimate-overlay"></div>
      </div>

      <div className="final-estimate-container">
        {/* Header */}
        <div className="final-estimate-header">
          <div className="success-badge">
            <FaCheck className="success-icon" />
            Selections Ready!
          </div>
          <h1 className="final-estimate-title">
            Your Design Preferences
          </h1>
          <p className="final-estimate-subtitle">
            Share your requirements with us for a personalized quote
          </p>
        </div>

        {/* Main Content */}
        <div className="final-estimate-content">
          {/* Selection Summary */}
          <div className="selection-summary-card">
            <h3>Your Selections</h3>
            
            <div className="summary-section">
              <h4>Floor Plan</h4>
              <div className="plan-summary">
                <strong>{selectedPlan?.name}</strong>
                <span>{selectedPlan?.size}</span>
                <span>{selectedPlan?.bedrooms} Bedroom{selectedPlan?.bedrooms > 1 ? 's' : ''}</span>
              </div>
            </div>

            <div className="summary-section">
              <h4>Selected Items</h4>
              <div className="requirements-list">
                {Object.entries(selectedOptions.requirements).map(([type, count]) => (
                  count > 0 && (
                    <div key={type} className="requirement-item">
                      <FaCheck className="requirement-check" />
                      <span className="req-label">{requirementsConfig[type].label}</span>
                      <span className="req-count">×{count}</span>
                    </div>
                  )
                ))}
              </div>
              <div className="total-items-summary">
                Total Items: <strong>{getTotalItems()}</strong>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="next-steps-card">
            <h3>Next Steps</h3>
            <div className="steps-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Share Your Requirements</h4>
                  <p>Contact us via WhatsApp with your selections</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Free Consultation</h4>
                  <p>We'll discuss your needs and preferences</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Personalized Quote</h4>
                  <p>Receive a customized estimate based on your requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-btn secondary" onClick={handleBackToEstimate}>
            <FaArrowLeft className="btn-icon" />
            Modify Selections
          </button>
          
          <button className="action-btn secondary" onClick={handleGoHome}>
            <FaHome className="btn-icon" />
            Back to Home
          </button>

          <div className="primary-actions">
            <button className="action-btn primary outline" onClick={handleCallNow}>
              <FaPhone className="btn-icon" />
              Call Now
            </button>
            <button className="action-btn primary" onClick={handleContactUs}>
              <FaWhatsapp className="btn-icon" />
              Share via WhatsApp
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <div className="benefits-card">
            <h4>Why Choose Us</h4>
            <div className="benefits-items">
              <div className="benefit-item">
                <FaCheck className="benefit-icon" />
                <span>Free Design Consultation</span>
              </div>
              <div className="benefit-item">
                <FaCheck className="benefit-icon" />
                <span>Customized Solutions</span>
              </div>
              <div className="benefit-item">
                <FaCheck className="benefit-icon" />
                <span>Premium Quality Materials</span>
              </div>
              <div className="benefit-item">
                <FaCheck className="benefit-icon" />
                <span>Timely Project Completion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalEstimate;