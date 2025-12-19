import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import PhoneMockup from '../components/PhoneMockup'; // Importăm Telefonul

function CoachPage({ text }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ once: true });
  }, []);

  // Siguranță: fallback dacă text.coach nu există
  const c = text.coach || { 
    title: "Coach", 
    subtitle: "Loading...", 
    strategist: { phases: [] }, 
    architect: {}, 
    guardian: {}, 
    spotter: {}, 
    gamification: {} 
  };

  return (
    <div className="page-container">
      
      {/* --- LAYOUT PRINCIPAL: FLEXBOX PENTRU SPLIT SCREEN --- */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '4rem',
        width: '100%',
        maxWidth: '1400px',
        padding: '0 20px'
      }}>

        {/* --- COLOANA STÂNGA: CONȚINUT --- */}
        <div style={{flex: '1 1 500px', maxWidth: '800px'}}>
          
          {/* Header */}
          <header className="text-left" style={{marginBottom: '3rem'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}} data-aos="zoom-in">🧠</div>
            <h1 className="glitch-text" data-aos="fade-down" style={{marginTop: 0}}>{c.title}</h1>
            <p className="subtitle" data-aos="fade-up">{c.subtitle}</p>
            <p className="description" style={{marginLeft: 0}} data-aos="fade-up" data-aos-delay="200">{c.intro}</p>
          </header>

          {/* Grid-ul cu personalități */}
          {/* Folosim stilul coach-grid dar îl forțăm să se comporte bine în coloană */}
          <section className="coach-grid" style={{padding: 0, margin: 0, width: '100%'}}>
            
            {/* 1. Strategist */}
            <div className="coach-card big-card" data-aos="fade-right">
              <div className="card-icon">♟️</div>
              <div className="card-content">
                <h3>{c.strategist.title} <span className="role-tag">{c.strategist.role}</span></h3>
                <p>{c.strategist.desc}</p>
                <div className="phases-list">
                  {c.strategist.phases && c.strategist.phases.map((phase, idx) => (
                    <span key={idx} className="phase-badge">{phase}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Architect */}
            <div className="coach-card" data-aos="fade-up" data-aos-delay="100">
              <div className="card-icon">📐</div>
              <h3>{c.architect.title}</h3>
              <span className="role-tag">{c.architect.role}</span>
              <p>{c.architect.desc}</p>
            </div>

            {/* 3. Guardian */}
            <div className="coach-card" data-aos="fade-up" data-aos-delay="200">
              <div className="card-icon">🛡️</div>
              <h3>{c.guardian.title}</h3>
              <span className="role-tag">{c.guardian.role}</span>
              <p>{c.guardian.desc}</p>
            </div>

            {/* 4. Spotter */}
            <div className="coach-card" data-aos="fade-up" data-aos-delay="300">
              <div className="card-icon">👁️</div>
              <h3>{c.spotter.title}</h3>
              <span className="role-tag">{c.spotter.role}</span>
              <p>{c.spotter.desc}</p>
            </div>

            {/* 5. Gamification */}
            <div className="coach-card full-width" data-aos="zoom-in">
              <div className="card-icon">🎮</div>
              <div className="card-content">
                <h3>{c.gamification.title} <span className="role-tag">{c.gamification.role}</span></h3>
                <p>{c.gamification.desc}</p>
              </div>
            </div>

          </section>
        </div>

        {/* --- COLOANA DREAPTA: TELEFONUL --- */}
        <div style={{
          flex: '0 0 auto', 
          position: 'sticky', 
          top: '120px', 
          marginBottom: '2rem'
        }}>
           <PhoneMockup />
        </div>

      </div>
    </div>
  );
}

export default CoachPage;