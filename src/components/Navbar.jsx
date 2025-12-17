// src/components/Navbar.jsx
function Navbar({ text, lang, toggleLang, onOpenModal }) { // <--- Am adăugat onOpenModal
  return (
    <nav className="navbar">
      <div className="logo">NRStrength <span className="version">v1.0</span></div>
      
      <ul className="nav-links">
        <li><a href="#features">{text.features}</a></li>
        <li><a href="#roadmap">{text.roadmap}</a></li>
      </ul>

      <div className="nav-actions">
        <button onClick={toggleLang} className="lang-btn">
          {lang === 'en' ? '🇷🇴 RO' : '🇬🇧 EN'}
        </button>
        {/* Adăugăm onClick și aici */}
        <button className="cta-btn small" onClick={onOpenModal}>
          {text.download}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;