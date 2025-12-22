import React from 'react';
import PhoneMockup from './PhoneMockup'; // Importă telefonul

function Hero({ text, onOpenModal }) {
  return (
    <header className="hero">
      <div className="hero-content" data-aos="fade-right">
        <h1 className="glitch-text">{text.title}</h1>
        <p>{text.subtitle}</p>
        
        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <button className="cta-btn big" onClick={onOpenModal}>
            {text.cta}
          </button>

          {/* BUTON YOUTUBE */}
          <a href="https://www.youtube.com/watch?v=dlEb7lrQfss" target="_blank" rel="noreferrer">
            <button className="cta-btn big youtube-btn">
              ▶ Watch Trailer
            </button>
          </a>
        </div>
      </div>

      {/* Componenta Telefon */}
      <PhoneMockup />
    </header>
  );
}

export default Hero;