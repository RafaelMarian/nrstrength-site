function Hero({ text, onOpenModal }) {
  return (
    <header className="hero">
      <div className="hero-content" data-aos="fade-right">
        <h1 className="glitch-text">{text.title}</h1>
        <p>{text.subtitle}</p>
        <button className="cta-btn big" onClick={onOpenModal}>
          {text.cta}
        </button>
      </div>

      <div className="hero-image-placeholder" data-aos="zoom-in" data-aos-delay="200">
        {/* Design-ul telefonului e făcut din CSS */}
      </div>
    </header>
  );
}

export default Hero;