import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const JackAndJillPage = () => {
    return (
        <div className="app">
            <Navbar />
            <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg-main)' }}>
                <section style={{ padding: '100px 0' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontFamily: 'var(--font-serif)', color: 'var(--color-text-heading)', marginBottom: '30px' }}
                        >
                            Jack & Jill Competition
                        </motion.h1>
                        <div style={{ width: '80px', height: '4px', background: 'var(--color-gold)', margin: '0 auto 40px' }} />
                        <p style={{ fontSize: '20px', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                            Get ready for the most exciting Afro-Latin dance competition in India. Showcase your skills, connection, and musicality in our official Jack & Jill battles.
                        </p>
                        
                        <div style={{ marginTop: '60px', padding: '40px', background: 'white', borderRadius: '32px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', border: '1px solid var(--color-border)' }}>
                            <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '20px' }}>Coming Soon...</h2>
                            <p>Full competition rules, registration details, and prize pool information will be announced shortly.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default JackAndJillPage;
