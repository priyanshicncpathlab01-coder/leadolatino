import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Play, Star, Music, Award } from 'lucide-react';
import tonyImage from '../assets/All Artist Pictures - Same background/Tony Lozano.png';

const LivePerformancesPage = () => {
    return (
        <div className="app" style={{ background: '#0a0806', minHeight: '100vh' }}>
            <Navbar />

            <main>
                {/* Hero Section */}
                <section
                    style={{
                        position: 'relative',
                        padding: '160px 24px 80px',
                        background: 'linear-gradient(180deg, #131211 0%, #0a0806 100%)',
                        overflow: 'hidden',
                        textAlign: 'center'
                    }}
                >
                    {/* Abstract background blobs for premium feel */}
                    <div style={{
                        position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px',
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(0,0,0,0) 70%)',
                        filter: 'blur(40px)', zIndex: 0, pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px',
                        background: 'radial-gradient(circle, rgba(201, 152, 46, 0.05) 0%, rgba(0,0,0,0) 70%)',
                        filter: 'blur(50px)', zIndex: 0, pointerEvents: 'none'
                    }} />

                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <p style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '13px',
                                letterSpacing: '5px',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                                marginBottom: '20px',
                                fontWeight: '600',
                            }}>
                                World-Class Entertainment
                            </p>
                            <h1 style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(40px, 6vw, 72px)',
                                color: '#fff',
                                fontWeight: '500',
                                lineHeight: 1.1,
                                marginBottom: '25px',
                                textShadow: '0 10px 30px rgba(0,0,0,0.5)',
                            }}>
                                Live Performances
                            </h1>
                            <div style={{
                                width: '60px',
                                height: '2px',
                                background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))',
                                margin: '0 auto 30px',
                            }} />
                            <p style={{
                                color: 'var(--color-text-on-dark-muted)',
                                fontSize: 'clamp(16px, 2vw, 20px)',
                                lineHeight: 1.6,
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Experience the breathtaking artistry and electrifying energy of our international performers. A spectacular fusion of passion, rhythm, and unparalleled talent.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Video Showcase Section */}
                <section style={{ padding: '0 24px 100px', position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                position: 'relative',
                                width: '100%',
                                paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(212, 175, 55, 0.2)',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                                background: '#000',
                            }}
                        >
                            <iframe 
                                src="https://www.youtube.com/embed/1LifQqxD-0g?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1" 
                                title="Tony Lozano Live Performance" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none'
                                }}
                            ></iframe>
                        </motion.div>
                    </div>
                </section>

                {/* Artist Spotlight Section */}
                <section style={{ 
                    padding: '80px 24px 120px', 
                    background: 'linear-gradient(180deg, #0a0806 0%, #131211 50%, #0a0806 100%)',
                    position: 'relative'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ textAlign: 'center', marginBottom: '60px' }}
                        >
                            <p style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '12px',
                                letterSpacing: '4px',
                                textTransform: 'uppercase',
                                color: 'var(--color-gold)',
                                marginBottom: '16px',
                                fontWeight: '600',
                            }}>
                                Featured Artist
                            </p>
                            <h2 style={{
                                fontFamily: 'var(--font-serif)',
                                fontSize: 'clamp(32px, 5vw, 48px)',
                                color: '#fff',
                                fontWeight: '500',
                            }}>
                                Spotlight Showcase
                            </h2>
                        </motion.div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '60px',
                            alignItems: 'center',
                        }}>
                            {/* Artist Image Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{
                                    position: 'relative',
                                    borderRadius: '24px',
                                    padding: '20px',
                                    background: 'linear-gradient(145deg, rgba(25, 23, 21, 0.8) 0%, rgba(15, 14, 12, 0.4) 100%)',
                                    border: '1px solid rgba(212, 175, 55, 0.1)',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '-10px',
                                    width: '100px',
                                    height: '100px',
                                    borderTop: '2px solid var(--color-gold)',
                                    borderLeft: '2px solid var(--color-gold)',
                                    borderRadius: '24px 0 0 0',
                                    opacity: 0.5,
                                    zIndex: 0
                                }} />
                                <div style={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    aspectRatio: '4/5',
                                    zIndex: 1,
                                    background: 'linear-gradient(180deg, rgba(30,30,30,0) 0%, rgba(10,8,6,0.8) 100%)'
                                }}>
                                    <img 
                                        src={tonyImage} 
                                        alt="Tony Lozano" 
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'center 20%',
                                            transform: 'scale(1.05)',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        padding: '30px',
                                        background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                                    }}>
                                        <h3 style={{
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: '32px',
                                            color: '#fff',
                                            marginBottom: '8px'
                                        }}>
                                            Tony Lozano
                                        </h3>
                                        <p style={{
                                            color: 'var(--color-gold)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            fontSize: '12px',
                                            fontWeight: '600'
                                        }}>
                                            International Artist
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Artist Description */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
                            >
                                <div>
                                    <h3 style={{ 
                                        fontSize: '28px', 
                                        fontFamily: 'var(--font-serif)', 
                                        color: '#fff',
                                        marginBottom: '15px'
                                    }}>
                                        The Art of Movement
                                    </h3>
                                    <div style={{ width: '40px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }} />
                                    <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '18px', lineHeight: 1.8, marginBottom: '20px' }}>
                                        Tony Lozano brings an unprecedented level of passion, precision, and theatrical flair to the stage. Recognized globally for his extraordinary musicality and dynamic choreography, his performances are an immersive journey into the heart of Latin dance.
                                    </p>
                                    <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '18px', lineHeight: 1.8 }}>
                                        As one of the headline acts for the Lead O’Latino World Congress, prepare to be captivated by a showcase that blurs the line between rhythmic expression and pure magic.
                                    </p>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '10px' }}>
                                    {[
                                        { icon: Star, text: "Global Sensation" },
                                        { icon: Award, text: "Master Choreographer" },
                                        { icon: Music, text: "Exquisite Musicality" }
                                    ].map((item, index) => (
                                        <div key={index} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '12px 20px',
                                            background: 'rgba(212, 175, 55, 0.05)',
                                            border: '1px solid rgba(212, 175, 55, 0.2)',
                                            borderRadius: '50px',
                                        }}>
                                            <item.icon size={18} color="var(--color-gold)" />
                                            <span style={{ color: '#fff', fontSize: '14px', fontWeight: '500', letterSpacing: '0.5px' }}>
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LivePerformancesPage;
