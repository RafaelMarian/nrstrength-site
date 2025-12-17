function Roadmap({ text }) {
  return (
    <section id="roadmap" className="roadmap-section">
      <div className="roadmap-header" data-aos="fade-up">
        <h2>{text.title}</h2>
        <p>{text.subtitle}</p>
      </div>

      <div className="timeline">
        {/* Phase 1 */}
        <div className="timeline-item left" data-aos="fade-up">
          <div className="timeline-content">
            <span className="phase-tag">In Progress</span>
            <h3>☁️ {text.phase1.title}</h3>
            <p>{text.phase1.desc}</p>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="timeline-item right" data-aos="fade-up">
          <div className="timeline-content">
            <span className="phase-tag future">Locked</span>
            <h3>🛡️ {text.phase2.title}</h3>
            <p>{text.phase2.desc}</p>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="timeline-item left" data-aos="fade-up">
          <div className="timeline-content">
            <span className="phase-tag future">Locked</span>
            <h3>👤 {text.phase3.title}</h3>
            <p>{text.phase3.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;