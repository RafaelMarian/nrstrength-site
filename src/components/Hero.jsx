// src/components/Hero.jsx

// 1. Adăugăm 'onOpenModal' aici, între acolade
function Hero({ text, onOpenModal }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="glitch-text">{text.title}</h1>
        <p>{text.subtitle}</p>
        
        {/* 2. Păstrăm DOAR butonul cu onClick */}
        <button className="cta-btn big" onClick={onOpenModal}>
          {text.cta}
        </button>
      </div>

      {/* Telefonul Cyberpunk (designul e făcut din CSS, deci div-ul poate rămâne gol sau cu text) */}
      <div className="hero-image-placeholder"></div>
    </header>
  );
}

export default Hero;