function Features({ text, onOpenSuggestionModal }) {
  return (
    <section id="features" className="features-section">
      <h2 data-aos="fade-up">{text.title}</h2>
      <div className="features-grid">
        
        <div className="feature-card" data-aos="fade-up" data-aos-delay="0">
          <div className="icon">⚔️</div>
          <h3>{text.rpg_title}</h3>
          <p>{text.rpg_desc}</p>
        </div>

        <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
          <div className="icon">🧠</div>
          <h3>{text.ai_title}</h3>
          <p>{text.ai_desc}</p>
        </div>

        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
          <div className="icon">📊</div>
          <h3>{text.analytics_title}</h3>
          <p>{text.analytics_desc}</p>
        </div>

        <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
          <div className="icon">🔒</div>
          <h3>{text.privacy_title}</h3>
          <p>{text.privacy_desc}</p>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <button className="cta-btn big" onClick={onOpenSuggestionModal}>
          {text.suggest_cta || "Have an Idea? Suggest a Feature!"}
        </button>
      </div>
    </section>
  );
}

export default Features;