import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.PNG';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isDarkPage = location.pathname === '/tickets' || location.pathname === '/workshops' || location.pathname === '/about' || location.pathname === '/jack-and-jill' || location.pathname === '/lineup' || location.pathname === '/venue';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getNavbarBg = () => {
        if (isDarkPage) return 'rgba(10, 8, 6, 0.98)'; // Deep dark for static pages
        return scrolled ? 'rgba(250, 248, 245, 0.98)' : 'transparent';
    };

    const getTextColor = () => {
        if (isDarkPage) return '#fff';
        return scrolled ? 'var(--color-text-heading)' : '#fff';
    };

    const navItems = [
        { name: 'Home', path: '/', isHash: true },
        { name: 'Schedule', path: '/workshops', isHash: false },
        { name: 'Artists', path: '/lineup', isHash: false },
        { name: 'Tickets', path: '/tickets', isHash: false },
        { name: 'Venue', path: '/venue', isHash: false },

        { name: 'Championships', path: '/jack-and-jill', isHash: false },
        { name: 'About', path: '/about', isHash: false },

    ];

    return (
        <header className="navbar" style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 1000,
            background: getNavbarBg(),
            backdropFilter: (scrolled || isDarkPage) ? 'blur(15px)' : 'none',
            borderBottom: (scrolled || isDarkPage) ? '1px solid rgba(212, 175, 55, 0.1)' : 'none',
            boxShadow: (scrolled || isDarkPage) ? '0 10px 30px rgba(0,0,0,0.1)' : 'none',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            padding: scrolled ? '10px 0' : '20px 0',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={logo}
                        alt="India World Logo"
                        style={{
                            height: scrolled ? '60px' : '90px',
                            width: 'auto',
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            filter: (scrolled && !isDarkPage) ? 'none' : 'brightness(1.1)'
                        }}
                    />
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'none' }} className="nav-desktop">
                    <ul style={{ display: 'flex', gap: '35px', listStyle: 'none', margin: 0, padding: 0 }}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {!item.isHash ? (
                                    <Link to={item.path} style={{
                                        textTransform: 'uppercase',
                                        fontSize: '12px',
                                        letterSpacing: '2px',
                                        fontWeight: '600',
                                        color: getTextColor(),
                                        transition: 'all 0.3s ease',
                                    }} className="nav-link">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a href={location.pathname !== '/' ? item.path : item.path.replace('/', '')} style={{
                                        textTransform: 'uppercase',
                                        fontSize: '12px',
                                        letterSpacing: '2px',
                                        fontWeight: '600',
                                        color: getTextColor(),
                                        transition: 'all 0.3s ease',
                                    }}
                                        className="nav-link"
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: isDarkPage ? 'var(--color-gold)' : (scrolled ? 'var(--color-gold-dark)' : '#fff'), cursor: 'pointer', display: 'flex' }} className="nav-mobile-btn">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @media (min-width: 992px) {
                        .nav-desktop { display: block !important; }
                        .nav-mobile-btn { display: none !important; }
                    }
                    .nav-link {
                        position: relative;
                        opacity: 0.8;
                    }
                    .nav-link:hover {
                        opacity: 1;
                        color: var(--color-gold) !important;
                    }
                    .nav-link::after {
                        content: '';
                        position: absolute;
                        bottom: -5px;
                        left: 50%;
                        width: 0;
                        height: 2px;
                        background: var(--color-gold);
                        transition: all 0.3s ease;
                        transform: translateX(-50%);
                    }
                    .nav-link:hover::after {
                        width: 100%;
                    }
                ` }} />
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{
                            overflow: 'hidden',
                            background: 'rgba(10, 8, 6, 0.98)',
                            borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
                            backdropFilter: 'blur(20px)'
                        }}
                    >
                        <ul style={{ listStyle: 'none', padding: '40px 20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '25px', textAlign: 'center' }}>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    {!item.isHash ? (
                                        <Link to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            style={{
                                                color: '#fff',
                                                textTransform: 'uppercase',
                                                letterSpacing: '3px',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                display: 'block'
                                            }}>
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <a href={location.pathname !== '/' ? item.path : item.path.replace('/', '')}
                                            onClick={() => setIsOpen(false)}
                                            style={{
                                                color: '#fff',
                                                textTransform: 'uppercase',
                                                letterSpacing: '3px',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                display: 'block'
                                            }}>
                                            {item.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;

