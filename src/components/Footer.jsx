import React from 'react';

// Acum acceptăm { text } ca parametru (prop)
function Footer({ text }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">NRStrength</div>
        <div className="social-links">
          <a href="#" target="_blank">Instagram</a>
          <a href="#" target="_blank">TikTok</a>
          <a href="#" target="_blank">Discord</a>
        </div>
        
        {/* Folosim textul din dicționar */}
        <p>&copy; {new Date().getFullYear()} NRStrength. {text.rights}</p>
        <p className="tiny-text">{text.slogan}</p>
      </div>
    </footer>
  );
}

export default Footer;