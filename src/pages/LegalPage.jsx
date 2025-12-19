import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

function LegalPage({ text, type }) {
  const t = text.legal;
  
  // Alegem conținutul pe baza tipului ('privacy' sau 'terms')
  const contentData = type === 'privacy' ? t.privacy_content : t.terms_content;
  const title = type === 'privacy' ? t.privacy_title : t.terms_title;

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, [type]); // Se re-randează dacă schimbăm pagina

  return (
    <div className="page-container" style={{paddingTop: '120px', maxWidth: '800px', margin: '0 auto'}}>
      
      <header className="text-center" style={{marginBottom: '4rem'}}>
        <h1 className="glitch-text" style={{fontSize: '2.5rem'}} data-aos="fade-down">
          {title}
        </h1>
        <p className="subtitle" style={{color: 'var(--text-muted)'}}>
          {t.updated}
        </p>
      </header>

      <div className="legal-content">
        {contentData.map((section, idx) => (
          <div key={idx} className="legal-section" data-aos="fade-up" data-aos-delay={idx * 100}>
            <h3 style={{color: 'var(--primary)', marginBottom: '1rem'}}>
              {section.h}
            </h3>
            <p style={{lineHeight: '1.8', color: '#cbd5e1', marginBottom: '2rem'}}>
              {section.p}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default LegalPage;