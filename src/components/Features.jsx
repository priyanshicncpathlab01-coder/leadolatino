import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Features = () => {
    const cards = [
        {
            title: 'Workshops',
            icon: '🎭',
            text: 'Learn from the best in the world. Masterclasses for all levels.',
            link: '/workshops',
            color: 'var(--color-gold)'
        },
        {
            title: 'Line Up',
            icon: '✨',
            text: 'Spectacular shows and artists bringing the heat to the stage.',
            link: '/#line-up',
            color: '#ff4d4d' // Vibrant red/orange for contrast
        },
        {
            title: 'Jack & Jill',
            icon: '🏆',
            text: 'Compete for glory and amazing prizes in our official Jack & Jill.',
            link: '/jack-and-jill',
            color: '#4d79ff' // Vibrant blue for contrast
        },
    ];

    return (
        <section id="features" style={{ padding: '140px 0', background: 'var(--color-bg-main)', position: 'relative', overflow: 'hidden' }}>
            {/* Background elements */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(201, 152, 46, 0.08) 0%, transparent 70%)', zIndex: 0 }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'inline-block', fontSize: '13px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--color-gold-dark)', marginBottom: '12px' }}
                    >
                        The Experience
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(32px, 5vw, 44px)', color: 'var(--color-text-heading)', fontFamily: 'var(--font-serif)', marginBottom: '20px', fontWeight: '800' }}
                    >
                        Why Join Us?
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '80px' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{ height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))', margin: '0 auto', borderRadius: '3px' }}
                    />
                </div>

                <div className="features-grid">
                    {cards.map((card, index) => (
                        <Link to={card.link} key={index} style={{ textDecoration: 'none' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.15 }}
                                whileHover={{ y: -8, scale: 1.02, boxShadow: '0 10px 20px rgba(215, 180, 122, 0.15)' }}
                                style={{
                                    padding: '25px 20px',
                                    textAlign: 'center',
                                    background: '#fff',
                                    borderRadius: '25px',
                                    border: `1.5px solid #D7B47A`,
                                    boxShadow: '0 8px 15px rgba(0,0,0,0.03)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    aspectRatio: '1 / 1',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%'
                                }}
                            >
                                {/* Subtle Gold Shine */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: 'linear-gradient(90deg, transparent, #D7B47A, transparent)',
                                    opacity: 0.4
                                }} />

                                <div style={{
                                    fontSize: '32px',
                                    marginBottom: '15px',
                                    display: 'inline-flex',
                                    width: '55px',
                                    height: '55px',
                                    background: 'var(--color-gold-subtle)',
                                    border: `1.2px solid rgba(215, 180, 122, 0.2)`,
                                    borderRadius: '15px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: `0 4px 8px rgba(215, 180, 122, 0.08)`,
                                    flexShrink: 0
                                }}>
                                    {card.icon}
                                </div>

                                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--color-text-heading)', fontFamily: 'var(--font-serif)', fontWeight: '800' }}>{card.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.4', fontSize: '12px', fontWeight: '500', maxWidth: '90%' }}>{card.text}</p>

                                <motion.div
                                    style={{ marginTop: '12px', color: 'var(--color-gold-dark)', fontWeight: '800', fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase' }}
                                >
                                    Explore More →
                                </motion.div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                @media (max-width: 992px) {
                    .features-grid {
                        gap: 30px;
                    }
                }

                @media (max-width: 768px) {
                    .features-grid {
                        grid-template-columns: 1fr;
                        max-width: 400px;
                        gap: 40px;
                    }
                }
            ` }} />
        </section>
    );
};

export default Features;
