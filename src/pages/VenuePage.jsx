import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Globe, ChevronDown, Plane } from 'lucide-react';
import mapPreview from '../assets/map_preview.png';

const VenuePage = () => {
    const [openAccordion, setOpenAccordion] = useState('venue');

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div id="venue-page" className="app" style={{ background: '#0a0806', minHeight: '100vh' }}>
            <Navbar />

            <main>
                {/* Cinematic Video Banner */}
                <section
                    id="venue-banner"
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100vh',
                        overflow: 'hidden',
                    }}
                >
                    {/* YouTube Video Background */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            zIndex: 1,
                            pointerEvents: 'none',
                        }}
                    >
                        <iframe
                            src="https://www.youtube.com/embed/5UO3jF272qk?autoplay=1&mute=1&loop=1&playlist=5UO3jF272qk&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&cc_load_policy=0"
                            title="Venue Background Video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen={false}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                width: '100vw',
                                height: '56.25vw',
                                minWidth: '177.77vh',
                                minHeight: '100vh',
                                transform: 'translate(-50%, -50%)',
                                border: 'none',
                            }}
                        />
                    </div>
                    {/* Dark cinematic overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(180deg, rgba(168, 122, 76, 0.4) 0%, rgba(248, 237, 226, 0.2) 40%, rgba(10,8,6,0.3) 70%, rgba(134, 105, 74, 0.85) 100%)',
                            zIndex: 2,
                            pointerEvents: 'none',
                        }}
                    />

                    {/* Banner Content Overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '10%',
                            left: 0,
                            right: 0,
                            zIndex: 3,
                            textAlign: 'center',
                            padding: '0 24px',
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                        >
                            <p
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '13px',
                                    letterSpacing: '5px',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-gold)',
                                    marginBottom: '16px',
                                    fontWeight: '600',
                                }}
                            >
                                The Venue
                            </p>
                            <h1
                                style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: 'clamp(36px, 6vw, 72px)',
                                    color: '#fff',
                                    fontWeight: '500',
                                    lineHeight: 1.1,
                                    marginBottom: '20px',
                                    textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                                }}
                            >
                                Where The Magic Happens
                            </h1>
                            <div
                                style={{
                                    width: '60px',
                                    height: '2px',
                                    background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))',
                                    margin: '0 auto',
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        style={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '8px',
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                width: '24px',
                                height: '40px',
                                borderRadius: '12px',
                                border: '2px solid rgba(212, 175, 55, 0.4)',
                                display: 'flex',
                                justifyContent: 'center',
                                paddingTop: '8px',
                            }}
                        >
                            <div
                                style={{
                                    width: '3px',
                                    height: '8px',
                                    borderRadius: '2px',
                                    background: 'var(--color-gold)',
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Hide YouTube branding with CSS overrides */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                            #venue-banner iframe {
                                pointer-events: none;
                            }
                        `
                    }} />
                </section>

                {/* Venue Details Section */}
                <section
                    className="venue-details-section"
                    style={{
                        position: 'relative',
                        padding: '100px 24px',
                        background: 'linear-gradient(180deg, #131211 0%, #33302d 50%, #91815f 100%)',
                    }}
                >
                    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '12px',
                                    letterSpacing: '4px',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-gold)',
                                    marginBottom: '16px',
                                    fontWeight: '600',
                                }}
                            >
                                Location
                            </p>
                            <h2
                                style={{
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: 'clamp(28px, 4vw, 48px)',
                                    color: '#fff',
                                    fontWeight: '500',
                                    marginBottom: '30px',
                                }}
                            >
                                An Unforgettable Setting
                            </h2>
                            <div
                                style={{
                                    width: '50px',
                                    height: '2px',
                                    background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))',
                                    margin: '0 auto 40px',
                                }}
                            />

                            {/* Accordions */}
                            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                                {/* Venue Accordion */}
                                <div style={{
                                    background: 'rgba(25, 23, 21, 0.6)',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    backdropFilter: 'blur(10px)',
                                }}>
                                    <button
                                        className="venue-accordion-btn"
                                        onClick={() => toggleAccordion('venue')}
                                        style={{
                                            width: '100%',
                                            padding: '24px 30px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: '#fff',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div style={{
                                                width: '40px', height: '40px', borderRadius: '50%',
                                                background: 'rgba(212, 175, 55, 0.1)', display: 'flex',
                                                justifyContent: 'center', alignItems: 'center'
                                            }}>
                                                <MapPin size={20} color="var(--color-gold)" />
                                            </div>
                                            <span className="venue-accordion-label" style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: '500' }}>Venue</span>
                                        </div>
                                        <motion.div animate={{ rotate: openAccordion === 'venue' ? 180 : 0 }}>
                                            <ChevronDown size={24} color="var(--color-gold)" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {openAccordion === 'venue' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="venue-accordion-body" style={{ padding: '0 30px 30px 30px' }}>
                                                    <div style={{
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
                                                        gap: '40px',
                                                        alignItems: 'center',
                                                    }}>
                                                        {/* Venue Details */}
                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                                            {/* Address */}
                                                            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                                                <div style={{
                                                                    width: '50px', height: '50px', borderRadius: '50%',
                                                                    background: 'rgba(212, 175, 55, 0.1)', display: 'flex',
                                                                    justifyContent: 'center', alignItems: 'center', flexShrink: 0,
                                                                }}>
                                                                    <MapPin size={24} color="var(--color-gold)" />
                                                                </div>
                                                                <div>
                                                                    <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>Address</h3>
                                                                    <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '16px', lineHeight: 1.6 }}>
                                                                        25-29, Knowledge Park II, <br />
                                                                        Greater Noida, Noida, <br />
                                                                        Uttar Pradesh 201310
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Phone */}
                                                            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                                                <div style={{
                                                                    width: '50px', height: '50px', borderRadius: '50%',
                                                                    background: 'rgba(212, 175, 55, 0.1)', display: 'flex',
                                                                    justifyContent: 'center', alignItems: 'center', flexShrink: 0,
                                                                }}>
                                                                    <Phone size={24} color="var(--color-gold)" />
                                                                </div>
                                                                <div>
                                                                    <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>Phone</h3>
                                                                    <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '16px' }}>
                                                                        0120 696 6555
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Website */}
                                                            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                                                <div style={{
                                                                    width: '50px', height: '50px', borderRadius: '50%',
                                                                    background: 'rgba(212, 175, 55, 0.1)', display: 'flex',
                                                                    justifyContent: 'center', alignItems: 'center', flexShrink: 0,
                                                                }}>
                                                                    <Globe size={24} color="var(--color-gold)" />
                                                                </div>
                                                                <div>
                                                                    <h3 style={{ color: '#fff', fontSize: '20px', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>Official Website</h3>
                                                                    <a
                                                                        href="https://www.expoinn.com/"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        style={{ color: 'var(--color-gold)', fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px' }}
                                                                    >
                                                                        https://www.expoinn.com/
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Map Card */}
                                                        <a
                                                            href="https://www.google.com/maps?sca_esv=541b5a2c80756556&sxsrf=ANbL-n74Tv-rInTbY9hxMLXukDPTyMMn5w:1779790873825&biw=1366&bih=641&dpr=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KfX5AQeKwQw5MZ1SCb7sT9yi&daddr=25-29,+Knowledge+Park+II,+Greater+Noida,+Noida,+Uttar+Pradesh+201310"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                display: 'block',
                                                                position: 'relative',
                                                                borderRadius: '20px',
                                                                overflow: 'hidden',
                                                                border: '1px solid rgba(212, 175, 55, 0.2)',
                                                                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                                                                transition: 'all 0.4s ease',
                                                                cursor: 'pointer',
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.transform = 'translateY(-8px)';
                                                                e.currentTarget.style.borderColor = 'var(--color-gold)';
                                                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(201, 152, 46, 0.2)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.transform = 'translateY(0)';
                                                                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
                                                            }}
                                                        >
                                                            <img
                                                                className="venue-map-img"
                                                                src={mapPreview}
                                                                alt="Google Maps Location Preview"
                                                                style={{
                                                                    width: '100%',
                                                                    height: '350px',
                                                                    objectFit: 'cover',
                                                                    display: 'block',
                                                                }}
                                                            />
                                                            <div style={{
                                                                position: 'absolute',
                                                                bottom: 0,
                                                                left: 0,
                                                                width: '100%',
                                                                padding: '20px',
                                                                background: 'linear-gradient(180deg, transparent 0%, rgba(10,8,6,0.95) 100%)',
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'flex-end',
                                                            }}>
                                                                <div style={{ textAlign: 'left' }}>
                                                                    <p style={{ color: 'var(--color-gold)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', marginBottom: '4px' }}>Get Directions</p>
                                                                    <p style={{ color: '#fff', fontSize: '18px', fontFamily: 'var(--font-serif)' }}>View on Google Maps</p>
                                                                </div>
                                                                <div style={{
                                                                    width: '40px', height: '40px', borderRadius: '50%',
                                                                    background: 'var(--color-gold)', display: 'flex',
                                                                    justifyContent: 'center', alignItems: 'center',
                                                                }}>
                                                                    <MapPin size={20} color="#000" />
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Airport Transfer Accordion */}
                                <div style={{
                                    background: 'rgba(25, 23, 21, 0.6)',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    backdropFilter: 'blur(10px)',
                                }}>
                                    <button
                                        onClick={() => toggleAccordion('airport')}
                                        style={{
                                            width: '100%',
                                            padding: '24px 30px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: '#fff',
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div style={{
                                                width: '40px', height: '40px', borderRadius: '50%',
                                                background: 'rgba(212, 175, 55, 0.1)', display: 'flex',
                                                justifyContent: 'center', alignItems: 'center'
                                            }}>
                                                <Plane size={20} color="var(--color-gold)" />
                                            </div>
                                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: '500' }}>Airport Transfer</span>
                                        </div>
                                        <motion.div animate={{ rotate: openAccordion === 'airport' ? 180 : 0 }}>
                                            <ChevronDown size={24} color="var(--color-gold)" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {openAccordion === 'airport' && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div style={{ padding: '0 30px 30px 30px' }}>
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                        <h3 style={{ color: '#fff', fontSize: '20px', fontFamily: 'var(--font-serif)' }}>Indira Gandhi International Airport (DEL)</h3>
                                                        <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '16px', lineHeight: 1.6 }}>
                                                            The closest major airport is Indira Gandhi International Airport in New Delhi. It is approximately a 60-90 minute drive from the venue depending on traffic conditions.
                                                        </p>
                                                        <h3 style={{ color: '#fff', fontSize: '18px', marginTop: '10px', fontFamily: 'var(--font-serif)' }}>Transportation Options:</h3>
                                                        <ul style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '16px', lineHeight: 1.6, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', margin: 0 }}>
                                                            <li><strong style={{ color: 'var(--color-gold)' }}>Taxi/Cabs:</strong> Prepaid taxis and app-based cabs (Uber, Ola) are readily available at the airport arrivals.</li>
                                                            <li><strong style={{ color: 'var(--color-gold)' }}>Metro:</strong> You can take the Airport Express Line to New Delhi Station, then transfer to the Yellow Line and Aqua Line to reach Greater Noida.</li>
                                                            <li><strong style={{ color: 'var(--color-gold)' }}>Private Transfer:</strong> We recommend arranging a private car or shuttle in advance for the most comfortable journey.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>

                        {/* Venue Feature Cards */}

                    </div>
                </section>

                <style dangerouslySetInnerHTML={{ __html: `
                    @media (max-width: 768px) {
                        #venue-page .venue-details-section { padding: 60px 16px !important; }
                    }
                    @media (max-width: 600px) {
                        #venue-page .venue-details-section { padding: 50px 12px !important; }
                        #venue-page .venue-accordion-btn { padding: 16px 18px !important; }
                        #venue-page .venue-accordion-label { font-size: 18px !important; }
                        #venue-page .venue-map-img { height: 220px !important; }
                        #venue-page .venue-accordion-body { padding: 0 18px 24px 18px !important; }
                    }
                `}} />
            </main>

            <Footer />
        </div>
    );
};

export default VenuePage;
