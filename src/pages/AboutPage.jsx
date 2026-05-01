import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <div className="app">
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
