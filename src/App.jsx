// App.jsx — Main application root

import { useState } from 'react';
import './App.css';
import { content } from './content';

import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import Accordion from './components/Accordion';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const c = content[lang];

  return (
    <div className="app" lang={lang}>
      {/* Decorative floating particles */}
      <Particles count={30} />

      {/* Sticky navigation bar */}
      <Navbar lang={lang} onLangChange={setLang} />

      {/* Main page content */}
      <main className="main-content">
        {/* 1. Hero + Help banner */}
        <Hero c={c} lang={lang} />

        {/* 2. Image / Photo slider */}
        <ImageSlider label={lang === 'si' ? 'ඡායාරූප' : 'Gallery'} />

  

        {/* 3. Competition info accordions */}
        <Accordion c={c} tracks={c.tracks} lang={lang} />

        {/* 4. Contact section */}
        <Contact c={c} lang={lang} />
      </main>

      {/* Footer */}
      <Footer c={c} lang={lang} />
    </div>
  );
}
