function Navbar({ text, lang, toggleLang, onOpenModal }) {
  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="800">
      <div className="logo">NRStrength <span className="version">v1.0</span></div>
      
      <ul className="nav-links">
        <li><a href="#features">{text.features}</a></li>
        <li><a href="#roadmap">{text.roadmap}</a></li>
      </ul>

      <div className="nav-actions">
        <button onClick={toggleLang} className="lang-btn">
          {lang === 'en' ? '🇷🇴 RO' : '🇬🇧 EN'}
        </button>
        <button className="cta-btn small" onClick={onOpenModal}>
          {text.download}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;