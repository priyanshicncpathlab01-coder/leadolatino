import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Plane, Car, Train, MapPin } from 'lucide-react';

const TransferFacilityPage = () => {
    return (
        <div id="transfer-page" className="app" style={{ background: '#0a0806', minHeight: '100vh' }}>
            <Navbar />

            <main>
                {/* Cinematic Video Banner — same as VenuePage */}
                <section
                    id="transfer-banner"
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
                            title="Transfer Facility Background Video"
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
                                Getting Here
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
                                Transfer Facility
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
                            #transfer-banner iframe {
                                pointer-events: none;
                            }
                        `
                    }} />
                </section>

                {/* Airport Transfer Details Section */}
                <section
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
                                Airport Transfer
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
                                Getting To The Venue
                            </h2>
                            <div
                                style={{
                                    width: '50px',
                                    height: '2px',
                                    background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))',
                                    margin: '0 auto 50px',
                                }}
                            />

                            {/* Airport Info Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                style={{
                                    background: 'rgba(25, 23, 21, 0.6)',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    borderRadius: '20px',
                                    padding: '40px',
                                    backdropFilter: 'blur(10px)',
                                    marginBottom: '30px',
                                    textAlign: 'left',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '20px' }}>
                                    <div style={{
                                        width: '50px', height: '50px', borderRadius: '50%',
                                        background: 'rgba(212, 175, 55, 0.1)', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center', flexShrink: 0,
                                    }}>
                                        <Plane size={24} color="var(--color-gold)" />
                                    </div>
                                    <div>
                                        <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                                            Indira Gandhi International Airport (DEL)
                                        </h3>
                                        <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '16px', lineHeight: 1.7 }}>
                                            The closest major airport is Indira Gandhi International Airport in New Delhi. It is approximately a 60–90 minute drive from the venue depending on traffic conditions.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Transportation Options */}
                            <h3 style={{
                                color: '#fff',
                                fontSize: '20px',
                                fontFamily: 'var(--font-serif)',
                                textAlign: 'left',
                                marginBottom: '20px',
                            }}>
                                Transportation Options
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    {
                                        Icon: Car,
                                        title: 'Taxi / Cabs',
                                        desc: 'Prepaid taxis and app-based cabs (Uber, Ola) are readily available at the airport arrivals. This is the most convenient option for direct door-to-door service.',
                                    },
                                    {
                                        Icon: Train,
                                        title: 'Metro',
                                        desc: 'You can take the Airport Express Line to New Delhi Station, then transfer to the Yellow Line and Aqua Line to reach Greater Noida. An affordable and reliable option.',
                                    },
                                    {
                                        Icon: MapPin,
                                        title: 'Private Transfer',
                                        desc: 'We recommend arranging a private car or shuttle in advance for the most comfortable and stress-free journey from the airport to the event venue.',
                                    },
                                ].map(({ Icon, title, desc }, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        style={{
                                            display: 'flex',
                                            gap: '20px',
                                            alignItems: 'flex-start',
                                            background: 'rgba(25, 23, 21, 0.6)',
                                            border: '1px solid rgba(212, 175, 55, 0.15)',
                                            borderRadius: '16px',
                                            padding: '28px',
                                            backdropFilter: 'blur(10px)',
                                            textAlign: 'left',
                                            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.08)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div style={{
                                            width: '50px', height: '50px', borderRadius: '50%',
                                            background: 'rgba(212, 175, 55, 0.1)', display: 'flex',
                                            justifyContent: 'center', alignItems: 'center', flexShrink: 0,
                                        }}>
                                            <Icon size={22} color="var(--color-gold)" />
                                        </div>
                                        <div>
                                            <h4 style={{ color: 'var(--color-gold)', fontSize: '16px', fontWeight: '700', marginBottom: '8px', letterSpacing: '0.5px' }}>
                                                {title}
                                            </h4>
                                            <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
                                                {desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Book Your Transfer CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                style={{ textAlign: 'center', marginTop: '50px' }}
                            >
                                <a
                                    href="mailto:info@leadolatino.com?subject=Book%20Airport%20Transfer"
                                    className="transfer-cta-btn"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '18px 44px',
                                        background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%)',
                                        color: '#0a0806',
                                        fontFamily: 'var(--font-sans)',
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        letterSpacing: '2.5px',
                                        textTransform: 'uppercase',
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        boxShadow: '0 8px 30px rgba(212, 175, 55, 0.35)',
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = '0 14px 40px rgba(212, 175, 55, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.35)';
                                    }}
                                >
                                    <Plane size={18} />
                                    Book Your Transfer
                                </a>
                                <p style={{
                                    color: 'rgba(255,255,255,0.35)',
                                    fontSize: '13px',
                                    marginTop: '16px',
                                    letterSpacing: '0.5px',
                                }}>
                                    Reach out to us and we will help coordinate your arrival.
                                </p>
                            </motion.div>

                        </motion.div>
                    </div>
                </section>

                <style dangerouslySetInnerHTML={{ __html: `
                    @media (max-width: 768px) {
                        #transfer-page .transfer-content-section { padding: 60px 16px !important; }
                    }
                    @media (max-width: 480px) {
                        #transfer-page .transfer-content-section { padding: 50px 12px !important; }
                        #transfer-page .transfer-card { padding: 20px !important; }
                        #transfer-page .transfer-airport-card { padding: 24px !important; }
                        #transfer-page .transfer-cta-btn { padding: 16px 28px !important; font-size: 12px !important; letter-spacing: 1.5px !important; }
                    }
                `}} />
            </main>

            <Footer />
        </div>
    );
};

export default TransferFacilityPage;
