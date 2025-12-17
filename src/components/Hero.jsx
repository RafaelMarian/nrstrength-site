// src/components/Hero.jsx
function Hero({ text }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="glitch-text">{text.title}</h1>
        <p>{text.subtitle}</p>
        <button className="cta-btn big">{text.cta}</button>
      </div>
      {/* Aici vom pune o poză cu telefonul mai târziu */}
      <div className="hero-image-placeholder">
        📱 App Screenshot
      </div>
    </header>
  );
}

export default Hero;