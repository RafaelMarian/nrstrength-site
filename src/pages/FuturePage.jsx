import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import PhoneMockup from '../components/PhoneMockup'; // Importăm Telefonul

function FuturePage({ text }) {
  // Siguranță: fallback
  const t = text.futurePage || { categories: {}, items: [] };
  const [votes, setVotes] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ once: true });
  }, []);

  // Funcție simplă pentru a simula votul
  const handleVote = (id) => {
    setVotes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  // Filtrăm itemele pe categorii (cu protecție dacă items e undefined)
  const getItems = (catKey) => t.items ? t.items.filter(item => item.category === catKey) : [];

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

        {/* --- COLOANA STÂNGA: CONȚINUT (Kanban) --- */}
        <div style={{flex: '1 1 500px', maxWidth: '900px'}}>
          
          <header style={{marginBottom: '3rem', textAlign: 'left'}}>
            <h1 className="glitch-text" data-aos="fade-down" style={{marginTop: 0}}>{t.title}</h1>
            <p className="subtitle" data-aos="fade-up">{t.subtitle}</p>
          </header>

          <div className="kanban-board" style={{padding: 0, margin: 0, width: '100%'}}>
            {/* Coloana: Planificat */}
            <div className="kanban-column" data-aos="fade-up" data-aos-delay="0">
              <h3 className="col-title plan">{t.categories?.planned || "Planned"}</h3>
              <div className="col-content">
                {getItems('planned').map(item => (
                  <FeatureCard key={item.id} item={item} onVote={handleVote} extraVotes={votes[item.id] || 0} />
                ))}
              </div>
            </div>

            {/* Coloana: În Lucru */}
            <div className="kanban-column" data-aos="fade-up" data-aos-delay="200">
              <h3 className="col-title progress">{t.categories?.in_progress || "In Progress"}</h3>
              <div className="col-content">
                {getItems('in_progress').map(item => (
                  <FeatureCard key={item.id} item={item} onVote={handleVote} extraVotes={votes[item.id] || 0} />
                ))}
              </div>
            </div>

            {/* Coloana: Gata */}
            <div className="kanban-column" data-aos="fade-up" data-aos-delay="400">
              <h3 className="col-title done">{t.categories?.done || "Done"}</h3>
              <div className="col-content">
                {getItems('done').map(item => (
                  <FeatureCard key={item.id} item={item} isDone />
                ))}
              </div>
            </div>
          </div>
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

// Componenta mică pentru un Card
const FeatureCard = ({ item, onVote, extraVotes, isDone }) => (
  <div className={`feature-card kanban-card ${isDone ? 'card-done' : ''}`}>
    <h4>{item.title}</h4>
    <p>{item.desc}</p>
    
    {!isDone && (
      <button className="vote-btn" onClick={() => onVote(item.id)}>
        🔼 {item.votes + extraVotes}
      </button>
    )}
  </div>
);

export default FuturePage;