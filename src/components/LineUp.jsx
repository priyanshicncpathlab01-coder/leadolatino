import React from 'react';
import { motion } from 'framer-motion';

const artists = [
    {
        id: 1,
        name: 'Marco & Sara',
        role: 'Bachata Sensual',
        image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Fernando & Ayelen',
        role: 'Salsa On1',
        image: 'https://images.unsplash.com/photo-1504609774668-cb0a221f7344?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Ataca & La Alemana',
        role: 'Bachata',
        image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 4,
        name: 'Terry & Cecile',
        role: 'Salsa On2',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 5,
        name: 'Korke & Judith',
        role: 'Bachata Sensual',
        image: 'https://images.unsplash.com/photo-1533147670608-2a2f9776d3ac?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 6,
        name: 'Daniel & Desiree',
        role: 'Bachata',
        image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 7,
        name: 'Gaby & Estefy',
        role: 'Salsa Cubana',
        image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 8,
        name: 'Luis & Andrea',
        role: 'Bachata',
        image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=600&auto=format&fit=crop',
    }
];

const LineUp = () => {
    return (
        <section id="line-up" style={{ padding: '100px 0', background: 'var(--color-bg-alt)', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ color: 'var(--color-gold-dark)', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Meet Our Star-Studded Line Up</h2>
                        <h3 style={{ fontSize: '48px', fontFamily: 'var(--font-serif)', color: 'var(--color-text-heading)', marginBottom: '20px' }}>Artists & Instructors</h3>
                        <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))', margin: '0 auto', borderRadius: '3px' }} />
                    </motion.div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '30px'
                }}>
                    {artists.map((artist, index) => (
                        <motion.div
                            key={artist.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                position: 'relative',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                boxShadow: 'var(--shadow-md)',
                                background: 'var(--color-bg-card)'
                            }}
                            className="artist-card"
                            onMouseEnter={(e) => {
                                e.currentTarget.querySelector('.artist-overlay').style.opacity = '1';
                                e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.querySelector('.artist-overlay').style.opacity = '0';
                                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                            }}
                        >
                            <div style={{ position: 'relative', paddingTop: '120%', overflow: 'hidden' }}>
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform var(--transition-slow)'
                                    }}
                                />
                                <div 
                                    className="artist-overlay"
                                    style={{
                                        position: 'absolute',
                                        top: 0, left: 0, right: 0, bottom: 0,
                                        background: 'linear-gradient(to top, rgba(26, 21, 16, 0.9) 0%, rgba(26, 21, 16, 0.2) 50%, rgba(26, 21, 16, 0) 100%)',
                                        opacity: 0,
                                        transition: 'opacity var(--transition-normal)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-end',
                                        padding: '30px 20px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <h4 style={{ 
                                        color: 'var(--color-text-on-dark)', 
                                        fontFamily: 'var(--font-serif)', 
                                        fontSize: '24px', 
                                        marginBottom: '5px',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}>
                                        {artist.name}
                                    </h4>
                                    <p style={{ 
                                        color: 'var(--color-gold)', 
                                        textTransform: 'uppercase', 
                                        letterSpacing: '1px', 
                                        fontSize: '13px', 
                                        fontWeight: '600' 
                                    }}>
                                        {artist.role}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Persistent info below image for when not hovering */}
                            <div style={{
                                padding: '20px',
                                textAlign: 'center',
                                borderTop: '1px solid var(--color-border)'
                            }}>
                                <h4 style={{ 
                                    color: 'var(--color-text-heading)', 
                                    fontFamily: 'var(--font-serif)', 
                                    fontSize: '20px', 
                                    marginBottom: '4px'
                                }}>
                                    {artist.name}
                                </h4>
                                <p style={{ 
                                    color: 'var(--color-text-muted)', 
                                    fontSize: '14px' 
                                }}>
                                    {artist.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <motion.button 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="btn-outline"
                    >
                        View Full Schedule
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default LineUp;
