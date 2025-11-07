import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';
import { 
  FaHome,
  FaSun,
  FaMoon,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaPlay
} from 'react-icons/fa';
import logo from '/src/assets/logo.png';

// Photos
import photo1 from '/src/assets/gallery_photos/my_photo (1).jpg';
import photo2 from '/src/assets/gallery_photos/my_photo (2).jpg';
import photo3 from '/src/assets/gallery_photos/my_photo (3).jpg';
import photo4 from '/src/assets/gallery_photos/my_photo (4).jpg';
import photo5 from '/src/assets/gallery_photos/my_photo (5).jpg';
import photo6 from '/src/assets/gallery_photos/my_photo (6).jpg';
import photo7 from '/src/assets/gallery_photos/my_photo (7).jpg';
import photo8 from '/src/assets/gallery_photos/my_photo (8).jpg';
import photo9 from '/src/assets/gallery_photos/my_photo (9).jpg';
import photo10 from '/src/assets/gallery_photos/my_photo (10).jpg';
import photo11 from '/src/assets/gallery_photos/my_photo (11).jpg';
import photo12 from '/src/assets/gallery_photos/my_photo (12).jpg';
import photo13 from '/src/assets/gallery_photos/my_photo (13).jpg';
import photo14 from '/src/assets/gallery_photos/my_photo (14).jpg';
import photo15 from '/src/assets/gallery_photos/my_photo (15).jpg';
import photo16 from '/src/assets/gallery_photos/my_photo (16).jpg';
import photo17 from '/src/assets/gallery_photos/my_photo (17).jpg';
import photo18 from '/src/assets/gallery_photos/my_photo (18).jpg';

// Videos
import video1 from '/src/assets/gallery_photos/my_video (1).mp4';
import video2 from '/src/assets/gallery_photos/my_video (2).mp4';
import video3 from '/src/assets/gallery_photos/my_video (3).mp4';
import video4 from '/src/assets/gallery_photos/my_video (4).mp4';
import video5 from '/src/assets/gallery_photos/my_video (5).mp4';

const Gallery = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const galleryMedia = [
    // Photos
    { id: 1, type: 'image', src: photo1 },
    { id: 2, type: 'image', src: photo2 },
    { id: 3, type: 'image', src: photo3 },
    { id: 4, type: 'image', src: photo4 },
    { id: 5, type: 'image', src: photo5 },
    { id: 6, type: 'image', src: photo6 },
    { id: 7, type: 'image', src: photo7 },
    { id: 8, type: 'image', src: photo8 },
    { id: 9, type: 'image', src: photo9 },
    { id: 10, type: 'image', src: photo10 },
    { id: 11, type: 'image', src: photo11 },
    { id: 12, type: 'image', src: photo12 },
    { id: 13, type: 'image', src: photo13 },
    { id: 14, type: 'image', src: photo14 },
    { id: 15, type: 'image', src: photo15 },
    { id: 16, type: 'image', src: photo16 },
    { id: 17, type: 'image', src: photo17 },
    { id: 18, type: 'image', src: photo18 },
    
    // Videos
    { id: 19, type: 'video', src: video1 },
    { id: 20, type: 'video', src: video2 },
    { id: 21, type: 'video', src: video3 },
    { id: 22, type: 'video', src: video4 },
    { id: 23, type: 'video', src: video5 }
  ];

  const openLightbox = (media) => {
    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    // Pause video if playing
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    // Pause current video if playing
    if (selectedMedia?.type === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    const currentIndex = galleryMedia.findIndex(item => item.id === selectedMedia.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryMedia.length;
    } else {
      newIndex = (currentIndex - 1 + galleryMedia.length) % galleryMedia.length;
    }
    
    setSelectedMedia(galleryMedia[newIndex]);
  };

  // Reset video when media changes
  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={`gallery-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo" onClick={handleGoHome} style={{ cursor: 'pointer' }} src={logo} alt="Cozy Corners"/>
          <ul className="nav-links">
            <li><a href="#home" onClick={handleGoHome}>Home</a></li>
            <li><a href="#about" onClick={handleGoHome}>About</a></li>
            <li><a href="#services" onClick={handleGoHome}>Services</a></li>
            <li><a href="#process" onClick={handleGoHome}>Process</a></li>
            <li><a href="#key-features" onClick={handleGoHome}>Features</a></li>
            <li><a href="#contact" onClick={handleGoHome}>Contact</a></li>
            <li><a href="#gallery">Onsite Gallery</a></li>
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
      <div className="gallery-background">
        <div 
          className="gallery-bg-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80')`
          }}
        ></div>
        <div className="gallery-overlay"></div>
      </div>

      <div className="gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h1 className="gallery-title">Our Portfolio</h1>
          <p className="gallery-subtitle">
            Explore our latest interior design projects and get inspired for your next transformation
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryMedia.map(media => (
            <div 
              key={media.id} 
              className="gallery-item"
              onClick={() => openLightbox(media)}
            >
              <div className="image-container">
                {media.type === 'image' ? (
                  <img src={media.src} alt={`Interior design project ${media.id}`} className="gallery-image" />
                ) : (
                  <div className="video-container">
                    <video className="gallery-video" muted>
                      <source src={media.src} type="video/mp4" />
                    </video>
                    <div className="video-play-icon">
                      <FaPlay />
                    </div>
                  </div>
                )}
                <div className="image-overlay">
                  {media.type === 'image' ? (
                    <FaExpand className="expand-icon" />
                  ) : (
                    <FaPlay className="play-icon" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={() => navigateMedia('prev')}>
              <FaChevronLeft />
            </button>
            
            <div className="lightbox-media-container">
              {selectedMedia.type === 'image' ? (
                <img src={selectedMedia.src} alt={`Interior design project ${selectedMedia.id}`} className="lightbox-image" />
              ) : (
                <video 
                  ref={videoRef}
                  className="lightbox-video" 
                  controls 
                  autoPlay
                  onLoadedData={handleVideoLoad}
                  key={selectedMedia.id} // Force re-render when video changes
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="lightbox-counter">
                {galleryMedia.findIndex(item => item.id === selectedMedia.id) + 1} / {galleryMedia.length}
                <span className="media-type-badge">
                  {selectedMedia.type === 'image' ? 'Photo' : 'Video'}
                </span>
              </div>
            </div>
            
            <button className="lightbox-nav lightbox-next" onClick={() => navigateMedia('next')}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;