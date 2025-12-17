// src/components/Features.jsx
function Features({ text }) {
  return (
    <section id="features" className="features-section">
      <h2>{text.title}</h2>
      <div className="features-grid">
        
        <div className="feature-card rpg">
          <div className="icon">⚔️</div>
          <h3>{text.rpg_title}</h3>
          <p>{text.rpg_desc}</p>
        </div>

        <div className="feature-card ai">
          <div className="icon">🧠</div>
          <h3>{text.ai_title}</h3>
          <p>{text.ai_desc}</p>
        </div>

        <div className="feature-card analytics">
          <div className="icon">📊</div>
          <h3>{text.analytics_title}</h3>
          <p>{text.analytics_desc}</p>
        </div>

        <div className="feature-card privacy">
          <div className="icon">🔒</div>
          <h3>{text.privacy_title}</h3>
          <p>{text.privacy_desc}</p>
        </div>

      </div>
    </section>
  );
}

export default Features;