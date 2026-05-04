import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.PNG';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isDarkPage = location.pathname === '/tickets' || location.pathname === '/workshops' || location.pathname === '/about' || location.pathname === '/jack-and-jill';

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
        { name: 'About us', path: '/about', isHash: false },
        { name: 'Workshops', path: '/workshops', isHash: false },
        { name: 'Line Up', path: '/#line-up', isHash: true },
        { name: 'Tickets', path: '/tickets', isHash: false },
        { name: 'Jack & Jill', path: '/jack-and-jill', isHash: false },
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
                            height: (isDarkPage) ? '80px' : (scrolled ? '100px' : '160px'), 
                            width: 'auto',
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
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

                <style dangerouslySetInnerHTML={{ __html: `
                    @media (min-width: 768px) {
                        .nav-desktop { display: block !important; }
                        .nav-mobile-btn { display: none !important; }
                    }
                    .nav-link {
                        position: relative;
                        padding-bottom: 4px;
                    }
                    .nav-link::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 0;
                        height: 2px;
                        background: var(--color-gold);
                        transition: width 0.3s ease;
                    }
                    .nav-link:hover::after {
                        width: 100%;
                    }
                    .nav-link:hover { 
                        color: var(--color-gold) !important; 
                    }
                    @keyframes slideIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .navbar-active {
                        animation: slideIn 0.4s ease forwards;
                    }
                ` }} />
            </div>

            {/* Mobile Nav */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                style={{ 
                    overflow: 'hidden', 
                    background: (isDarkPage || isOpen) ? 'rgba(26, 21, 16, 0.98)' : 'rgba(250, 248, 245, 0.98)', 
                    borderBottom: isOpen ? '1px solid var(--color-border-gold)' : 'none',
                    backdropFilter: 'blur(20px)'
                }}
            >
                <ul style={{ listStyle: 'none', padding: '30px 20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'center' }}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            {!item.isHash ? (
                                <Link to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    style={{ 
                                        color: (isDarkPage || isOpen) ? '#fff' : 'var(--color-gold-dark)', 
                                        textTransform: 'uppercase', 
                                        letterSpacing: '3px', 
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}>
                                    {item.name}
                                </Link>
                            ) : (
                                <a href={location.pathname !== '/' ? item.path : item.path.replace('/', '')}
                                    onClick={() => setIsOpen(false)}
                                    style={{ 
                                        color: (isDarkPage || isOpen) ? '#fff' : 'var(--color-gold-dark)', 
                                        textTransform: 'uppercase', 
                                        letterSpacing: '3px', 
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}>
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
