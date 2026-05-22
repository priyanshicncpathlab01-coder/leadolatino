import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/lol vid.mp4';
import logoImg from '../assets/Logo.PNG';

const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <section id="home" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 0',
            overflow: 'hidden',
            background: '#000'
        }}>
            {/* Background Video / Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                overflow: 'hidden',
                zIndex: 0,
                background: '#000',
            }}>
                <AnimatePresence>
                    {!videoLoaded && (
                        <motion.div
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#000'
                            }}
                        >
                            <motion.img 
                                initial={{ opacity: 0.5, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
                                src={logoImg} 
                                alt="Lead O Latino Logo" 
                                style={{ width: 'clamp(150px, 25vw, 350px)', height: 'auto', objectFit: 'contain' }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                <motion.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: videoLoaded ? 1 : 0 }}
                    transition={{ duration: 1.5 }}
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onCanPlay={() => setVideoLoaded(true)}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        transform: 'translate(-50%, -50%)',
                        border: 'none',
                        pointerEvents: 'none',
                        objectFit: 'cover',
                        filter: 'brightness(0.85) contrast(1.05)',
                        zIndex: 2
                    }}
                />
            </div>
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(10, 8, 6, 0.65) 100%)',
                zIndex: 1,
            }} />

            {/* Premium Gold Dust Particles */}
            <div className="gold-dust-container">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="dust-particle"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -200],
                            opacity: [0, 0.4, 0],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        style={{
                            position: 'absolute',
                            width: Math.random() * 3 + 1 + 'px',
                            height: Math.random() * 3 + 1 + 'px',
                            background: 'var(--color-gold-light)',
                            borderRadius: '50%',
                            filter: 'blur(1px)',
                            boxShadow: '0 0 10px var(--color-gold)',
                            zIndex: 2
                        }}
                    />
                ))}
            </div>

            <div className="container" style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '0px' }}
                        animate={{ opacity: 1, letterSpacing: '8px' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        style={{
                            display: 'block',
                            color: 'var(--color-gold)',
                            fontSize: '14px',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            marginBottom: '20px'
                        }}
                    >
                        
                    </motion.span>

                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                        style={{
                            textTransform: 'uppercase',
                            fontSize: 'clamp(40px, 12vw, 120px)',
                            marginBottom: '30px',
                            fontWeight: '900',
                            fontFamily: "var(--font-serif)",
                            lineHeight: '0.95',
                            letterSpacing: '-1px',
                            background: 'linear-gradient(135deg, var(--color-gold-light, #e4cb66) 0%, var(--color-gold, #d4af37) 50%, var(--color-gold-dark, #9e7720) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 15px 40px rgba(29, 29, 28, 0.25)',
                            padding: '0 10px'
                        }}>
                        Lead O Latino <br />
                        <span style={{ 
                            fontSize: 'clamp(20px, 4vw, 45px)',
                            color: '#fff', 
                            fontStyle: 'italic', 
                            letterSpacing: 'clamp(4px, 1vw, 12px)',
                            display: 'block',
                            marginTop: '20px',
                            WebkitTextFillColor: 'initial',
                            background: 'none',
                            textShadow: '0 5px 15px rgba(0,0,0,0.5)',
                            fontWeight: '300'
                        }}>World Dance Congress</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        style={{
                            fontSize: 'clamp(16px, 3vw, 20px)',
                            margin: '0 auto 55px',
                            color: 'rgba(255,255,255,0.85)',
                            maxWidth: '700px',
                            lineHeight: '1.8',
                            letterSpacing: '1px',
                            fontWeight: '300'
                        }}
                    >
                        Experience the ultimate fusion of luxury and rhythm. <br />
                        <span style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '15px', 
                            marginTop: '35px',
                            padding: '15px 40px',
                            background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.15), transparent)',
                            borderTop: '1px solid rgba(212, 175, 55, 0.4)',
                            borderBottom: '1px solid rgba(212, 175, 55, 0.4)',
                            position: 'relative'
                        }}>
                            <span style={{ position: 'absolute', top: '-1px', left: '10%', width: '80%', height: '1px', background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 100%)' }} />
                            <span style={{ position: 'absolute', bottom: '-1px', left: '10%', width: '80%', height: '1px', background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 100%)' }} />
                            
                            <span style={{ 
                                fontWeight: '700', 
                                color: 'var(--color-gold)',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                fontSize: 'clamp(16px, 3vw, 22px)',
                                textShadow: '0 0 15px rgba(212,175,55,0.7)'
                            }}>
                                17<sup style={{ fontSize: '0.65em', textTransform: 'lowercase' }}>th</sup> To 21<sup style={{ fontSize: '0.65em', textTransform: 'lowercase' }}>st</sup>
                            </span>
                            
                            <span style={{ 
                                fontWeight: '300', 
                                color: '#fff',
                                letterSpacing: '6px',
                                textTransform: 'uppercase',
                                fontSize: 'clamp(14px, 2.5vw, 18px)'
                            }}>Dec 2026</span>
                        </span>
                    </motion.p>

                    <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/tickets" className="btn-gold" style={{
                            padding: '18px 45px',
                            fontSize: '13px',
                            borderRadius: '4px',
                            background: 'linear-gradient(135deg, #d4af37, #9e7720)'
                        }}>
                            Buy Tickets
                        </Link>
                        <Link to="/lineup" className="btn-outline" style={{
                            color: '#c5b274ff',
                            borderColor: 'rgba(255,255,255,0.3)',
                            padding: '18px 45px',
                            fontSize: '13px',
                            borderRadius: '4px'
                        }}>
                            The Line Up
                        </Link>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .gold-dust-container {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 2;
                }
                .btn-outline:hover {
                    border-color: var(--color-gold) !important;
                    background: rgba(212, 175, 55, 0.05) !important;
                }
            `}</style>
        </section>
    );
};

export default Hero;

