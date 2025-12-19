import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import PremiumCard from '../components/PremiumCard';

function CollectionPage({ text }) {
  const t = text.collectionPage || { cards: [], filters: {} };
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ once: true });
  }, []);

  const rarityOrder = { legendary: 4, epic: 3, rare: 2, common: 1 };
  
  const filteredCards = t.cards
    .filter(card => filter === 'all' ? true : card.rarity === filter)
    .sort((a, b) => rarityOrder[b.rarity] - rarityOrder[a.rarity]);

  return (
    <div className="page-container">
      {/* Container Centrat */}
      <div style={{
        width: '100%', 
        maxWidth: '1200px', 
        padding: '0 20px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>

        {/* HEADER CURAT (Fără Joker) */}
        <header style={{marginBottom: '3rem'}}>
          <h1 className="glitch-text" data-aos="fade-down" style={{marginTop: 0}}>
            {t.title}
          </h1>
          <p className="subtitle" data-aos="fade-up">
            {t.subtitle}
          </p>
        </header>

        {/* Filtre */}
        <div className="filter-bar" data-aos="fade-up">
          {Object.keys(t.filters).map(key => (
            <button 
              key={key} 
              className={`filter-btn ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {t.filters[key]}
            </button>
          ))}
        </div>

        {/* GRIDUL DE CĂRȚI MICI */}
        <div className="cards-grid small-grid">
          {filteredCards.map((card, idx) => (
            <div key={card.id} data-aos="fade-up" data-aos-delay={(idx % 10) * 30}>
              <PremiumCard item={card} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CollectionPage;