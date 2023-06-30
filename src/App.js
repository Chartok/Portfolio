import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

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
            <h2>Home</h2>
            {/* Home content */}
          </section>
        )}

        {activeSection === 'portfolio' && (
          <section>
            <h2>Portfolio</h2>
            <div className="portfolio">
              <Project title="Project 1" image="project1.jpg" description="Description 1" link="project1-link" />
              <Project title="Project 2" image="project2.jpg" description="Description 2" link="project2-link" />
              {/* Add more projects */}
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section>
            <h2>Contact</h2>
            {/* Contact form */}
          </section>
        )}

        {activeSection === 'resume' && (
          <section>
            <h2>Resume</h2>
            {/* Resume content */}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
