import { useState } from 'react';

function WaitlistModal({ onClose, text }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Codul special pentru Netlify Forms în React
    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", email: email }),
    })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        {status === 'success' ? (
          <div className="success-message">
            <h3>🎉 You are on the list!</h3>
            <p>Pregătește-te. Te vom anunța când lansăm v1.0.</p>
          </div>
        ) : (
          <>
            <h2>Join the Guild</h2>
            <p>Aplicația este în Closed Beta. Lasă-ne emailul pentru acces anticipat.</p>
            
            <form onSubmit={handleSubmit} className="waitlist-form">
              <input 
                type="email" 
                name="email" 
                placeholder="email@exemplu.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="cta-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Se trimite...' : 'Vreau Acces!'}
              </button>
            </form>
            {status === 'error' && <p className="error-msg">Ceva nu a mers. Încearcă din nou.</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default WaitlistModal;