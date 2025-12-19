import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';

// NOTĂ: Dacă vrei să folosești imagini reale (screenshot-uri), 
// înlocuiește <div>-urile din array-uri cu <img src={imagineaTa} className="slide-img" />

function PhoneMockup() {
  const location = useLocation();
  const path = location.pathname;
  const [slideIndex, setSlideIndex] = useState(0);

  // Resetăm indexul la 0 când schimbăm pagina
  useEffect(() => {
    setSlideIndex(0);
  }, [path]);

  // Timer pentru a schimba slide-urile automat (la fiecare 3.5 secunde)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // --- DEFINIREA SLIDE-URILOR PENTRU PAGINI ---

  // 1. Slide-uri pentru TRAINING
  const trainingSlides = [
    // Slide 1: Lista de exerciții
    <div key="t1" className="phone-screen-content slide-fade">
      <h3>Active Workout</h3>
      <div className="fake-list">
        <div className="fake-item active">Squat <span style={{float:'right'}}>5x5</span></div>
        <div className="fake-item">Bench <span style={{float:'right'}}>3x8</span></div>
        <div className="fake-item">Row <span style={{float:'right'}}>4x10</span></div>
      </div>
      <div className="fake-btn">Finish Workout</div>
    </div>,

    // Slide 2: Rest Timer
    <div key="t2" className="phone-screen-content slide-fade">
      <h3>Rest Timer</h3>
      <div className="circle-chart" style={{borderColor: 'var(--primary)', fontSize: '2rem'}}>
        00:45
      </div>
      <p style={{marginTop: '20px', fontSize: '0.9rem'}}>Next: Bench Press Set 2</p>
      <div className="fake-btn sec">+30s</div>
    </div>,

    // Slide 3: RPE Feedback
    <div key="t3" className="phone-screen-content slide-fade">
      <h3>Set Complete</h3>
      <p>How was the effort?</p>
      <div style={{display:'flex', gap:'5px', flexWrap:'wrap', justifyContent:'center', margin:'20px 0'}}>
        {[6, 7, 8, 9, 10].map(n => (
          <span key={n} style={{padding:'10px', background:'#333', borderRadius:'5px'}}>{n}</span>
        ))}
      </div>
      <div className="fake-btn">Log Set</div>
    </div>
  ];

  // 2. Slide-uri pentru NUTRITION
  const nutritionSlides = [
    // Slide 1: Dashboard Macros
    <div key="n1" className="phone-screen-content slide-fade">
      <h3>Daily Macros</h3>
      <div className="circle-chart">2400 kcal</div>
      <div className="fake-list">
        <div className="fake-item">🥩 Protein: 180g</div>
        <div className="fake-item">🍚 Carbs: 250g</div>
        <div className="fake-item">🥑 Fat: 70g</div>
      </div>
    </div>,

    // Slide 2: Food Search
    <div key="n2" className="phone-screen-content slide-fade">
      <h3>Add Food</h3>
      <div style={{width:'100%', padding:'10px', background:'#333', borderRadius:'8px', marginBottom:'15px', color:'#777', textAlign:'left'}}>🔍 Chicken Bre...</div>
      <div className="fake-list">
        <div className="fake-item">🍗 Breast (100g) <span style={{float:'right'}}>165cal</span></div>
        <div className="fake-item">🍗 Thigh (100g) <span style={{float:'right'}}>209cal</span></div>
      </div>
    </div>,

    // Slide 3: Water Tracker
    <div key="n3" className="phone-screen-content slide-fade">
      <h3>Hydration</h3>
      <div style={{fontSize:'3rem', margin:'20px 0'}}>💧💧💧</div>
      <p>1.5L / 3L Goal</p>
      <div className="fake-btn" style={{background: '#3b82f6', color:'white'}}>+ Add Water</div>
    </div>
  ];

  // --- LOGICA DE AFIȘARE ---
  
  const getScreenContent = () => {
    switch(path) {
      case '/training':
        // Ciclăm prin array-ul trainingSlides folosind modulo (%)
        return (
          <>
            {trainingSlides[slideIndex % trainingSlides.length]}
            {/* Dots Indicator */}
            <div className="slide-dots">
              {trainingSlides.map((_, i) => (
                <div key={i} className={`dot ${(slideIndex % trainingSlides.length) === i ? 'active' : ''}`} />
              ))}
            </div>
          </>
        );

      case '/nutrition':
        return (
          <>
            {nutritionSlides[slideIndex % nutritionSlides.length]}
            <div className="slide-dots">
              {nutritionSlides.map((_, i) => (
                <div key={i} className={`dot ${(slideIndex % nutritionSlides.length) === i ? 'active' : ''}`} />
              ))}
            </div>
          </>
        );

      case '/profile':
        return (
          <div className="phone-screen-content slide-fade">
            <div className="avatar-circle">👤</div>
            <h3>Level 12</h3>
            <div className="fake-list">
              <div className="fake-item">🔥 Streak: 14 Days</div>
              <div className="fake-item">🏆 Trophies: 8</div>
              <div className="fake-item">⚙️ Settings</div>
            </div>
          </div>
        );

      case '/future':
        return (
           <div className="phone-screen-content slide-fade">
             <h3>Dev Log</h3>
             <p style={{fontSize:'0.8rem', opacity:0.7}}>System Update v2.0...</p>
             <div className="fake-item" style={{borderColor: 'var(--primary)', marginTop: '20px'}}>
                Downloading... 
                <div style={{height:'4px', width:'60%', background:'var(--primary)', marginTop:'5px'}}></div>
             </div>
           </div>
        );

      case '/training/coach':
         return (
          <div className="phone-screen-content slide-fade">
            <div style={{fontSize: '3rem', margin: '20px 0'}}>🧠</div>
            <h3>AI Analysis</h3>
            <div className="fake-list">
              <div className="fake-item active" style={{borderColor: '#a855f7'}}>
                <div>Phase 1: Hypertrophy</div>
                <div style={{fontSize: '0.7rem', opacity: 0.7}}>Week 3 of 12</div>
              </div>
              <div className="fake-item">
                <div>⚠️ Injury Guard</div>
                <div style={{fontSize: '0.7rem', color: 'orange'}}>Right Shoulder Protected</div>
              </div>
            </div>
          </div>
        );

      default: // Home Page
        return (
          <div className="phone-screen-content slide-fade">
            <div style={{color: 'var(--primary)', fontSize: '2rem'}}>NRStrength</div>
            <p>Welcome back, Warrior.</p>
            <div className="fake-btn">Start Quest</div>
            <div className="fake-btn sec">Daily Check-in</div>
          </div>
        );
    }
  };

  return (
    <div className="hero-image-placeholder" data-aos="zoom-in">
      {/* Notch-ul telefonului */}
      <div className="notch"></div>
      
      {/* Ecranul care se schimbă */}
      <div className="screen-container">
        {getScreenContent()}
      </div>
    </div>
  );
}

export default PhoneMockup;