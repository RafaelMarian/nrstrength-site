import React from 'react';

const rarityColors = {
  common: 'var(--common)',
  rare: 'var(--rare)',
  epic: 'var(--epic)',
  legendary: 'var(--legendary)'
};

const PremiumCard = ({ item }) => {
  const color = rarityColors[item.rarity] || '#fff';

  // Eliminăm structura de Flip 3D. Returnăm doar Cardul direct.
  return (
    <div className="premium-card" style={{ borderColor: color }}>
      
      {/* 1. Header */}
      <div className="pc-header">
        <span className="pc-title">{item.name}</span>
        <div className="pc-icon-badge" style={{ backgroundColor: color }}>
          {item.rarity.charAt(0).toUpperCase()}
        </div>
      </div>

      {/* 2. Art Window */}
      <div className="pc-art-window">
        <img 
          src={item.image} 
          alt={item.name} 
          className="pc-art-image"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.style.display = 'none'; 
            e.target.parentNode.innerText = '🖼️'; 
          }}
        />
      </div>

      {/* 3. Description Box */}
      <div className="pc-desc-box">
        <span className="pc-type-tag" style={{ color: color }}>
          {item.rarity}
        </span>
        {/* Putem ascunde descrierea lungă dacă cardurile sunt prea mici, 
            sau o lăsăm cu scroll */}
        <p className="pc-desc-text">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default PremiumCard;