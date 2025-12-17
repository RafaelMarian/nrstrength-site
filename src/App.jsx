// src/App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import './App.css';
import { content } from './content'; // Importăm textele

function App() {
  // Starea pentru limbă (default 'en')
  const [lang, setLang] = useState('en');
  
  // Funcție simplă să schimbăm limba
  const toggleLang = () => {
    setLang(lang === 'en' ? 'ro' : 'en');
  };

  // Extragem textele pentru limba curentă
  const text = content[lang];

  return (
    <div className="app-container">
      {/* Trimitem textele și funcția de schimbare limbă la Navbar */}
      <Navbar text={text.nav} lang={lang} toggleLang={toggleLang} />
      
      <Hero text={text.hero} />
      
      <Features text={text.features} />
      
      {/* Vom adăuga Roadmap mai târziu */}
    </div>
  );
}

export default App;