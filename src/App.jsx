import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importăm Router
import AOS from 'aos';
import 'aos/dist/aos.css';

// Componente
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

// Pagini
import Hero from './components/Hero';     // Folosim Hero+Features+Roadmap ca "Home"
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import TrainingPage from './pages/TrainingPage';
import NutritionPage from './pages/NutritionPage';
import ProfilePage from './pages/ProfilePage';
import CoachPage from './pages/CoachPage';
import FuturePage from './pages/FuturePage';
import './App.css';
import { content } from './content';
import LegalPage from './pages/LegalPage';
import CollectionPage from './pages/CollectionPage'; // Importăm Cărțile

// Componenta Home (vechiul Landing Page)
const Home = ({ text, onOpenModal }) => (
  <>
    <Hero text={text.hero} onOpenModal={onOpenModal} />
    <Features text={text.features} />
    <Roadmap text={text.roadmap} />
  </>
);

function App() {
  const [lang, setLang] = useState('en');
  const [showModal, setShowModal] = useState(false);
  const toggleLang = () => setLang(lang === 'en' ? 'ro' : 'en');
  const text = content[lang];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar 
          text={text} // Trimitem tot textul pt noile linkuri
          lang={lang} 
          toggleLang={toggleLang} 
          onOpenModal={() => setShowModal(true)} 
        />
        
        <Routes>
          <Route path="/" element={<Home text={text} onOpenModal={() => setShowModal(true)} />} />
          <Route path="/training" element={<TrainingPage text={text} />} />
          <Route path="/training/coach" element={<CoachPage text={text} />} />
          <Route path="/nutrition" element={<NutritionPage text={text} />} />
          <Route path="/profile" element={<ProfilePage text={text} />} />
          <Route path="/future" element={<FuturePage text={text} />} />
          <Route path="/privacy" element={<LegalPage text={text} type="privacy" />} />
          <Route path="/terms" element={<LegalPage text={text} type="terms" />} />
          <Route path="/collection" element={<CollectionPage text={text} />} /> {/* Cards */}
        </Routes>

        {showModal && <WaitlistModal onClose={() => setShowModal(false)} text={text} />}
        <Footer text={text.footer} />
      </div>
    </Router>
  );
}

export default App;