import React from 'react';
import { Link } from 'react-router-dom'; // Importăm Link

function Footer({ text }) {
  // Verificăm dacă text există, altfel fallback
  const t = text || { rights: "All rights reserved", slogan: "..." };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">NRStrength</div>
        
        <div className="social-links">
          <a href="#" target="_blank">Instagram</a>
          <a href="#" target="_blank">TikTok</a>
          <a href="#" target="_blank">Discord</a>
        </div>

        {/* LINKURI LEGALE AICI */}
        <div className="legal-links" style={{marginBottom: '1.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '0.9rem'}}>
          <a href="https://sites.google.com/view/nrstrength-privacy/pagina-de-pornire" target="_blank" rel="noopener noreferrer" style={{color: 'var(--text-muted)', textDecoration: 'none'}}>
             Privacy Policy
          </a>
          <Link to="/terms" style={{color: 'var(--text-muted)', textDecoration: 'none'}}>
             Terms & Medical
          </Link>
        </div>

        <p>&copy; {new Date().getFullYear()} NRStrength. {t.rights}</p>
        <p className="tiny-text">{t.slogan}</p>
      </div>
    </footer>
  );
}

export default Footer;