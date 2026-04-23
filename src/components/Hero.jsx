import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgVideo from '../assets/EXpolnn 3.mp4';

const Hero = () => {
    return (
        <section id="home" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '100px 0',
            overflow: 'hidden'
        }}>
            {/* Background Video / Overlay */}
            <video
                autoPlay
                loop
                muted
                playsInline
                src={bgVideo}
                style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    objectFit: 'cover',
                    zIndex: -2,
                    filter: 'brightness(0.9)'
                }}
            />
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                zIndex: -1,
            }} />

            {/* Sparks/Dust particles effect */}
            <div className="particles-container">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={`particle p-${i}`}></div>
                ))}
            </div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div style={{ display: 'inline-block', marginBottom: '20px' }} className="animate-float">
                        <span style={{ color: 'var(--color-gold)', fontSize: '40px' }}>⚜️</span>
                    </div>

                    <h2 style={{
                        color: 'var(--color-gold)',
                        letterSpacing: '5px',
                        textTransform: 'uppercase',
                        fontSize: '14px',
                        marginBottom: '10px',
                        textShadow: '0 1px 4px rgba(0,0,0,0.3)'
                    }}>
                        India World Dance Congress
                    </h2>

                    <h1 style={{
                        fontSize: 'clamp(40px, 8vw, 80px)',
                        margin: '20px 0',
                        background: 'linear-gradient(to right, #fff, var(--color-gold-light))',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        lineHeight: '1.1',
                        textShadow: 'none'
                    }}>
                        Welcome to the<br />Luxury Dance
                    </h1>

                    <p style={{
                        maxWidth: '600px',
                        margin: '0 auto 40px',
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: '18px',
                        textShadow: '0 1px 4px rgba(0,0,0,0.2)'
                    }}>
                        Experience the ultimate dance festival in India. World-class performances, workshops, and luxury.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/tickets" className="btn-gold" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '160px' }}>Buy Tickets</Link>
                        <a href="#line-up" className="btn-outline" style={{ color: '#fff', borderColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '160px' }}>Explore Line Up</a>
                    </div>
                </motion.div>
            </div>

            <style>{`
        .particles-container { position: absolute; top:0; left:0; width:100%; height:100%; z-index:-1; overflow:hidden; }
        .particle { position: absolute; width: 4px; height: 4px; background: var(--color-gold); border-radius: 50%; opacity: 0; }
        ${[...Array(20)].map((_, i) => `
          .p-${i} {
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${3 + Math.random() * 4}s infinite ${Math.random() * 2}s;
          }
        `).join('')}
        @keyframes float-particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-100px) scale(0); opacity: 0; }
        }
      `}</style>
        </section>

    );
};

export default Hero;
