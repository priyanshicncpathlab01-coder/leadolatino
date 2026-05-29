import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const imageModules = import.meta.glob('../assets/All Artist Pictures - Same background/*.{png,jpg,jpeg,PNG}', { eager: true });

// Helper to find an image by partial filename match
const findImage = (keyword) => {
    const entry = Object.entries(imageModules).find(([path]) => {
        const fileName = path.replace(/\\/g, '/').split('/').pop().split('.')[0].trim().toLowerCase();
        return fileName.includes(keyword.toLowerCase());
    });
    return entry ? (entry[1].default || entry[1]) : '';
};

// Only the 8 specified artists
const featuredArtists = [
    { name: 'Maykel Fonts',                     role: 'Salsa Artist',         category: 'salsa',   image: findImage('Maykel Fonts') },
    { name: 'Sergio & Elena',                   role: 'Bachata Artist',       category: 'bachata', image: findImage('Sergio & Elena') },
    { name: 'Aitor & Angélica',                 role: 'Bachata Artist',       category: 'bachata', image: findImage('Aitor & Angelica') },
    { name: 'Said & Oksana',                    role: 'Kizomba Artist',       category: 'kizomba', image: findImage('Said & Oksana') },
    { name: 'Antonio & Jasmina Berardi',        role: 'Salsa Artist',         category: 'salsa',   image: findImage('Antonio Berardi') },
    { name: 'Magda Liuzza',                     role: 'Bachata Artist',       category: 'bachata', image: findImage('Magda Liuzza') },
    { name: 'Estefania & Burak',                role: 'Bachata Artist',       category: 'bachata', image: findImage('Burak & Estefania') },
    { name: 'Suraj & Megha',                    role: 'Kizomba Artist',       category: 'kizomba', image: findImage('Suraj & Megha') },
];

const ArtistCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);

    const totalArtists = featuredArtists.length;
    const maxIndex = Math.max(0, totalArtists - cardsPerView);

    // Responsive cards per view
    useEffect(() => {
        const updateCardsPerView = () => {
            if (window.innerWidth <= 640) setCardsPerView(1);
            else if (window.innerWidth <= 1024) setCardsPerView(2);
            else setCardsPerView(3);
        };
        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, []);

    // Reset index if it exceeds new maxIndex after resize
    useEffect(() => {
        if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    }, [cardsPerView, maxIndex, currentIndex]);

    const goNext = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    const goPrev = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Slice the visible artists from the array
    const visibleArtists = [];
    for (let i = 0; i < cardsPerView; i++) {
        const idx = (currentIndex + i) % totalArtists;
        visibleArtists.push({ ...featuredArtists[idx], idx });
    }

    return (
        <section id="international-artists" className="artist-carousel-section">
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Section Header */}
                <motion.div
                    className="artist-carousel-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="artist-carousel-tag">Meet Our Stars</span>
                    <h2 className="artist-carousel-title">International Artists</h2>
                    <div className="artist-carousel-line" />
                </motion.div>

                {/* Carousel */}
                <div className="artist-carousel-viewport">
                    <button
                        className="carousel-nav-btn carousel-nav-prev"
                        onClick={goPrev}
                        aria-label="Previous artists"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div className="artist-carousel-track">
                        {visibleArtists.map((artist, i) => (
                            <motion.div
                                key={`${artist.idx}-${currentIndex}`}
                                className="ac-card-elegant"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="ac-card-inner">
                                    <div className="ac-image-box">
                                        <img
                                            src={artist.image}
                                            alt={artist.name}
                                            className="ac-img-elegant"
                                            loading="lazy"
                                        />
                                        <div className="ac-glow-overlay" />
                                        <div className="ac-info-overlay">
                                            <span className="ac-category-tag">{artist.category}</span>
                                            <div className="ac-meta">
                                                <p className="ac-role">{artist.role}</p>
                                                <h4 className="ac-name-elegant">{artist.name}</h4>
                                            </div>
                                        </div>
                                        <div className="ac-shimmer-sweep" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        className="carousel-nav-btn carousel-nav-next"
                        onClick={goNext}
                        aria-label="Next artists"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="carousel-dots">
                    {Array.from({ length: Math.ceil(totalArtists / cardsPerView) }).map((_, i) => (
                        <button
                            key={i}
                            className={`carousel-dot ${Math.floor(currentIndex / cardsPerView) === i ? 'active' : ''}`}
                            onClick={() => {
                                setCurrentIndex(Math.min(i * cardsPerView, maxIndex));
                            }}
                            aria-label={`Go to slide group ${i + 1}`}
                        />
                    ))}
                </div>

                {/* View Lineup Button */}
                <div className="artist-carousel-cta">
                    <Link to="/lineup" className="btn-gold artist-carousel-btn">
                        View Lineup
                    </Link>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .artist-carousel-section {
                    padding: 140px 0 100px;
                    background: var(--color-bg-main);
                    position: relative;
                    overflow: hidden;
                }

                .artist-carousel-header {
                    text-align: center;
                    margin-bottom: 80px;
                }

                .artist-carousel-tag {
                    display: inline-block;
                    font-family: var(--font-sans);
                    font-size: 23px;
                    font-weight: 600;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color: black;
                    background: var(--color-gold-subtle);
                    border: 1px solid var(--color-border-gold);
                    padding: 8px 24px;
                    border-radius: 30px;
                    margin-bottom: 20px;
                }

                .artist-carousel-title {
                    font-family: var(--font-serif);
                    font-size: clamp(36px, 6vw, 54px);
                    margin-bottom: 20px;
                    font-weight: 600;
                    color: var(--color-text-heading);
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
                    animation: artistShimmer 4s linear infinite;
                }

                @keyframes artistShimmer {
                    to { background-position: 200% center; }
                }

                .artist-carousel-line {
                    width: 80px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--color-gold), var(--color-gold-dark));
                    margin: 0 auto;
                    border-radius: 3px;
                }

                .artist-carousel-viewport {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .carousel-nav-btn {
                    flex-shrink: 0;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    border: 1px solid var(--color-border-gold);
                    background: var(--color-bg-card);
                    color: var(--color-gold-dark);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    box-shadow: var(--shadow-sm);
                    z-index: 5;
                }

                .carousel-nav-btn:hover {
                    background: var(--color-gold);
                    color: #fff;
                    border-color: var(--color-gold);
                    box-shadow: var(--shadow-gold);
                    transform: scale(1.1);
                }

                .artist-carousel-track {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                    flex: 1;
                    min-width: 0;
                }

                /* ─── Lineup-style card styling (matching LineUp page) ─── */

                .ac-card-elegant {
                    position: relative;
                    cursor: pointer;
                    perspective: 1000px;
                }

                .ac-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1);
                }

                .ac-image-box {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 1/1;
                    overflow: hidden;
                    border-radius: 24px;
                    background: #111;
                    border: 1px solid rgba(201, 152, 46, 0.1);
                    transition: all 0.6s cubic-bezier(0.2, 0, 0, 1);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                }

                .ac-img-elegant {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 1.2s cubic-bezier(0.2, 0, 0, 1);
                }

                .ac-glow-overlay {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%);
                    opacity: 0.6;
                    transition: all 0.6s ease;
                    z-index: 1;
                }

                /* Hover glow effect */
                .ac-card-elegant:hover .ac-image-box {
                    transform: translateY(-10px);
                    border-color: var(--color-gold);
                    box-shadow:
                        0 0 40px rgba(201, 152, 46, 0.4),
                        0 0 0 2px var(--color-gold);
                }

                .ac-card-elegant:hover .ac-img-elegant {
                    transform: scale(1.1);
                    filter: sepia(0.3) saturate(1.5) brightness(0.8) hue-rotate(-10deg);
                }

                /* Shimmer sweep */
                .ac-shimmer-sweep {
                    position: absolute;
                    top: 0;
                    left: -150%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(201, 152, 46, 0.2),
                        transparent
                    );
                    transform: skewX(-20deg);
                    transition: all 0.75s ease;
                    z-index: 3;
                    pointer-events: none;
                }

                .ac-card-elegant:hover .ac-shimmer-sweep {
                    left: 150%;
                }

                /* Info overlay */
                .ac-info-overlay {
                    position: absolute;
                    inset: 0;
                    padding: 25px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    z-index: 2;
                }

                .ac-category-tag {
                    align-self: flex-end;
                    font-size: 9px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: var(--color-gold);
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(8px);
                    padding: 4px 10px;
                    border-radius: 100px;
                    border: 1px solid rgba(201, 152, 46, 0.2);
                    transform: translateY(-10px);
                    opacity: 0;
                    transition: all 0.5s cubic-bezier(0.2, 0, 0, 1);
                }

                .ac-card-elegant:hover .ac-category-tag {
                    transform: translateY(0);
                    opacity: 1;
                }

                .ac-meta {
                    transform: translateY(10px);
                    transition: all 0.6s cubic-bezier(0.2, 0, 0, 1);
                }

                .ac-card-elegant:hover .ac-meta {
                    transform: translateY(0);
                }

                .ac-role {
                    color: var(--color-gold);
                    font-size: 10px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 5px;
                    opacity: 0;
                    transition: all 0.6s ease;
                }

                .ac-card-elegant:hover .ac-role {
                    opacity: 1;
                }

                .ac-name-elegant {
                    font-family: var(--font-serif);
                    color: #fff;
                    font-size: 32px;
                    margin: 0;
                    line-height: 1.1;
                    font-weight: 600;
                    text-shadow: 0 4px 15px rgba(0,0,0,0.8);
                    letter-spacing: 1px;
                }

                /* ─── Dots ─── */
                .carousel-dots {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin-top: 50px;
                }

                .carousel-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    border: 1px solid var(--color-gold);
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    padding: 0;
                }

                .carousel-dot.active {
                    background: var(--color-gold);
                    transform: scale(1.3);
                    box-shadow: 0 0 10px rgba(201, 152, 46, 0.4);
                }

                .carousel-dot:hover {
                    background: rgba(201, 152, 46, 0.5);
                }

                /* View Lineup CTA */
                .artist-carousel-cta {
                    display: flex;
                    justify-content: center;
                    margin-top: 50px;
                }

                .artist-carousel-btn {
                    display: inline-block;
                    padding: 16px 48px;
                    font-size: 15px;
                    letter-spacing: 1.5px;
                    border-radius: 10px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .artist-carousel-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 30px rgba(201, 152, 46, 0.35);
                }

                /* ─── Responsive ─── */
                @media (max-width: 1024px) {
                    .artist-carousel-track {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .ac-name-elegant {
                        font-size: 24px;
                    }
                    .ac-info-overlay {
                        padding: 18px;
                    }
                }

                @media (max-width: 640px) {
                    .artist-carousel-track {
                        grid-template-columns: 1fr;
                    }
                    .carousel-nav-btn {
                        width: 40px;
                        height: 40px;
                    }
                    .artist-carousel-section {
                        padding: 80px 0 60px;
                    }
                    .artist-carousel-header {
                        margin-bottom: 50px;
                    }
                    .artist-carousel-btn {
                        padding: 14px 36px;
                        font-size: 14px;
                    }
                    .ac-name-elegant {
                        font-size: 28px;
                    }
                    .ac-info-overlay {
                        padding: 20px;
                    }
                }
            ` }} />
        </section>
    );
};

export default ArtistCarousel;
