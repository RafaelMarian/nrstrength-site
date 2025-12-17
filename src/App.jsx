import { useState, useEffect } from 'react'; // Am adăugat useEffect
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import WaitlistModal from './components/WaitlistModal';
import Footer from './components/Footer';
import './App.css';
import { content } from './content';

// Importăm librăria de animații
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [lang, setLang] = useState('en');
  const [showModal, setShowModal] = useState(false);

  const toggleLang = () => setLang(lang === 'en' ? 'ro' : 'en');
  const text = content[lang];

  // Inițializăm animațiile când se încarcă site-ul
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durata animației (1 secundă)
      once: true,     // Animația rulează o singură dată
      easing: 'ease-out-cubic', // Un stil de mișcare fluid
    });
  }, []);

  return (
    <div className="app-container">
      {/* Navbar cu funcția de deschidere modal */}
      <Navbar 
        text={text.nav} 
        lang={lang} 
        toggleLang={toggleLang} 
        onOpenModal={() => setShowModal(true)} 
      />
      
      {/* Hero cu funcția de deschidere modal */}
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

      <Footer text={text.footer} />
    </div>
  );
}

export default App;