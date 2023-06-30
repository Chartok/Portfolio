import React, { useState } from 'react';
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
            <h2>Home</h2>

          </section>
        )}

        {activeSection === 'portfolio' && (
          <section>
            <Project />
            <h2>Portfolio</h2>

          </section>
        )}

        {activeSection === 'contact' && (
          <section>
            <Contact />
            <h2>Contact</h2>
          </section>
        )}

        {activeSection === 'resume' && (
          <section>
            <Resume />
            <h2>Resume</h2>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
