import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import PhoneMockup from '../components/PhoneMockup'; // Importăm Telefonul

function NutritionPage({ text }) {
  // Siguranță: fallback la obiecte goale
  const t = text.nutritionPage || { zones: [], tech_stack: [] }; 
  const [activeZone, setActiveZone] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ once: true });
  }, []);

  return (
    <div className="page-container">
      
      {/* --- LAYOUT PRINCIPAL: FLEXBOX PENTRU SPLIT SCREEN --- */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',           // Permite trecerea pe rând nou pe mobil
        justifyContent: 'center',   // Centrează totul
        alignItems: 'flex-start',   // Aliniere sus
        gap: '4rem',                // Spațiu între text și telefon
        width: '100%',
        maxWidth: '1400px',
        padding: '0 20px'
      }}>

        {/* --- COLOANA STÂNGA: CONȚINUT (Text + Zone) --- */}
        <div style={{flex: '1 1 500px', maxWidth: '800px'}}>
          
          {/* Intro Header */}
          <header style={{marginBottom: '3rem', textAlign: 'left'}}>
            {/* Emoji specific Nutriție */}
            <div style={{fontSize: '3rem', marginBottom: '1rem'}} data-aos="zoom-in">🍎</div>
            <h1 className="glitch-text" data-aos="fade-down" style={{marginTop: 0}}>{t.title}</h1>
            <p className="subtitle" data-aos="fade-up">{t.subtitle}</p>
          </header>

          {/* ZONES INTERACTIVE */}
          <div className="zones-container" style={{padding: 0, margin: 0}}>
            {t.zones && t.zones.map((zone) => (
              <div 
                key={zone.id} 
                className={`zone-card ${activeZone === zone.id ? 'active' : ''}`}
                onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                // Fără AOS pe carduri pentru stabilitate
              >
                <div className="zone-header">
                  <span className="zone-icon">{zone.icon}</span>
                  <div>
                    <h3>{zone.name}</h3>
                    <p className="zone-short">{zone.desc}</p>
                  </div>
                  <span className="toggle-icon">{activeZone === zone.id ? '−' : '+'}</span>
                </div>

                {/* Detaliile expandabile */}
                <div className={`zone-details ${activeZone === zone.id ? 'show' : ''}`}>
                  <ul>
                    {zone.details && zone.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- COLOANA DREAPTA: TELEFONUL --- */}
        <div style={{
          flex: '0 0 auto', 
          position: 'sticky', 
          top: '120px', // Telefonul stă fix când dai scroll (pe desktop)
          marginBottom: '2rem'
        }}>
           <PhoneMockup />
        </div>

      </div>

      {/* --- TECH DEEP DIVE (Secțiunea de jos) --- */}
      <section className="tech-section">
        <h2 style={{color: 'var(--secondary)'}} data-aos="fade-up">
          {t.tech_title}
        </h2>
        <p style={{marginBottom: '3rem', color: 'var(--text-muted)'}} data-aos="fade-up">
          {t.tech_subtitle}
        </p>

        <div className="tech-grid">
          {t.tech_stack && t.tech_stack.map((item, idx) => (
            <div className="tech-card" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <h4>{item.title}</h4>
              <p className="code-text">
                &gt; {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default NutritionPage;