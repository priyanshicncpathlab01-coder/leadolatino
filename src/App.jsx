import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Showcase from './components/Showcase';
import LineUp from './components/LineUp';
import Features from './components/Features';
import Tickets from './components/Tickets';
import Footer from './components/Footer';
import TicketsPage from './pages/TicketsPage';
import WorkshopsPage from './pages/WorkshopsPage';
import AboutPage from './pages/AboutPage';
import JackAndJillPage from './pages/JackAndJillPage';
import ScrollToTop from './components/ScrollToTop';
import bgVideo from './assets/lol vid.mp4';
//import About from './components/About';

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Features/>
        <Tickets />
        <Showcase />
        <LineUp />
        <Stats/>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/jack-and-jill" element={<JackAndJillPage />} />
      </Routes>
    </Router>
  );
}

export default App;
