import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
    const cards = [
        { title: 'Workshops', icon: '🎭', text: 'Learn from the best in the world. Masterclasses for all levels.' },
        { title: 'Line Up', icon: '✨', text: 'Spectacular shows and artists bringing the heat to the stage.' },
        { title: 'Jack & Jill', icon: '🏆', text: 'Compete for glory and amazing prizes in our official Jack & Jill.' },
    ];

    return (
        <section id="features" style={{ padding: '80px 0', background: 'var(--color-bg-alt)' }}>
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', color: 'var(--color-text-heading)', fontFamily: 'var(--font-serif)', marginBottom: '15px' }}>Event Features</h2>
                    <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))', margin: '0 auto', borderRadius: '3px' }} />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{ padding: '40px 30px', textAlign: 'center', background: 'var(--color-bg-card)' }}
                        >
                            <div style={{ fontSize: '50px', marginBottom: '20px' }}>{card.icon}</div>
                            <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--color-text-heading)' }}>{card.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{card.text}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;
