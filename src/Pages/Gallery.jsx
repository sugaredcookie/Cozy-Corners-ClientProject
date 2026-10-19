import React, { useState, useRef, useEffect } from 'react';
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
  FaPlay,
  FaFilePdf,
  FaExternalLinkAlt
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
import video6 from '/src/assets/gallery_photos/my_video (6).mp4';
import video7 from '/src/assets/gallery_photos/my_video (7).mp4';

// Automatically load all PDFs, including filenames containing spaces.
const pdfModules = import.meta.glob(
  '../assets/gallery_pdfs/*.pdf',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

const Gallery = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);

    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [darkMode]);

  // Theme
  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  // Navigation
  const handleGoHome = () => {
    navigate('/');
  };

  // Photos and videos
  const regularMedia = [
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

    { id: 19, type: 'video', src: video1 },
    { id: 20, type: 'video', src: video2 },
    { id: 21, type: 'video', src: video3 },
    { id: 22, type: 'video', src: video4 },
    { id: 23, type: 'video', src: video5 },
    { id: 24, type: 'video', src: video6 },
    { id: 25, type: 'video', src: video7 }
  ];

  // PDFs: titles are generated from the actual filenames.
  const pdfMedia = Object.entries(pdfModules)
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, {
        numeric: true,
        sensitivity: 'base'
      })
    )
    .map(([path, src], index) => {
      const filename = path.split('/').pop();

      return {
        id: 26 + index,
        type: 'pdf',
        src,
        title: decodeURIComponent(filename).replace(/\.pdf$/i, '')
      };
    });

  const galleryMedia = [...regularMedia, ...pdfMedia];

  // PDFs open in a new tab. Photos and videos use the lightbox.
  const openMedia = (media) => {
    if (media.type === 'pdf') {
      window.open(media.src, '_blank', 'noopener,noreferrer');
      return;
    }

    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setSelectedMedia(null);
  };

  const navigateMedia = (direction) => {
    if (!selectedMedia) return;

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    const currentIndex = regularMedia.findIndex(
      (item) => item.id === selectedMedia.id
    );

    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % regularMedia.length
        : (currentIndex - 1 + regularMedia.length) %
          regularMedia.length;

    setSelectedMedia(regularMedia[newIndex]);
  };

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const selectedIndex = selectedMedia
    ? regularMedia.findIndex((item) => item.id === selectedMedia.id)
    : -1;

  return (
    <div
      className={`gallery-page ${
        darkMode ? 'dark-mode' : 'light-mode'
      }`}
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <img
            className="logo"
            onClick={handleGoHome}
            style={{ cursor: 'pointer' }}
            src={logo}
            alt="Cozy Corners"
          />

          <ul className="nav-links">
            <li>
              <a href="#home" onClick={handleGoHome}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={handleGoHome}>About</a>
            </li>
            <li>
              <a href="#services" onClick={handleGoHome}>Services</a>
            </li>
            <li>
              <a href="#process" onClick={handleGoHome}>Process</a>
            </li>
            <li>
              <a href="#key-features" onClick={handleGoHome}>
                Features
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleGoHome}>Contact</a>
            </li>
            <li>
              <a href="#gallery">Onsite Gallery</a>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              className="estimate-btn"
              onClick={handleGoHome}
            >
              <FaHome className="btn-icon" />
              Back to Home
            </button>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
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
            backgroundImage:
              "url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=2080&q=80')"
          }}
        />

        <div className="gallery-overlay" />
      </div>

      <main className="gallery-container" id="gallery">
        {/* Header */}
        <header className="gallery-header">
          <h1 className="gallery-title">Our Portfolio</h1>

          <p className="gallery-subtitle">
            Explore our latest interior design projects and get
            inspired for your next transformation.
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryMedia.map((media) => (
            <div
              key={`${media.type}-${media.id}`}
              className={`gallery-item ${
                media.type === 'pdf' ? 'pdf-gallery-item' : ''
              }`}
              onClick={() => openMedia(media)}
              onKeyDown={(event) => {
                if (
                  event.key === 'Enter' ||
                  event.key === ' '
                ) {
                  event.preventDefault();
                  openMedia(media);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={
                media.type === 'pdf'
                  ? `Open PDF: ${media.title}`
                  : `View ${media.type} ${media.id}`
              }
            >
              {media.type === 'pdf' ? (
                /* Dedicated PDF card, not an image container */
                <div className="pdf-card">
                  <div className="pdf-card-top">
                    <div className="pdf-icon-wrapper">
                      <FaFilePdf className="pdf-icon" />
                    </div>

                    <span className="pdf-file-label">
                      PDF DOCUMENT
                    </span>
                  </div>

                  <div className="pdf-card-info">
                    <h3 title={media.title}>{media.title}</h3>
                    <p>Project drawings and renders</p>
                  </div>

                  <div className="pdf-card-footer">
                    <span className="pdf-view-button">
                      View PDF <FaExternalLinkAlt />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="image-container">
                  {media.type === 'image' ? (
                    <img
                      src={media.src}
                      alt={`Interior design project ${media.id}`}
                      className="gallery-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="video-container">
                      <video
                        className="gallery-video"
                        muted
                        playsInline
                        preload="metadata"
                      >
                        <source
                          src={media.src}
                          type="video/mp4"
                        />
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
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Photo and video lightbox */}
      {selectedMedia && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
        >
          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={() => navigateMedia('prev')}
              aria-label="Previous media"
            >
              <FaChevronLeft />
            </button>

            <div className="lightbox-media-container">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.src}
                  alt={`Interior design project ${selectedMedia.id}`}
                  className="lightbox-image"
                />
              ) : (
                <video
                  ref={videoRef}
                  className="lightbox-video"
                  controls
                  autoPlay
                  playsInline
                  onLoadedData={handleVideoLoad}
                  key={selectedMedia.id}
                >
                  <source
                    src={selectedMedia.src}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}

              <div className="lightbox-counter">
                {selectedIndex + 1} / {regularMedia.length}

                <span className="media-type-badge">
                  {selectedMedia.type === 'image' ? 'Photo' : 'Video'}
                </span>
              </div>
            </div>

            <button
              className="lightbox-nav lightbox-next"
              onClick={() => navigateMedia('next')}
              aria-label="Next media"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
