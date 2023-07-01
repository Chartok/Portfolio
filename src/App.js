import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />

      <main>
        {activeSection === 'home' && (
          <section>
            <Home />
          </section>
        )}

        {activeSection === 'portfolio' && (
          <section>
            <Project />
          </section>
        )}

        {activeSection === 'contact' && (
          <section>
            <Contact />
          </section>
        )}

        {activeSection === 'resume' && (
          // <Resume />
          <section>
            <h2>Resume (Under construction)</h2>
            {/* Resume content */}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
