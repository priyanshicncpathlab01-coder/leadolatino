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
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Showcase />
        <LineUp />
        <Features />
        <Tickets />
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
      </Routes>
    </Router>
  );
}

export default App;
