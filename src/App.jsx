import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Showcase from './components/Showcase';
import Features from './components/Features';
import ArtistCarousel from './components/ArtistCarousel';
import Tickets from './components/Tickets';
import Footer from './components/Footer';
import TicketsPage from './pages/TicketsPage';
import WorkshopsPage from './pages/WorkshopsPage';
import AboutPage from './pages/AboutPage';
import JackAndJillPage from './pages/JackAndJillPage';
import VenuePage from './pages/VenuePage';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import LineUpPage from './pages/LineUpPage';

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Tickets />
        <Features />
        <ArtistCarousel />
        <Showcase />
        <Stats />
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
        <Route path="/lineup" element={<LineUpPage/>}/>
        <Route path="/venue" element={<VenuePage />} />
      </Routes>
    </Router>
  );
}

export default App;
