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
        id: 'jack-and-jill',
        title: 'Jack & Jill',
        subtitle: 'The Ultimate Battle',
        description: 'Experience the thrill of the most anticipated competition of the festival. Showcase your skill, musicality, and connection in our official Jack & Jill battles.',
        cta: 'Learn More',
        image: galleryBg, // Keeping the image for now as it's a good generic dance image
        icon: '🏆',
        features: ['Cash Prizes', 'International Judges', 'Social Connection'],
    },
];

const ShowcaseCard = ({ section, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: '-100px' });

    return (
        <motion.div
            ref={cardRef}
            className="showcase-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
        >
            <div className="showcase-image-wrapper">
                <div className="showcase-image-container">
                    <img src={section.image} alt={section.title} className="showcase-image" />
                </div>
            </div>

            <div className="showcase-content">
                <span className="showcase-subtitle">{section.subtitle}</span>
                <h3 className="showcase-title">{section.title}</h3>
                <div className="showcase-divider" />
                
                <p className="showcase-description">{section.description}</p>
                
                <div className="showcase-features">
                    {section.features.map((feat, i) => (
                        <div key={i} className="showcase-feature-item">
                            <div className="showcase-feature-dot" />
                            <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>{feat}</span>
                        </div>
                    ))}
                </div>

                <div className="showcase-cta">
                    {(section.id === 'tickets' || section.id === 'jack-and-jill') ? (
                        <Link
                            to={section.id === 'tickets' ? "/tickets" : "/jack-and-jill"}
                            className="btn-gold"
                            style={{ display: 'block', width: '100%', textAlign: 'center', padding: '16px' }}
                        >
                            {section.cta}
                        </Link>
                    ) : (
                        <a
                            href={`#${section.id}`}
                            className="btn-outline"
                            style={{ display: 'block', width: '100%', textAlign: 'center', padding: '16px' }}
                        >
                            {section.cta}
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
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
                    <span className="showcase-header-tag">The Experience</span>
                    <h2 className="showcase-header-title shimmer-text">What Awaits You</h2>
                    <div className="showcase-header-line" />
                </motion.div>

                <div className="showcase-cards">
                    {sections.map((section, i) => (
                        <ShowcaseCard key={section.id} section={section} index={i} />
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .showcase-section {
                    padding: 140px 0 100px;
                    background: var(--color-bg-main);
                    position: relative;
                }

                .shimmer-text {
                    background: linear-gradient(
                        to right,
                        var(--color-text-heading) 0%,
                        var(--color-gold) 50%,
                        var(--color-text-heading) 100%
                    );
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    animation: shimmer 4s linear infinite;
                }

                @keyframes shimmer {
                    to { background-position: 200% center; }
                }

                .showcase-header {
                    text-align: center;
                    margin-bottom: 90px;
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
                    padding: 8px 24px;
                    border-radius: 30px;
                    margin-bottom: 20px;
                }

                .showcase-header-title {
                    font-family: var(--font-serif);
                    font-size: clamp(36px, 6vw, 54px);
                    margin-bottom: 20px;
                    font-weight: 600;
                }

                .showcase-header-line {
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--color-gold), var(--color-gold-dark));
                    margin: 0 auto;
                    border-radius: 3px;
                }

                .showcase-cards {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 40px;
                }

                .showcase-card {
                    display: flex;
                    flex-direction: column;
                    background: #fff;
                    border-radius: 40px;
                    overflow: hidden;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.05);
                    border: 1px solid var(--color-border);
                    transition: all 0.5s ease;
                    height: 100%;
                }

                .showcase-card:hover {
                    transform: translateY(-15px);
                    box-shadow: 0 30px 70px rgba(201, 152, 46, 0.15);
                    border-color: var(--color-border-gold);
                }

                .showcase-image-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16 / 10;
                    overflow: hidden;
                }

                .showcase-image-container {
                    width: 100%;
                    height: 100%;
                }

                .showcase-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s ease;
                }

                .showcase-card:hover .showcase-image {
                    transform: scale(1.1);
                }

                .showcase-content {
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    gap: 15px;
                }

                .showcase-subtitle {
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: var(--color-gold);
                }

                .showcase-title {
                    font-family: var(--font-serif);
                    font-size: 32px;
                    line-height: 1.2;
                    color: var(--color-text-heading);
                    font-weight: 700;
                }

                .showcase-divider {
                    width: 50px;
                    height: 3px;
                    background: var(--color-gold);
                    border-radius: 3px;
                }

                .showcase-description {
                    font-size: 16px;
                    line-height: 1.7;
                    color: var(--color-text-muted);
                    margin-bottom: 10px;
                }

                .showcase-features {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 25px;
                }

                .showcase-feature-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .showcase-feature-dot {
                    width: 8px;
                    height: 2px;
                    background: var(--color-gold);
                }

                .showcase-cta {
                    margin-top: auto;
                    width: 100%;
                    text-align: center;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .showcase-cards {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }
                }

                @media (max-width: 480px) {
                    .showcase-section {
                        padding: 80px 0 60px;
                    }
                    .showcase-header {
                        margin-bottom: 50px;
                    }
                    .showcase-content {
                        padding: 30px 20px;
                    }
                }

                @media (max-width: 480px) {
                    .showcase-section {
                        padding: 80px 0 60px;
                    }
                    .showcase-header {
                        margin-bottom: 60px;
                    }
                    .showcase-cards {
                        gap: 60px;
                    }
                }
            ` }} />
        </section>
    );
};

export default Showcase;
