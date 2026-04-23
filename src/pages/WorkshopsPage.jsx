import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import workshopBg from '../assets/Lol standee jpg.jpg';

const WorkshopsPage = () => {
    return (
        <div className="app" style={{ background: 'var(--color-bg-main)', minHeight: '100vh', position: 'relative' }}>
            <Navbar />
            
            <main style={{ paddingTop: '80px' }}>
                {/* PDF Background Section */}
                <section style={{ 
                    position: 'relative', 
                    width: '100%', 
                    minHeight: '800px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '80px 24px'
                }}>
                    {/* The PDF "Background" Layer */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        zIndex: 0,
                        opacity: 0.25, // Subtle background
                        pointerEvents: 'none',
                        overflow: 'hidden'
                    }}>
                        <img 
                            src={workshopBg} 
                            alt=""
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                filter: 'brightness(1.1) contrast(1.05)'
                            }} 
                        />
                    </div>

                    {/* Content Layer */}
                    <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px' }}>
                        <h2 style={{ 
                            textAlign: 'center', 
                            fontSize: '42px', 
                            marginBottom: '60px',
                            color: 'var(--color-text-heading)',
                            textShadow: '0 2px 10px rgba(255,255,255,0.8)'
                        }}>Workshop Schedule</h2>
                        
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                            gap: '30px' 
                        }}>
                            {[1, 2, 3, 4].map((col) => (
                                <motion.div 
                                    key={col}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: col * 0.1 }}
                                    className="glass-panel"
                                    style={{ 
                                        padding: '50px 30px', 
                                        minHeight: '400px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        background: 'rgba(255, 255, 255, 0.85)',
                                        border: '2px dashed var(--color-gold-subtle)'
                                    }}
                                >
                                    <div style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                        background: 'var(--color-gold-subtle)', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        marginBottom: '20px',
                                        color: 'var(--color-gold-dark)'
                                    }}>
                                        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{col}</span>
                                    </div>
                                    <h3 style={{ fontSize: '20px', marginBottom: '15px' }}>Column {col}</h3>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>
                                        Workshop details and timing for this slot will be added soon.
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default WorkshopsPage;
