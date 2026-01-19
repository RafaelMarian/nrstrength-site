import { useState } from 'react';

function SuggestionModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });
  const [status, setStatus] = useState(null); // null, 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "suggestions", ...formData }),
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
            <h3>🎉 Thank you for your suggestion!</h3>
            <p>We appreciate your feedback.</p>
          </div>
        ) : (
          <>
            <h2>Share Your Idea</h2>
            <p>Help us shape the future of the app. What features would you like to see?</p>
            
            <form onSubmit={handleSubmit} className="waitlist-form" data-netlify="true" name="suggestions">
              <input type="hidden" name="form-name" value="suggestions" />
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="suggestion"
                placeholder="Your brilliant idea..."
                rows="4"
                required
                value={formData.suggestion}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="cta-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Suggestion'}
              </button>
            </form>
            {status === 'error' && <p className="error-msg">Something went wrong. Please try again.</p>}
          </>
        )}
      </div>
    </div>
  );
}

export default SuggestionModal;
