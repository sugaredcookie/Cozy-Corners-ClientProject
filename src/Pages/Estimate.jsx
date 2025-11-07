import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estimate.css';
import bhk1 from '/src/assets/1bhk.jpeg'
import bhk2 from '/src/assets/2bhk.jpeg'
import bhk3 from '/src/assets/3bhk.jpeg'
import bhk4 from '/src/assets/4bhk.jpeg'
import { 
  FaArrowRight, 
  FaArrowLeft, 
  FaCheckCircle, 
  FaHome, 
  FaPlus, 
  FaMinus,
  FaPhone,
  FaSun,
  FaMoon
} from 'react-icons/fa';

const Estimate = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    floorPlan: '',
    requirements: {
      kitchen: 1,
      wardrobe: 0,
      entertainmentUnit: 0,
      studyUnit: 0,
      crockeryUnit: 0,
      tvUnit: 0,
      storageUnit: 0
    }
  });

  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const handleFinalEstimate = () => {
    navigate('/final-estimate', { state: { selectedOptions } });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const floorPlans = [
    {
      id: '1bhk',
      name: '1 BHK',
      image: bhk1,
      description: 'Perfect for singles or couples',
      size: '500-700 sq.ft',
      bedrooms: 1
    },
    {
      id: '2bhk',
      name: '2 BHK',
      image: bhk2,
      description: 'Ideal for small families',
      size: '800-1000 sq.ft',
      bedrooms: 2
    },
    {
      id: '3bhk',
      name: '3 BHK',
      image: bhk3,
      description: 'Spacious family living',
      size: '1200-1500 sq.ft',
      bedrooms: 3
    },
    {
      id: '4bhk',
      name: '4 BHK',
      image: bhk4,
      description: 'Luxury living space',
      size: '1800-2200 sq.ft',
      bedrooms: 4
    }
  ];

  const requirementsConfig = {
    kitchen: { min: 1, max: 1, label: 'Kitchen' },
    wardrobe: { min: 0, max: selectedOptions.floorPlan ? floorPlans.find(fp => fp.id === selectedOptions.floorPlan)?.bedrooms || 0 : 0, label: 'Wardrobe' },
    entertainmentUnit: { min: 0, max: 3, label: 'Entertainment Unit' },
    studyUnit: { min: 0, max: 2, label: 'Study Unit' },
    crockeryUnit: { min: 0, max: 2, label: 'Crockery Unit' },
    tvUnit: { min: 0, max: 3, label: 'TV Unit' },
    storageUnit: { min: 0, max: 4, label: 'Storage Unit' }
  };

  const designData = {
    '1bhk': {
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ],
      quotes: [
        "Smart design maximizes every square foot.",
        "Compact luxury for modern urban living.",
        "Efficiency meets elegance in perfect harmony."
      ],
      tags: ['Compact Luxury', 'Smart Space', 'Urban Living']
    },
    '2bhk': {
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ],
      quotes: [
        "Family spaces designed for togetherness.",
        "Where functionality meets family comfort.",
        "Creating memories in beautifully designed spaces."
      ],
      tags: ['Family Comfort', 'Spacious', 'Functional']
    },
    '3bhk': {
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ],
      quotes: [
        "Spacious living redefined with elegance.",
        "Room to grow, designed to inspire.",
        "Luxury that accommodates every family need."
      ],
      tags: ['Spacious', 'Luxury', 'Family Home']
    },
    '4bhk': {
      images: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
      ],
      quotes: [
        "Grand spaces for grand living experiences.",
        "Where luxury meets limitless possibilities.",
        "Architectural excellence in every corner."
      ],
      tags: ['Premium', 'Luxury', 'Grand Living']
    }
  };

  const handleFloorPlanSelect = (planId) => {
    setSelectedOptions(prev => ({
      ...prev,
      floorPlan: planId,
      requirements: {
        ...prev.requirements,
        wardrobe: 0 // Reset wardrobe count when floor plan changes
      }
    }));
  };

  const updateRequirement = (type, value) => {
    const config = requirementsConfig[type];
    const newValue = Math.max(config.min, Math.min(config.max, value));
    
    setSelectedOptions(prev => ({
      ...prev,
      requirements: {
        ...prev.requirements,
        [type]: newValue
      }
    }));
  };

  const nextStep = () => {
    if (currentStep === 1 && !selectedOptions.floorPlan) {
      alert('Please select a floor plan to continue');
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const getTotalItems = () => {
    return Object.values(selectedOptions.requirements).reduce((sum, count) => sum + count, 0);
  };

  // Missing functions that were causing the error
  const renderStepOne = () => (
    <div className="step-container">
      <div className="step-header">
        <h2>Choose Your Floor Plan</h2>
      </div>
      
      <div className="floor-plans-grid">
        {floorPlans.map(plan => (
          <div
            key={plan.id}
            className={`floor-plan-card ${selectedOptions.floorPlan === plan.id ? 'selected' : ''}`}
            onClick={() => handleFloorPlanSelect(plan.id)}
          >
            <div className="plan-image-container">
              <img src={plan.image} alt={plan.name} className="plan-image" />
              <div className="plan-overlay">
                <FaCheckCircle className="check-icon" />
              </div>
            </div>
            <div className="plan-content">
              <h3>{plan.name}</h3>
              <p className="plan-size">{plan.size}</p>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-bedrooms">
                <FaHome className="bedroom-icon" />
                <span>{plan.bedrooms} Bedroom{plan.bedrooms > 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStepTwo = () => (
    <div className="step-container">
      <div className="step-header">
        <h2>Customize Your Requirements</h2>
        <p>Select the furniture and units you need for your {floorPlans.find(fp => fp.id === selectedOptions.floorPlan)?.name}</p>
      </div>
      
      <div className="requirements-grid">
        {Object.entries(requirementsConfig).map(([type, config]) => (
          <div key={type} className="requirement-card">
            <div className="requirement-info">
              <h4>{config.label}</h4>
              {type === 'wardrobe' && (
                <span className="requirement-limit">
                  (Max: {config.max} - matches bedrooms)
                </span>
              )}
            </div>
            
            <div className="counter-controls">
              <button
                className="counter-btn"
                onClick={() => updateRequirement(type, selectedOptions.requirements[type] - 1)}
                disabled={selectedOptions.requirements[type] <= config.min}
              >
                <FaMinus />
              </button>
              
              <span className="counter-value">
                {selectedOptions.requirements[type]}
              </span>
              
              <button
                className="counter-btn"
                onClick={() => updateRequirement(type, selectedOptions.requirements[type] + 1)}
                disabled={selectedOptions.requirements[type] >= config.max}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="requirements-summary">
        <div className="total-items">
          Total Items Selected: <strong>{getTotalItems()}</strong>
        </div>
      </div>
    </div>
  );

  const renderStepThree = () => {
    const currentDesign = designData[selectedOptions.floorPlan] || designData['2bhk'];
    const selectedPlan = floorPlans.find(fp => fp.id === selectedOptions.floorPlan);

    return (
      <div className="step-container">
        <div className="step-header">
          <h2>Your Personalized Estimate</h2>
          <p>Design inspiration for your {selectedPlan?.name}</p>
        </div>

        <div className="design-cards-grid">
          {currentDesign.images.map((image, index) => (
            <div key={index} className="design-card">
              <div className="card-image-container">
                <img src={image} alt={`Design ${index + 1}`} className="card-image" />
                <div className="card-tag">
                  {currentDesign.tags[index]}
                </div>
              </div>
              
              <div className="card-content">
                <div className="quote-container">
                  <p className="design-quote">
                    "{currentDesign.quotes[index]}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="final-summary">
          <h3>Your Selections</h3>
          <div className="summary-grid">
            <div className="summary-section">
              <h4>Floor Plan</h4>
              <p>{selectedPlan?.name} • {selectedPlan?.size}</p>
            </div>
            
            <div className="summary-section">
              <h4>Requirements</h4>
              <div className="requirements-list">
                {Object.entries(selectedOptions.requirements).map(([type, count]) => (
                  count > 0 && (
                    <div key={type} className="requirement-item">
                      <span className="req-label">{requirementsConfig[type].label}:</span>
                      <span className="req-count">{count}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`estimate-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo" onClick={handleGoHome} style={{ cursor: 'pointer' }} src='/src/assets/logo.png'/>
          <ul className="nav-links">
            <li><a href="#home" onClick={handleGoHome}>Home</a></li>
            <li><a href="#about" onClick={handleGoHome}>About</a></li>
            <li><a href="#services" onClick={handleGoHome}>Services</a></li>
            <li><a href="#process" onClick={handleGoHome}>Process</a></li>
            <li><a href="#key-features" onClick={handleGoHome}>Features</a></li>
            <li><a href="#contact" onClick={handleGoHome}>Contact</a></li>
          </ul>
          <div className="nav-actions">
            <button className="estimate-btn" onClick={handleGoHome}>
              <FaPhone className="btn-icon" />
              Back to Home
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Background with professional interior design image */}
      <div className="estimate-background">
        <div 
          className="estimate-bg-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')`
          }}
        ></div>
        <div className="estimate-overlay"></div>
      </div>

      <div className="estimate-container">
        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-steps">
            {[1, 2, 3].map(step => (
              <div key={step} className={`progress-step ${currentStep >= step ? 'active' : ''}`}>
                <div className="step-number">{step}</div>
                <span className="step-label">
                  {step === 1 && 'Floor Plan'}
                  {step === 2 && 'Requirements'}
                  {step === 3 && 'Estimate'}
                </span>
              </div>
            ))}
          </div>
          <div className="progress-line">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="step-content">
          {currentStep === 1 && renderStepOne()}
          {currentStep === 2 && renderStepTwo()}
          {currentStep === 3 && renderStepThree()}
        </div>

        {/* Navigation Buttons */}
        <div className="step-navigation">
          {currentStep > 1 && (
            <button className="nav-btn secondary" onClick={prevStep}>
              <FaArrowLeft className="btn-icon" />
              Previous
            </button>
          )}
          
          {currentStep < 3 ? (
            <button className="nav-btn primary" onClick={nextStep}>
              Next
              <FaArrowRight className="btn-icon" />
            </button>
          ) : (
            <button className="nav-btn primary" onClick={handleFinalEstimate}>
              Get Final Estimate
              <FaArrowRight className="btn-icon" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Estimate;