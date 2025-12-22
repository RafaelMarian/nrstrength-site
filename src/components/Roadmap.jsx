import React from 'react';

const getStatus = (index, total) => {
    if (index < total - 1) {
        return { text: 'Done', icon: '✔', isPulsing: false, isActive: false };
    }
    if (index === total - 1) {
        return { text: 'In Progress', icon: '🚧', isPulsing: true, isActive: true };
    }
    return { text: 'Planned', icon: '💡', isPulsing: false, isActive: false };
}

function Roadmap({ text }) {
  const items = text.items || [];
  const totalItems = items.length;

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="roadmap-header" data-aos="fade-down">
        <h2>{text.title}</h2>
        <p style={{color: 'var(--text-muted)'}}>{text.subtitle}</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" data-aos="fade-down"></div>
        {items.map((item, index) => {
          const status = getStatus(index, totalItems);
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className={`timeline-row ${isLeft ? 'left' : 'right'}`}>
              <div 
                className={`timeline-dot ${status.isPulsing ? 'pulsing' : ''}`}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                {/* Icon is now in the badge */}
              </div>
              <div 
                className={`timeline-card ${status.isActive ? 'active-card' : ''}`}
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                <div className={`card-badge status-${status.text.replace(' ', '-').toLowerCase()}`}>
                    <span className="badge-icon">{status.icon}</span>
                    <span>{status.text}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Roadmap;
