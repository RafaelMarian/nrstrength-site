import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import phoneVideo from '../assets/videos/phone-video.mp4';

// The component's logic is moved here. Its state will be reset when its key changes.
function PhoneMockupContent() {
  const location = useLocation();
  const path = location.pathname;
  const [slideIndex, setSlideIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);

  // The problematic useEffect is removed. State is now reset by the key on the parent.

  // Timer for automatic slide change
  useEffect(() => {
    // Don't run the timer on pages with the video
    if (path === '/' || path === '/future') return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [path]);

  const handleVideoError = () => {
    console.error("Video Error: Could not load video. Check path and file.");
    setVideoError(true);
  };

  // --- SLIDE DEFINITIONS ---

  const trainingSlides = [
    '/assets/img/training/1000030365.jpg',
    '/assets/img/training/1000030366.jpg',
    '/assets/img/training/1000030367.jpg',
    '/assets/img/training/1000030368.jpg',
  ];
  
  const nutritionSlides = [
      '/assets/img/nutrition/1000030370.jpg',
      '/assets/img/nutrition/1000030371.jpg',
      '/assets/img/nutrition/1000030372.jpg',
      '/assets/img/nutrition/1000030373.jpg',
  ];
  
  const profileSlides = [
      '/assets/img/profile/1000030352.jpg',
      '/assets/img/profile/1000030358.jpg',
      '/assets/img/profile/1000030359.jpg',
      '/assets/img/profile/1000030360.jpg',
  ];

  // Reusable Video Player component
  const videoPlayer = (
    <video 
      src={phoneVideo} 
      autoPlay 
      loop 
      muted 
      playsInline
      onError={handleVideoError}
      className="phone-screen-content"
      style={{ objectFit: 'cover', height: '100%', width: '100%', background: 'black' }}
    />
  );

  // Reusable Error Display
  const videoErrorDisplay = (
    <div className="phone-screen-content slide-fade" style={{ backgroundColor: '#111', color: 'white', padding: '20px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{color: '#ff4d4d'}}>Video Error</h3>
        <p style={{ fontSize: '0.8rem', lineHeight: '1.4' }}>
        Could not load video. Make sure the file is in the correct folder:
        <br /><br />
        <code style={{background: '#333', padding: '5px 8px', borderRadius: '5px', fontSize:'0.75rem'}}>
            src/assets/videos/phone-video.mp4
        </code>
        </p>
    </div>
  );
  
  // --- SCREEN CONTENT LOGIC ---

  const renderSlideshow = (slides) => (
    <>
        <img 
            key={slideIndex} // Force re-render for animation
            src={slides[slideIndex % slides.length]} 
            className="phone-screen-content slide-fade"
            style={{ objectFit: 'cover', height: '100%', width: '100%' }} 
            alt="App Screenshot"
        />
        <div className="slide-dots" style={{position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1}}>
            {slides.map((_, i) => (
                <div key={i} className={`dot ${(slideIndex % slides.length) === i ? 'active' : ''}`} />
            ))}
        </div>
    </>
  );
  
  const getScreenContent = () => {
    if (videoError) {
      return videoErrorDisplay;
    }

    // Show video on Home and Dev Log pages
    if (path === '/' || path === '/future' || path === '/training/coach') {
      return videoPlayer;
    }

    switch(path) {
      case '/training':
        return renderSlideshow(trainingSlides);
      case '/nutrition':
        return renderSlideshow(nutritionSlides);
      case '/profile':
        return renderSlideshow(profileSlides);
      
      default:
        // Fallback for any other page
        return (
            <div className="phone-screen-content slide-fade">
                <div style={{color: 'var(--primary)', fontSize: '2rem'}}>NRStrength</div>
            </div>
        );
    }
  };

  return (
    <div className="hero-image-placeholder" data-aos="zoom-in">
      
      {/* Ecranul care se schimbă */}
      <div className="screen-container">
        {getScreenContent()}
      </div>
    </div>
  );
}

// This wrapper component ensures PhoneMockupContent is re-mounted when the path changes.
function PhoneMockup() {
    const location = useLocation();
    // Using location.pathname as a key is a React pattern to reset a component's state.
    return <PhoneMockupContent key={location.pathname} />;
}

export default PhoneMockup;