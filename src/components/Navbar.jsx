import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.PNG';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isDarkPage = location.pathname === '/tickets' || location.pathname === '/workshops' || location.pathname === '/about';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getNavbarBg = () => {
        if (isDarkPage) return 'rgba(26, 21, 16, 0.98)'; // Dark gray/black for static pages
        return scrolled ? 'rgba(250, 248, 245, 0.95)' : 'transparent';
    };

    const getTextColor = () => {
        if (isDarkPage) return '#fff';
        return scrolled ? 'var(--color-text-heading)' : '#fff';
    };

    const navItems = [
        { name: 'Home', path: '/', isHash: true },
        { name: 'Dance Story', path: '/about', isHash: false },
        { name: 'Workshops', path: '/workshops', isHash: false },
        { name: 'Line Up', path: '/#line-up', isHash: true },
        { name: 'Tickets', path: '/tickets', isHash: false },
        { name: 'Gallery', path: '/#gallery', isHash: true },
    ];

    return (
        <header className="navbar" style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 1000,
            background: getNavbarBg(),
            backdropFilter: (scrolled || isDarkPage) ? 'blur(12px)' : 'none',
            borderBottom: (scrolled || isDarkPage) ? '1px solid rgba(201, 152, 46, 0.15)' : 'none',
            boxShadow: (scrolled || isDarkPage) ? '0 2px 20px rgba(0,0,0,0.2)' : 'none',
            transition: 'all 0.3s ease',
            padding: (isDarkPage) ? '8px 0' : (scrolled ? '12px 0' : '20px 0'),
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src={logo} 
                        alt="India World Logo" 
                        style={{ 
                            height: (isDarkPage) ? '60px' : (scrolled ? '80px' : '120px'), 
                            width: 'auto',
                            transition: 'height 0.3s ease'
                        }} 
                    />
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'none' }} className="nav-desktop">
                    <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {!item.isHash ? (
                                    <Link to={item.path} style={{
                                        textTransform: 'uppercase',
                                        fontSize: '13px',
                                        letterSpacing: '2px',
                                        fontWeight: '500',
                                        color: getTextColor(),
                                        transition: 'color 0.2s',
                                    }} className="nav-link">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <a href={location.pathname !== '/' ? item.path : item.path.replace('/', '')} style={{
                                        textTransform: 'uppercase',
                                        fontSize: '13px',
                                        letterSpacing: '2px',
                                        fontWeight: '500',
                                        color: getTextColor(),
                                        transition: 'color 0.2s',
                                        position: 'relative'
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
                style={{ overflow: 'hidden', background: isDarkPage ? 'var(--color-bg-dark-section)' : 'var(--color-bg-main)', borderBottom: isOpen ? '1px solid var(--color-border-gold)' : 'none' }}
            >
                <ul style={{ listStyle: 'none', padding: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'center' }}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            {!item.isHash ? (
                                <Link to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{ color: isDarkPage ? '#fff' : 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
                                    {item.name}
                                </Link>
                            ) : (
                                <a href={location.pathname !== '/' ? item.path : item.path.replace('/', '')}
                                    onClick={() => setIsOpen(false)}
                                    style={{ color: isDarkPage ? '#fff' : 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
                                    {item.name}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </header>
    );
};

export default Navbar;
