import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // Asigură-te că imaginea e acolo

function Navbar({ text, lang, toggleLang }) {
  const location = useLocation();

  // 1. Extragem textele. Dacă lipsesc, folosim fallback-uri în Engleză.
  const tPages = text.pages || { 
    training: "Training", 
    nutrition: "Nutrition", 
    profile: "Profile", 
    future: "Dev Log" 
  };
  const tNav = text.nav || { 
    features: "Features", 
    roadmap: "Roadmap", 
    download: "Get App" ,
    cards: "Cards "
  };

  // 2. Funcție Toggle Dark Mode
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className="navbar" data-aos="fade-down">
      
      {/* --- LOGO --- */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="NRStrength Logo" className="nav-logo-img" />
        {/* Poți șterge span-ul de versiune dacă vrei doar logo-ul curat */}
        <span className="version">v1.0.0</span> 
      </Link>
      
      {/* --- LINK-URI --- */}
      <ul className="nav-links">
        {/* A. Link-uri Marketing (Duc la secțiuni de pe Home) */}
        {/* Folosim /# pentru a funcționa și dacă ești pe pagina Training */}
        <li><a href="/#features">{tNav.features}</a></li>
        <li><a href="/#roadmap">{tNav.roadmap}</a></li>

        {/* Separator subtil */}
        <li style={{opacity: 0.2}}>|</li>

        {/* B. Link-uri Aplicație (Duc la pagini separate) */}
        <li>
          {/* Folosim .includes pentru Training ca să rămână activ și când ești pe Coach (/training/coach) */}
          <Link to="/training" className={location.pathname.includes('/training') ? 'active-link' : ''}>
            {tPages.training}
          </Link>
        </li>
        <li>
          <Link to="/nutrition" className={location.pathname === '/nutrition' ? 'active-link' : ''}>
            {tPages.nutrition}
          </Link>
        </li>
        <li>
          <Link to="/profile" className={location.pathname === '/profile' ? 'active-link' : ''}>
            {tPages.profile}
          </Link>
        </li>
        <li>
          <Link to="/future" className={location.pathname === '/future' ? 'active-link' : ''}>
            {tPages.future || "Dev Log"}
          </Link>
        </li>
        <li>
          <Link to="/collection" className={location.pathname === '/collection' ? 'active-link' : ''}>
            {tNav.cards}
          </Link>
        </li>
      </ul>

      {/* --- ACȚIUNI (Dreapta) --- */}
      <div className="nav-actions">
        {/* Buton Theme Toggle */}
        <button onClick={toggleTheme} className="lang-btn" title="Toggle Light/Dark Mode">
          🌗
        </button>

        {/* Buton Limbă */}
        <button onClick={toggleLang} className="lang-btn">
          {lang === 'en' ? '🇷🇴' : '🇬🇧'}
        </button>
        
        {/* Buton Download/Join */}
        <a href="https://play.google.com/store/apps/details?id=com.nrstrength.app" target="_blank" rel="noopener noreferrer" className="cta-btn small">
          {tNav.download || "Get App"}
        </a>
      </div>
    </nav>
  );
}

export default Navbar;