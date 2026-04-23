import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import workshopBg from '../assets/workshop_bg.png';
import lineupBg from '../assets/lineup_bg.png';
import ticketsBg from '../assets/tickets_bg.png';
import galleryBg from '../assets/gallery_bg.png';

const sections = [
    {
        id: 'workshops',
        title: 'Workshops',
        subtitle: 'Learn from the Masters',
        description: 'Immerse yourself in world-class workshops led by internationally acclaimed dance instructors. From beginner fundamentals to advanced masterclasses — elevate your art.',
        cta: 'View Schedule',
        image: workshopBg,
        icon: '🎓',
        features: ['50+ Classes Daily', 'All Levels Welcome', 'World-Class Instructors'],
    },
    {
        id: 'line-up',
        title: 'Line Up',
        subtitle: 'Spectacular Performances',
        description: 'Witness breathtaking performances from the world\'s finest dancers and artists. Every night is a showcase of passion, talent, and pure artistry on our grand stage.',
        cta: 'See Artists',
        image: lineupBg,
        icon: '✨',
        features: ['International Stars', 'Live Music', 'Grand Stage Shows'],
    },
    {
        id: 'tickets',
        title: 'Buy Tickets',
        subtitle: 'Secure Your Experience',
        description: 'Choose the perfect pass that matches your dance journey. From full access passes to VIP experiences — every moment is crafted for an unforgettable festival.',
        cta: 'Get Passes',
        image: ticketsBg,
        icon: '🎫',
        features: ['Full Pass from ₹8,999', 'VIP Lounges', 'Early Bird Discounts'],
    },
    {
        id: 'gallery',
        title: 'Gallery',
        subtitle: 'Relive the Magic',
        description: 'Browse stunning moments captured from our previous editions. Every frame tells a story of connection, rhythm, and the universal language of dance.',
        cta: 'View Gallery',
        image: galleryBg,
        icon: '📸',
        features: ['HD Photos & Videos', 'Past Editions', 'Social Media Wall'],
    },
];

const ShowcaseCard = ({ section, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: '-100px' });
    const isReversed = index % 2 !== 0;

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'end start'],
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

    return (
        <div ref={cardRef} className={`showcase-card ${isReversed ? 'reversed' : ''}`}>
            {/* Image Side */}
            <motion.div
                className="showcase-image-wrapper"
                initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="showcase-image-container">
                    <motion.img
                        src={section.image}
                        alt={section.title}
                        className="showcase-image"
                        style={{ y: imgY }}
                    />
                    <div className="showcase-image-overlay" />
                    <div className="showcase-image-icon">
                        <span>{section.icon}</span>
                    </div>
                </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
                className="showcase-content"
                initial={{ opacity: 0, x: isReversed ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <motion.span
                    className="showcase-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {section.subtitle}
                </motion.span>

                <motion.h2
                    className="showcase-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    {section.title}
                </motion.h2>

                <motion.div
                    className="showcase-divider"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                />

                <motion.p
                    className="showcase-description"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    {section.description}
                </motion.p>

                <div className="showcase-features">
                    {section.features.map((feat, i) => (
                        <motion.div
                            key={feat}
                            className="showcase-feature-item"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                        >
                            <span className="showcase-feature-dot" />
                            {feat}
                        </motion.div>
                    ))}
                </div>

                {section.id === 'tickets' ? (
                    <Link
                        to="/tickets"
                        className="btn-gold showcase-cta"
                        style={{ display: 'inline-block' }}
                    >
                        {section.cta}
                    </Link>
                ) : (
                    <motion.a
                        href={`#${section.id}`}
                        className="btn-gold showcase-cta"
                        initial={{ opacity: 0, y: 15 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ display: 'inline-block' }}
                    >
                        {section.cta}
                    </motion.a>
                )}
            </motion.div>
        </div>
    );
};

const Showcase = () => {
    return (
        <section id="showcase" className="showcase-section">
            <div className="container">
                <motion.div
                    className="showcase-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="showcase-header-tag">Explore</span>
                    <h2 className="showcase-header-title">What Awaits You</h2>
                    <div className="showcase-header-line" />
                </motion.div>

                <div className="showcase-cards">
                    {sections.map((section, i) => (
                        <ShowcaseCard key={section.id} section={section} index={i} />
                    ))}
                </div>
            </div>

            <style>{`
                .showcase-section {
                    padding: 100px 0 80px;
                    background: var(--color-bg-main);
                    position: relative;
                }

                .showcase-header {
                    text-align: center;
                    margin-bottom: 70px;
                }

                .showcase-header-tag {
                    display: inline-block;
                    font-family: var(--font-sans);
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: var(--color-gold-dark);
                    background: var(--color-gold-subtle);
                    border: 1px solid var(--color-border-gold);
                    padding: 6px 20px;
                    border-radius: 30px;
                    margin-bottom: 16px;
                }

                .showcase-header-title {
                    font-family: var(--font-serif);
                    font-size: clamp(30px, 5vw, 48px);
                    color: var(--color-text-heading);
                    margin-bottom: 16px;
                }

                .showcase-header-line {
                    width: 60px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--color-gold), var(--color-gold-dark));
                    margin: 0 auto;
                    border-radius: 3px;
                }

                .showcase-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 80px;
                }

                .showcase-card {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 50px;
                    align-items: center;
                }

                .showcase-card.reversed {
                    direction: rtl;
                }

                .showcase-card.reversed > * {
                    direction: ltr;
                }

                .showcase-image-wrapper {
                    position: relative;
                }

                .showcase-image-container {
                    position: relative;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: var(--shadow-lg);
                    aspect-ratio: 4 / 3;
                }

                .showcase-image {
                    width: 100%;
                    height: 120%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.6s ease;
                }

                .showcase-card:hover .showcase-image {
                    transform: scale(1.05);
                }

                .showcase-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        180deg,
                        transparent 40%,
                        rgba(26, 21, 16, 0.6) 100%
                    );
                    pointer-events: none;
                }

                .showcase-image-icon {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    width: 56px;
                    height: 56px;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 26px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                }

                .showcase-content {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .showcase-subtitle {
                    font-family: var(--font-sans);
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: var(--color-gold-dark);
                }

                .showcase-title {
                    font-family: var(--font-serif);
                    font-size: clamp(28px, 4vw, 42px);
                    color: var(--color-text-heading);
                    margin: 4px 0;
                }

                .showcase-divider {
                    width: 50px;
                    height: 3px;
                    background: var(--color-gold);
                    border-radius: 3px;
                    transform-origin: left;
                    margin: 8px 0;
                }

                .showcase-description {
                    font-size: 16px;
                    line-height: 1.7;
                    color: var(--color-text-muted);
                    margin-bottom: 8px;
                }

                .showcase-features {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin: 8px 0 16px;
                }

                .showcase-feature-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--color-text-body);
                }

                .showcase-feature-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: var(--color-gold);
                    flex-shrink: 0;
                }

                .showcase-cta {
                    align-self: flex-start;
                    margin-top: 8px;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .showcase-card,
                    .showcase-card.reversed {
                        grid-template-columns: 1fr;
                        gap: 30px;
                        direction: ltr;
                    }
                    .showcase-cards {
                        gap: 60px;
                    }
                }

                @media (max-width: 480px) {
                    .showcase-section {
                        padding: 70px 0 60px;
                    }
                    .showcase-cards {
                        gap: 50px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Showcase;
