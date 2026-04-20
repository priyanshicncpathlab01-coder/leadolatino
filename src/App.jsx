import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Showcase from './components/Showcase';
import About from './components/About';
import Features from './components/Features';
import Tickets from './components/Tickets';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Showcase />
          <About />
          <Features />
          <Tickets />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
