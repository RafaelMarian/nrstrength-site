import React from 'react';
import PhoneMockup from './PhoneMockup'; // Importă telefonul

function Hero({ text }) {
  return (
    <header className="hero">
      <div className="hero-content" data-aos="fade-right">
        <h1 className="glitch-text">{text.title}</h1>
        <p>{text.subtitle}</p>
        
        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a href="https://play.google.com/store/apps/details?id=com.nrstrength.app" target="_blank" rel="noopener noreferrer" className="cta-btn big">
            {text.cta}
          </a>

          {/* BUTON YOUTUBE */}
          <a href="https://www.youtube.com/watch?v=dlEb7lrQfss" target="_blank" rel="noreferrer">
            <button className="cta-btn big youtube-btn">
              ▶ Watch Trailer
            </button>
          </a>

          {/* BUTON DEVELOPER */}
          <a href="https://vancarafaelmarian.netlify.app/" target="_blank" rel="noreferrer" className="cta-btn big">
            Meet the developer
          </a>
        </div>
      </div>

      {/* Componenta Telefon */}
      <PhoneMockup />
    </header>
  );
}

export default Hero;