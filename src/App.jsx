import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Roadmap from './components/Roadmap'; // Asigură-te că e importat
import WaitlistModal from './components/WaitlistModal'; // Importăm modalul
import './App.css';
import { content } from './content';

function App() {
  const [lang, setLang] = useState('en');
  const [showModal, setShowModal] = useState(false); // Stare pentru afișare modal

  const toggleLang = () => setLang(lang === 'en' ? 'ro' : 'en');
  const text = content[lang];

  return (
    <div className="app-container">
      {/* Navbar primește acum funcția de deschidere modal pentru butonul de Download */}
      <Navbar 
        text={text.nav} 
        lang={lang} 
        toggleLang={toggleLang} 
        onOpenModal={() => setShowModal(true)} 
      />
      
      {/* Hero primește funcția pentru butonul "Start Quest" */}
      <Hero 
        text={text.hero} 
        onOpenModal={() => setShowModal(true)} 
      />
      
      <Features text={text.features} />
      <Roadmap text={text.roadmap} />

      {/* Afișăm modalul doar dacă showModal este true */}
      {showModal && (
        <WaitlistModal onClose={() => setShowModal(false)} text={text} />
      )}
    </div>
  );
}

export default App;