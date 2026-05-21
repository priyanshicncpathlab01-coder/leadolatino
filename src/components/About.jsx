import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
//import aboutImg from '../assets/about us image.jpeg';
import venueImg from '../assets/Official veneue.jpeg';
import organizerImg from '../assets/Organizer.jpeg';
import img2 from '../assets/2.jpg';
import img6 from '../assets/6.jpg';

const About = () => {
    const images = [img2, img6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section id="about" className="about-section-wrapper">
            <div className="about-hero">
                <div className="slideshow-wrapper">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="slide"
                        >
                            <img src={images[currentIndex]} alt="India World Dance Congress" className="slide-image" />
                            <div className="slide-overlay" />
                        </motion.div>
                    </AnimatePresence>

                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{ textAlign: 'center' }}
                        >
                            <span className="subtitle">India World Dance Congress</span>
                            <h1 className="title">Our Legacy</h1>
                            <div className="divider" />
                        </motion.div>
                    </div>

                    <div className="slide-indicators">
                        {images.map((_, i) => (
                            <div 
                                key={i} 
                                className={`indicator ${i === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-narrative">
                <div className="container">
                    <div className="narrative-grid">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="narrative-text"
                        >
                            <h2 className="narrative-title" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>About Lead O’Latino World Congress</h2>
                            <p className="narrative-p">
                                Lead O’Latino World Congress is India’s premier Afro-Latin dance festival, bringing together the global Salsa, Bachata, Kizomba, and Zouk community under one roof. Now in its 6th edition, the festival has grown into one of the most anticipated international dance events, attracting artists, performers, and social dancers from across the world.
                            </p>
                            <p className="narrative-p">
                                With a powerful lineup of 60+ international artists and 50+ national artists, Lead O’Latino is more than just a festival — it is a complete cultural experience designed for dancers of all levels, from beginners to professionals.
                            </p>
                            <p className="narrative-p">
                                Organised by renowned dancers and community leaders Suraj Verma and Aditya Saini, Lead O’Latino is driven by a clear vision — to take the Indian Latin dance community to greater heights and make India a powerful presence on the global Latin dance map.
                            </p>
                            <div className="venue-highlight">
                                Hosted at a 5-star luxury venue, the event features:
                            </div>
                            <div className="narrative-p">
                                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                    <li>80+ high-quality dance workshops</li>
                                    <li>Masterclasses by world-renowned artists</li>
                                    <li>7+ social dance nights</li>
                                    <li>Live concert experiences</li>
                                    <li>International-level competitions & Jack and Jill battles</li>
                                    <li>Bootcamps and performance opportunities</li>
                                    <li>Themed parties, VIP experiences, and networking spaces</li>
                                </ul>
                            </div>
                            <p className="narrative-p">
                                What makes Lead O’Latino truly unique is its focus on community, quality, and global exposure. The festival creates a space where dancers can learn, connect, perform, and grow — all while experiencing the energy of a world-class Latin dance environment in India.
                            </p>
                            <p className="narrative-p">
                                Whether you are looking to improve your dance skills, perform on an international stage, or simply be part of an unforgettable dance celebration, Lead O’Latino World Congress offers an experience like no other.
                            </p>
                            <p className="narrative-p" style={{ fontWeight: '600' }}>
                                Join us and be part of the movement that is redefining the Afro-Latin dance scene in India.
                            </p>
                        </motion.div>

                        <div className="visual-column">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="narrative-visual"
                            >
                                <div className="visual-card main-img" style={{ width: '100%', height: '100%', top: '0', right: '0' }}>
                                    <img src={organizerImg} alt="The Organizer" />
                                </div>
                                <div className="gold-accent-box" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="venue-feature-image"
                            >
                                <img src={venueImg} alt="Official Venue" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .about-hero {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16/9;
                    background: #000;
                    overflow: hidden;
                }

                .slideshow-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                .slide-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    display: block;
                }

                .slide-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(10, 8, 6, 0.8) 100%);
                }

                .hero-content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 10;
                    width: 90%;
                }

                .subtitle {
                    display: block;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 6px;
                    color: var(--color-gold);
                    margin-bottom: 20px;
                }

                .title {
                    font-family: var(--font-serif);
                    font-size: clamp(40px, 8vw, 80px);
                    color: #fff;
                    margin-bottom: 20px;
                    font-weight: 500;
                    text-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }

                .divider {
                    width: 80px;
                    height: 2px;
                    background: var(--color-gold);
                    margin: 0 auto;
                    border-radius: 2px;
                }

                .slide-indicators {
                    position: absolute;
                    bottom: 40px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 15px;
                    z-index: 20;
                }

                .indicator {
                    width: 40px;
                    height: 2px;
                    background: rgba(255,255,255,0.2);
                    cursor: pointer;
                    transition: all 0.4s ease;
                }

                .indicator.active {
                    background: var(--color-gold);
                    width: 70px;
                }

                /* Narrative Section */
                .about-narrative {
                    padding: 140px 0;
                    background: var(--color-bg-main);
                    position: relative;
                }

                .narrative-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 80px;
                    align-items: center;
                }

                .narrative-tag {
                    color: var(--color-gold-dark);
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    display: block;
                }

                .narrative-title {
                    font-family: var(--font-serif);
                    font-size: clamp(32px, 5vw, 48px);
                    color: var(--color-text-heading);
                    margin-bottom: 30px;
                    line-height: 1.2;
                    font-weight: 500;
                }

                .narrative-p {
                    font-size: 17px;
                    color: var(--color-text-muted);
                    line-height: 1.8;
                    margin-bottom: 25px;
                }

                .about-features-small {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                    margin-top: 40px;
                }

                .feat-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    color: var(--color-text-heading);
                    font-weight: 600;
                    font-size: 15px;
                }

                .feat-icon {
                    color: var(--color-gold);
                }

                .venue-highlight {
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--color-text-heading);
                    background: linear-gradient(90deg, rgba(218, 165, 32, 0.1) 0%, transparent 100%);
                    border-left: 4px solid var(--color-gold);
                    padding: 15px 20px;
                    margin: 35px 0 15px 0;
                    border-radius: 0 8px 8px 0;
                }

                .visual-column {
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                    align-self: flex-start;
                    margin-top: -8vw;
                    width: 100%;
                }

                .venue-feature-image {
                    width: 100%;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                }

                .venue-feature-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                }

                .narrative-visual {
                    position: relative;
                    width: 100%;
                    height: auto;
                    aspect-ratio: 4/5;
                    max-height: 600px;
                }

                .visual-card {
                    position: absolute;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.15);
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .visual-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .main-img {
                    width: 80%;
                    height: 80%;
                    top: 0;
                    right: 0;
                    z-index: 2;
                }

                .sub-img {
                    width: 60%;
                    height: 50%;
                    bottom: 0;
                    left: 0;
                    z-index: 3;
                    border: 8px solid #fff;
                }

                .gold-accent-box {
                    position: absolute;
                    top: 10%;
                    left: -10%;
                    width: 40%;
                    height: 40%;
                    border: 2px solid var(--color-gold-light);
                    z-index: 1;
                    opacity: 0.2;
                }

                @media (max-width: 1024px) {
                    .narrative-grid {
                        grid-template-columns: 1fr;
                        gap: 60px;
                    }
                    .visual-column {
                        max-width: 500px;
                        margin: 0 auto;
                        margin-top: -4vw;
                        gap: 40px;
                    }
                }

                @media (max-width: 768px) {
                    .about-narrative {
                        padding: 80px 0;
                    }
                    .visual-column {
                        margin-top: 0;
                    }
                }
            ` }} />
        </section>
    );
};

export default About;

