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
                {/* Main Image Section */}
                <section style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    padding: '60px 0 0',
                    background: 'white',
                    overflow: 'hidden'
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        style={{ width: '100%' }}
                    >
                        <img 
                            src={workshopBg} 
                            alt="Workshop Standee"
                            style={{ 
                                width: '100%', 
                                height: 'auto', 
                                display: 'block'
                            }} 
                        />
                    </motion.div>
                </section>

                {/* Workshop Columns Section */}
                <section style={{ 
                    position: 'relative', 
                    width: '100%', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '80px 24px',
                    background: 'var(--color-bg-main)'
                }}>
                    <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px' }}>
                        <h2 style={{ 
                            textAlign: 'center', 
                            fontSize: '42px', 
                            marginBottom: '60px',
                            color: 'var(--color-text-heading)',
                            fontWeight: '700'
                        }}>Workshop Schedule</h2>
                        
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                            gap: '40px' 
                        }}>
                            {[1, 2, 3, 4].map((col) => (
                                <motion.div 
                                    key={col}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: col * 0.1, duration: 0.5 }}
                                    className="glass-panel"
                                    style={{ 
                                        padding: '60px 40px', 
                                        minHeight: '450px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        border: '1px solid rgba(212, 175, 55, 0.2)',
                                        borderRadius: '24px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <div style={{ 
                                        width: '70px', 
                                        height: '70px', 
                                        background: 'linear-gradient(135deg, var(--color-gold-subtle), #fff)', 
                                        borderRadius: '50%', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        marginBottom: '30px',
                                        color: 'var(--color-gold-dark)',
                                        boxShadow: '0 5px 15px rgba(212, 175, 55, 0.2)',
                                        fontSize: '28px',
                                        fontWeight: '800'
                                    }}>
                                        {col}
                                    </div>
                                    <h3 style={{ 
                                        fontSize: '24px', 
                                        marginBottom: '20px',
                                        color: 'var(--color-text-heading)',
                                        fontWeight: '600'
                                    }}>Slot {col}</h3>
                                    <p style={{ 
                                        color: 'var(--color-text-muted)', 
                                        fontSize: '16px',
                                        lineHeight: '1.6'
                                    }}>
                                        Exclusive workshop sessions with world-class instructors. Details coming soon.
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
