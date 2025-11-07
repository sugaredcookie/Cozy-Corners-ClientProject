import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import logo from '/src/assets/logo.png';
import Card from "./Card.jsx"
import { 
  FaUniversity,
  FaWhatsapp, 
  FaInstagram, 
  FaSun, 
  FaMoon, 
  FaArrowRight, 
  FaPlay, 
  FaPhone,
  FaTrophy,
  FaStar,
  FaRulerCombined,
  FaBullseye,
  FaGem,
  FaBolt,
  FaHome,
  FaCouch,
  FaMagic,
  FaChevronLeft,
  FaChevronRight,
  FaCube,
  FaKey,
  FaChair,
  FaPalette,
  FaEye,
  FaTimes,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaLightbulb,
  FaPaintBrush,
  FaBuilding,
  FaCity,
  FaHotel,
  FaStore,
  FaCheckCircle,
  FaClock,
  FaHandshake,
  FaHeadset,
  FaRocket,
  FaHeart
} from "react-icons/fa";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [activeProcess, setActiveProcess] = useState(0);
  const [isProcessHovered, setIsProcessHovered] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleGallery = () => {
    navigate('/gallery');
  }

  const features = [
    {
      title: "Modular Kitchens",
      description: "Custom-designed kitchens with smart storage solutions and premium finishes",
      icon: <FaHome className="feature-react-icon" />,
      images: [
        "https://images.unsplash.com/photo-1721395289902-b47e1ce06ca3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbnMlMjBpbnRlcmlvciUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1722649934574-49bbddd3b5ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNoZW5zJTIwaW50ZXJpb3IlMjBkZXNpZ25zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1760067537565-1d4cbb8da0c3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpdGNoZW5zJTIwaW50ZXJpb3IlMjBkZXNpZ25zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1613648928213-59a823a0ce87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpdGNoZW5zJTIwaW50ZXJpb3IlMjBkZXNpZ25zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
      ]
    },
    {
      title: "Living Spaces",
      description: "Transform your living areas into comfortable, stylish gathering spaces",
      icon: <FaCouch className="feature-react-icon" />,
      images: [
        "https://plus.unsplash.com/premium_photo-1725408060526-9ce882f286f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.1.0&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1616594179229-1fc9289ee234?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        "https://plus.unsplash.com/premium_photo-1661963347219-a066f98c661d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
      ]
    },
    {
      title: "Custom Interiors",
      description: "Tailored designs that reflect your unique personality and lifestyle",
      icon: <FaMagic className="feature-react-icon" />,
      images: [
        "https://plus.unsplash.com/premium_photo-1723823036326-075a2ec87fc4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2ZmaWNlJTIwZGVzaWduc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1634715022648-13d43a4e9fe8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwZGVzaWduc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1714536366932-e9088e9ccdd9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZSUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG9mZmljZSUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
      ]
    }
  ];

  // Key Features Data
  const keyFeatures = [
    {
      id: 1,
      title: "3D Visualization",
      description: "Experience your space before implementation with realistic 3D renderings",
      icon: <FaCube className="key-feature-icon" />,
      images: [
        "https://images.unsplash.com/photo-1634382653568-8271aa4956fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
        "https://images.unsplash.com/photo-1645334424307-6de7ff8f2f34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
        "https://media.istockphoto.com/id/1488630530/photo/isometric-view-living-room-muji-style-open-inside-interior-architecture-3d-rendering-digital.webp?a=1&s=612x612&w=0&k=20&c=Hvbs38HIGuHlZzmIYqFGIpmO6lPwLAqubOd4c7n589M=",
        "https://images.unsplash.com/photo-1663851360815-784f3ba447f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=929",
        "https://images.unsplash.com/photo-1728750002011-e81fc6a631a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"
      ]
    },
    {
      id: 2,
      title: "Turnkey Projects",
      description: "Complete interior solutions from concept to execution with single-point responsibility",
      icon: <FaKey className="key-feature-icon" />,
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1400",
        "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172",
        "https://images.unsplash.com/photo-1611048268283-11b289133fa1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600",
        "https://media.istockphoto.com/id/2176746583/photo/3d-render-luxury-home-interior-living-room.webp?a=1&s=612x612&w=0&k=20&c=asMX41hVXI0wk-Z259sBumI4nG_ly5tfdF90D4Ms2xE="
      ]
    },
    {
      id: 3,
      title: "Custom Furniture",
      description: "Bespoke furniture pieces tailored to your space, style, and functional needs",
      icon: <FaChair className="key-feature-icon" />,
      images: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1758977404683-d04c315a005b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=818",
        "https://images.unsplash.com/photo-1585637071663-799845ad5212?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      ]
    },
  ];

  // Enhanced About Features
  const aboutFeatures = [
    {
      id: 1,
      title: "Expert Team",
      description: "3+ years of combined experience in interior design and architecture",
      icon: <FaUsers className="about-feature-icon" />,
      stats: "15+ Professionals"
    },
    {
      id: 2,
      title: "Award Winning",
      description: "Recognized for excellence in design innovation and customer satisfaction",
      icon: <FaAward className="about-feature-icon" />,
      stats: "25+ Awards"
    },
    {
      id: 3,
      title: "Quality Assurance",
      description: "Rigorous quality checks ensuring premium materials and craftsmanship",
      icon: <FaShieldAlt className="about-feature-icon" />,
      stats: "100% Quality"
    },
  ];

  // Design Process
  const designProcess = [
    {
      step: 1,
      title: "Consultation",
      description: "Understanding your vision, requirements, and budget",
      icon: <FaHandshake className="process-icon" />
    },
    {
      step: 2,
      title: "Concept Design",
      description: "Creating initial concepts and mood boards",
      icon: <FaPaintBrush className="process-icon" />
    },
    {
      step: 3,
      title: "Execution",
      description: "Professional implementation with quality materials",
      icon: <FaRocket className="process-icon" />
    },
    {
      step: 4,
      title: "Final Touch",
      description: "Adding finishing touches and quality assurance",
      icon: <FaCheckCircle className="process-icon" />
    }
  ];

  // Service Categories
  const serviceCategories = [
    {
      title: "Residential",
      description: "Transform your home into a personalized sanctuary",
      icon: <FaHome className="service-icon" />,
      features: ["Custom Kitchens", "Living Rooms", "Bedrooms", "Home Offices"],
      images: [
        "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkcm9vbSUyMGludGVyaW9yJTIwZGVzaWduc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1632119580908-ae947d4c7691?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbSUyMGludGVyaW9yJTIwZGVzaWduc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://plus.unsplash.com/premium_photo-1661964217384-989a71c2fc8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2l0Y2hlbnMlMjBpbnRlcmlvciUyMGRlc2lnbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
      ]
    },
    {
      title: "Commercial",
      description: "Create inspiring workspaces that boost productivity",
      icon: <FaBuilding className="service-icon" />,
      features: ["Office Spaces", "Reception Areas", "Conference Rooms", "Break Areas"],
      images: [
        "https://images.unsplash.com/photo-1759038086454-5644437ccf4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
        "https://images.unsplash.com/photo-1595846265893-f433f6cca81d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMGludGVyaW9yJTIwZGVzaWduc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        "https://plus.unsplash.com/premium_photo-1724026586579-5c413598de2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      title: "Institutional",
      description: "Create functional and inspiring spaces for educational and corporate institutions",
      icon: <FaUniversity className="service-icon" />,
      features: ["Schools & Colleges", "Corporate Offices", "Libraries", "Training Centers"],
      images: [
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1189",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1332",
        "https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1332"
      ]
    }

  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      title: "Personalized Approach",
      description: "Every project is unique, and we treat it that way with customized solutions",
      icon: <FaHeart className="why-icon" />
    },
    {
      title: "Timely Delivery",
      description: "We respect your time and ensure projects are completed as scheduled",
      icon: <FaClock className="why-icon" />
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs - clear breakdowns and honest quotations",
      icon: <FaShieldAlt className="why-icon" />
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "100+", label: "Happy Clients" }
  ];

  // Sample interior design images for background slideshow
  const heroBackgroundImages = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1400",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  // Auto-slide effect for background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroBackgroundImages.length]);

  // Feature cards auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Design process auto-rotate - only when not hovered
  useEffect(() => {
    if (isProcessHovered) return;
    
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % designProcess.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [designProcess.length, isProcessHovered]);

  const handleCardHover = (featureId) => {
    setHoveredCard(featureId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const openModal = (images) => {
    setModalImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
  };

  function handleEstimate() {
    navigate('/estimate');
  }

  return (
    <div className={`landing-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo" src={logo} alt="Cozy Corners" />
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#key-features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#gallery" onClick={handleGallery}>Onsite Gallery</a></li>
          </ul>
          <div className="nav-actions">
            <button className="estimate-btn" onClick={handleEstimate}>
              <FaPhone className="btn-icon" />
              Get Estimate
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Slideshow */}
      <section id="home" className="hero">
        {/* Background Slideshow */}
        <div className="hero-background-slideshow">
          {heroBackgroundImages.map((image, index) => (
            <div
              key={index}
              className={`hero-bg-slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="hero-overlay"></div>
          
          {/* Dots Indicator */}
          <div className="hero-slideshow-dots">
            {heroBackgroundImages.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              Premium Interior Solutions
            </div>
            <h1 className="hero-title">
              Transform Your Space
              <span className="highlight"> Into A</span>
              <br />Masterpiece
            </h1>
            <p className="hero-description">
              Creating breathtaking interiors that blend functionality with aesthetics, 
              turning your vision into reality with precision and creativity.
            </p>
            <div className="hero-buttons">
              <button className="cta-btn primary" onClick={handleEstimate}>
                Start Your Project <FaArrowRight className="btn-icon" />
              </button>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="about-enhanced">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Cozy Corners?</h2>
            <p className="section-subtitle">
              We combine creativity, expertise, and passion to deliver exceptional interior solutions
            </p>
          </div>
          
          <div className="about-features-grid">
            {aboutFeatures.map((feature, index) => (
              <div 
                key={feature.id}
                className="about-feature-card"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="about-feature-icon-container">
                  {feature.icon}
                </div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-description">{feature.description}</p>
                <div className="about-feature-stats">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="process" className="design-process">
        <div className="container">
          <div className="section-header">
            <h2 className="main-title">Our Design Process</h2>
            <p className="section-subtitle">
              A streamlined approach to bringing your vision to life
            </p>
          </div>
          
          <div 
            className="process-steps"
            onMouseEnter={() => setIsProcessHovered(true)}
            onMouseLeave={() => setIsProcessHovered(false)}
          >
            {designProcess.map((step, index) => (
              <div 
                key={step.step}
                className={`process-step ${index === activeProcess ? 'active' : ''}`}
                onMouseEnter={() => setActiveProcess(index)}
              >
                <div className="process-step-number">{step.step}</div>
                <div className="process-step-icon">
                  {step.icon}
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-detailed">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive interior design solutions for every space
            </p>
          </div>
          
          <div className="services-grid">
            {serviceCategories.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                {/* <div className="service-projects">{service.projects}</div> */}
                
                {/* Service Images Gallery */}
                <div className="service-images">
                  {service.images.slice(0, 2).map((image, idx) => (
                    <div 
                      key={idx}
                      className="service-image"
                      style={{ backgroundImage: `url(${image})` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(service.images);
                      }}
                    />
                  ))}
                </div>
                
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="feature-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  className="service-view-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(service.images);
                  }}
                >
                  View All Images
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2 className="main-title">Why Choose Us?</h2>
            <p className="section-subtitle">
              Discover what sets us apart in the world of interior design
            </p>
          </div>
          
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-icon-container">
                  {item.icon}
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Specialties</h2>
            <p className="section-subtitle">
              Discover our comprehensive range of interior design services
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card ${index === activeFeature ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                
                {/* Feature Images Gallery */}
                <div className="feature-images">
                  {feature.images.slice(0, 2).map((image, idx) => (
                    <div 
                      key={idx}
                      className="feature-image"
                      style={{ backgroundImage: `url(${image})` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(feature.images);
                      }}
                    />
                  ))}
                </div>
                
                <button 
                  className="feature-view-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(feature.images);
                  }}
                >
                  View All Images
                </button>
                
                {/* <div className="feature-arrow">
                  <FaArrowRight />
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="key-features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Key Features</h2>
            <p className="section-subtitle">
              Explore what makes our designs stand out
            </p>
          </div>

          <div className="key-features-grid">
            {keyFeatures.map((feature) => (
              <div 
                key={feature.id}
                className={`key-feature-card ${hoveredCard === feature.id ? 'hovered' : ''}`}
                onMouseEnter={() => handleCardHover(feature.id)}
                onMouseLeave={handleCardLeave}
              >
                <div className="key-card-content">
                  <div className="key-feature-icon-container">
                    {feature.icon}
                  </div>
                  <h3 className="key-feature-title">{feature.title}</h3>
                  <p className="key-feature-description">{feature.description}</p>
                  
                  {/* Expandable Content */}
                  <div className="key-expandable-content">
                    <div className="key-feature-images">
                      {feature.images.slice(0, 2).map((image, index) => (
                        <div 
                          key={index}
                          className="key-feature-image"
                          style={{ backgroundImage: `url(${image})` }}
                          onClick={() => openModal(feature.images)}
                        />
                      ))}
                    </div>
                    <button 
                      className="key-view-more-btn"
                      onClick={() => openModal(feature.images)}
                    >
                      View All Images
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Let's create something extraordinary together. Schedule your free consultation today.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary large" onClick={() => setShowCard(true)}>
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {showCard && <Card onClose={() => setShowCard(false)}/>}

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src={logo} alt="Logo" className="logo"/>
              <p>Creating beautiful spaces that inspire and delight since 2008.</p>
              <div className="footer-contact">
                <p><FaPhone className="contact-icon" /> +91 7995369122</p>
                <p>✉️ cozycorners1vs@gmail.com</p>
                <p>📍 G1, BHARGAVI RESIDENCY 9A Bandari Layout, Nizampet</p>
              </div>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Services</h4>
                <a href="#services">Residential</a>
                <a href="#services">Commercial</a>
                <a href="#services">Office Spaces</a>
                <a href="#services">Modular Kitchens</a>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#process">Our Process</a>
                <a href="#key-features">Features</a>
                <a href="#contact">Contact</a>
                <a href="#gallery">Onsite Gallery</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Cozy Corners. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Social Icons */}
      <div className="social-fixed">
        <a 
          href="https://wa.me/7995369122?text=Hi!%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20interior%20design%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <FaWhatsapp />
        </a>
        <a 
          href="https://www.instagram.com/cozycorners_vs?igsh=MXRvNXptNG84cTN6ZA==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-icon"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-images">
              {modalImages.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`Feature preview ${index + 1}`}
                  className="modal-image"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;