import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div class="home-content">
        <h3>Hello, my name is</h3>
        <h1>Mohammed Bhimjee</h1>
        <h3>And I'm a <span>Tech/Dev Support</span></h3>
        <p>My unique perspective allows me to unlock your full potential.</p>
        <div class="social">
          <a href="#https://www.linkedin.com/in/mohammed-bhimjee/"><i class="bx bxl-linkedin"></i></a>
          <a href="#https://www.github.com/Chartok"><i class="bx bxl-github"></i></a>
        </div>
        <a href="https://docs.google.com/document/d/1EpnJK-pETelC5HLPk_zqbBhiI6fM-cwcj4eyjQ2TnUg/edit?usp=sharing"
          class="btn">CV</a>
      </div>
      <main>
        <section>
          <h2>Portfolio</h2>
          <div className="portfolio">
            <Project title="Project 1" image="project1.jpg" description="Description 1" link="project1-link" />
            <Project title="Project 2" image="project2.jpg" description="Description 2" link="project2-link" />
            {/* Add more projects */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
