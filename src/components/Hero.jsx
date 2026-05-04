import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgVideo from '../assets/lol vid.mp4';
import { Bold } from 'lucide-react';

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

            <div className="container" style={{ textAlign: 'center', zIndex: 1, position: 'relative', paddingTop: '80px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >


                    <h1 style={{
                        color: 'var(--color-gold)',
                        letterSpacing: '8px',
                        textTransform: 'uppercase',
                        fontSize: 'clamp(48px, 10vw, 90px)',
                        marginBottom: '30px',
                        textShadow: '0 4px 15px rgba(0,0,0,0.6)',
                        fontWeight: '800',
                        fontFamily: "var(--font-serif)",
                        lineHeight: '1.1'
                    }}>
                        India World Dance Congress
                    </h1>

                    <h2 style={{
                        fontSize: '16px',
                        margin: '20px 0',
                        background: 'linear-gradient(to right, #fff, var(--color-gold-light))',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        lineHeight: '1.2',
                        fontWeight: '600',
                        letterSpacing: '5px',
                        textTransform: 'uppercase'
                    }}>
                        Welcome to the Luxury Dance
                    </h2>

                    <h3 style={{
                        maxWidth: '800px',
                        margin: '0 auto 80px',
                        color: '#fff',
                        fontSize: 'clamp(32px, 6vw, 48px)',
                        fontFamily: 'var(--font-sans)',
                        letterSpacing: '3px',
                        fontWeight: '900',
                        textShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
                        textTransform: 'uppercase'
                    }}>
                        17 to 21 December 2026
                    </h3>

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
