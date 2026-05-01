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
                        <h3 style={{ fontSize: '40px', marginBottom: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-text-heading)' }}>About Lead O’Latino World Congress
                        </h3>
                        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))', marginBottom: '30px', borderRadius: '3px' }} />

                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                            Lead O’Latino World Congress is India’s premier Afro-Latin dance festival, bringing together the global Salsa, Bachata, Kizomba, and Zouk community under one roof. Now in its 6th edition, the festival has grown into one of the most anticipated international dance events, attracting artists, performers, and social dancers from across the world.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px' }}>
                            With a powerful lineup of 60+ international artists and 50+ national artists, Lead O’Latino is more than just a festival — it is a complete cultural experience designed for dancers of all levels, from beginners to professionals.

                        </p>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px', fontWeight: '600' }}>Organised by renowned dancers and community leaders Suraj Verma and Aditya Saini, Lead O’Latino is driven by a clear vision — to take the Indian Latin dance community to greater heights and make India a powerful presence on the global Latin dance map.</p>

                        <div style={{ display: 'flex', gap: '30px' }}>
                            <div style={{ textAlign: 'center', padding: '16px 24px', background: 'var(--color-gold-subtle)', borderRadius: '12px', border: '1px solid var(--color-border-gold)' }}>
                                <h4 style={{ color: 'var(--color-gold-dark)', fontSize: '32px', marginBottom: '5px' }}>60+</h4>
                                <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>International Artists</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '16px 24px', background: 'var(--color-gold-subtle)', borderRadius: '12px', border: '1px solid var(--color-border-gold)' }}>
                                <h4 style={{ color: 'var(--color-gold-dark)', fontSize: '32px', marginBottom: '5px' }}>40+</h4>
                                <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>National Artists</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '16px 24px', background: 'var(--color-gold-subtle)', borderRadius: '12px', border: '1px solid var(--color-border-gold)' }}>
                                <h4 style={{ color: 'var(--color-gold-dark)', fontSize: '32px', marginBottom: '5px' }}>120+</h4>
                                <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)' }}>Workshops</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '30px', height: '1px', background: 'var(--color-gold)' }} />
                            <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-gold-dark)', fontWeight: '600' }}>@leadolatino.official</span>
                        </div>
                        
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(2, 1fr)', 
                            gap: '15px',
                            background: 'white',
                            padding: '15px',
                            borderRadius: '24px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                            border: '1px solid var(--color-gold-subtle)'
                        }}>
                            {[
                                "https://images.unsplash.com/photo-1545638194-e8823528b788?q=80&w=400",
                                "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400",
                                "https://images.unsplash.com/photo-1504609774668-cb0a221f7344?q=80&w=400",
                                "https://images.unsplash.com/photo-1514525253344-f814d871ea41?q=80&w=400",
                                "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400",
                                "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400"
                            ].map((img, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                    style={{ 
                                        aspectRatio: '1', 
                                        borderRadius: '12px', 
                                        overflow: 'hidden',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <img src={img} alt="Insta Post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ 
                                        position: 'absolute', 
                                        inset: 0, 
                                        background: 'rgba(212, 175, 55, 0.2)', 
                                        opacity: 0, 
                                        transition: 'opacity 0.3s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '20px'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                                    >
                                        ❤️
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Floating Badge moved to corner of grid */}
                        <motion.div
                            animate={{ rotate: [0, 5, 0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            style={{
                                position: 'absolute',
                                bottom: '-30px',
                                right: '-30px',
                                width: '100px',
                                height: '100px',
                                background: 'white',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 4,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                border: '1px solid var(--color-gold)'
                            }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '24px', margin: 0 }}>📸</p>
                                <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--color-gold-dark)', margin: 0 }}>LIVE FEED</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
