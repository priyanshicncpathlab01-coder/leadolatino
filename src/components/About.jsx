import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '100px 0', position: 'relative', background: 'var(--color-bg-main)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '60px',
                    alignItems: 'center'
                }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{ color: 'var(--color-gold-dark)', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Discover the Magic</h2>
                        <h3 style={{ fontSize: '40px', marginBottom: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-text-heading)' }}>An amazing Dance Festival in India</h3>
                        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))', marginBottom: '30px', borderRadius: '3px' }} />

                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                            Join the Ultimate Dance Experience in India! Get ready for an unforgettable journey full of passion, energy, and world-class performances.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px' }}>
                            From March 19-25, 2025, immerse yourself in luxury while connecting with dancers from around the globe at the magnificent Pullman & Mercure Hotel.
                        </p>

                        <div style={{ display: 'flex', gap: '30px' }}>
                            <div style={{ textAlign: 'center', padding: '16px 24px', background: 'var(--color-gold-subtle)', borderRadius: '12px', border: '1px solid var(--color-border-gold)' }}>
                                <h4 style={{ color: 'var(--color-gold-dark)', fontSize: '32px', marginBottom: '5px' }}>40+</h4>
                                <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>Artists</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '16px 24px', background: 'var(--color-gold-subtle)', borderRadius: '12px', border: '1px solid var(--color-border-gold)' }}>
                                <h4 style={{ color: 'var(--color-gold-dark)', fontSize: '32px', marginBottom: '5px' }}>60+</h4>
                                <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>Workshops</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '16px 24px', background: 'var(--color-gold-subtle)', borderRadius: '12px', border: '1px solid var(--color-border-gold)' }}>
                                <h4 style={{ color: 'var(--color-gold-dark)', fontSize: '32px', marginBottom: '5px' }}>1500+</h4>
                                <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>Dancers</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-20px', left: '-20px', right: '20px', bottom: '20px',
                            border: '2px solid var(--color-gold)',
                            borderRadius: '12px',
                            zIndex: 0
                        }} />
                        <img
                            src="https://images.unsplash.com/photo-1504609774668-cb0a221f7344?q=80&w=1000&auto=format&fit=crop"
                            alt="Dance Performance"
                            style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1, borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
