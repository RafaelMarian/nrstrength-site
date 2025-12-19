import React from 'react';

function Roadmap({ text }) {
  // Verificăm dacă există lista de itemi, altfel folosim un array gol
  const items = text.items || [];

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="roadmap-header" data-aos="fade-down">
        <h2>{text.title}</h2>
        <p style={{color: 'var(--text-muted)'}}>{text.subtitle}</p>
      </div>

      <div className="timeline">
        {items.map((item, index) => (
          <div 
            key={index}
            // Dacă indexul e par (0, 2, 4) punem stânga, altfel dreapta
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div className="timeline-content">
              {/* Eticheta cu numărul fazei */}
              <span className={`phase-tag ${index === items.length - 1 ? 'future' : ''}`}>
                {/* Extragem doar "Faza X" din titlu sau afișăm index + 1 */}
                Phase {index + 1}
              </span>
              
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;