import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="navbar" style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 1000,
            background: scrolled ? 'rgba(250, 248, 245, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(201, 152, 46, 0.15)' : 'none',
            boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
            transition: 'all 0.3s ease',
            padding: scrolled ? '12px 0' : '20px 0',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(201,152,46,0.3)' }}>
                        <span style={{ fontFamily: 'var(--font-serif)', color: '#fff', fontWeight: 'bold', fontSize: '18px' }}>IW</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: '600', letterSpacing: '1px', color: scrolled ? 'var(--color-text-heading)' : '#fff' }}>INDIA WORLD</span>
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'none' }} className="nav-desktop">
                    <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
                        {['Home', 'Workshops', 'Line Up', 'Tickets', 'Gallery'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase().replace(' ', '-')}`} style={{
                                    textTransform: 'uppercase',
                                    fontSize: '13px',
                                    letterSpacing: '2px',
                                    fontWeight: '500',
                                    color: scrolled ? 'var(--color-text-body)' : '#fff',
                                    transition: 'color 0.2s',
                                    position: 'relative'
                                }}
                                    className="nav-link"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: scrolled ? 'var(--color-gold-dark)' : '#fff', cursor: 'pointer', display: 'flex' }} className="nav-mobile-btn">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <style>{`
          @media (min-width: 768px) {
            .nav-desktop { display: block !important; }
            .nav-mobile-btn { display: none !important; }
          }
          .nav-link:hover { color: var(--color-gold) !important; }
        `}</style>
            </div>

            {/* Mobile Nav */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                style={{ overflow: 'hidden', background: 'var(--color-bg-main)', borderBottom: isOpen ? '1px solid var(--color-border-gold)' : 'none' }}
            >
                <ul style={{ listStyle: 'none', padding: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'center' }}>
                    {['Home', 'Workshops', 'Line Up', 'Tickets', 'Gallery'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`}
                                onClick={() => setIsOpen(false)}
                                style={{ color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </header>
    );
};

export default Navbar;
