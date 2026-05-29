import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.PNG';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScheduleHovered, setIsScheduleHovered] = useState(false);
    const [isScheduleMobileOpen, setIsScheduleMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isDarkPage = location.pathname === '/tickets' || location.pathname === '/workshops' || location.pathname === '/about' || location.pathname === '/jack-and-jill' || location.pathname === '/lineup' || location.pathname === '/venue' || location.pathname === '/workshop-schedule';

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
        { 
            name: 'Schedule', 
            path: '#', 
            isHash: false,
            dropdown: [
                { name: 'Event Schedule', path: '/workshops' },
                { name: 'Workshop Schedule', path: '/workshop-schedule' }
            ]
        },
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
                    <ul style={{ display: 'flex', gap: '35px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                        {navItems.map((item) => (
                            <li 
                                key={item.name}
                                style={{ position: 'relative' }}
                                onMouseEnter={() => item.dropdown && setIsScheduleHovered(true)}
                                onMouseLeave={() => item.dropdown && setIsScheduleHovered(false)}
                            >
                                {item.dropdown ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', padding: '10px 0' }}>
                                        <span style={{
                                            textTransform: 'uppercase',
                                            fontSize: '12px',
                                            letterSpacing: '2px',
                                            fontWeight: '600',
                                            color: getTextColor(),
                                            transition: 'all 0.3s ease',
                                        }} className="nav-link">
                                            {item.name}
                                        </span>
                                        <ChevronDown 
                                            size={14} 
                                            style={{ 
                                                color: getTextColor(), 
                                                transform: isScheduleHovered ? 'rotate(180deg)' : 'rotate(0deg)', 
                                                transition: 'transform 0.3s ease' 
                                            }} 
                                        />
                                        
                                        <AnimatePresence>
                                            {isScheduleHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '100%',
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        background: 'rgba(10, 8, 6, 0.98)',
                                                        border: '1px solid rgba(212, 175, 55, 0.2)',
                                                        borderRadius: '8px',
                                                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                                        padding: '12px 0',
                                                        minWidth: '220px',
                                                        marginTop: '5px',
                                                        zIndex: 1001,
                                                        pointerEvents: 'auto',
                                                    }}
                                                >
                                                    <div style={{
                                                        position: 'absolute',
                                                        top: '-6px',
                                                        left: '50%',
                                                        transform: 'translateX(-50%) rotate(45deg)',
                                                        width: '10px',
                                                        height: '10px',
                                                        background: 'rgba(10, 8, 6, 0.98)',
                                                        borderLeft: '1px solid rgba(212, 175, 55, 0.2)',
                                                        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                                                    }} />
                                                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                                        {item.dropdown.map((subItem) => (
                                                            <li key={subItem.name}>
                                                                <Link 
                                                                    to={subItem.path} 
                                                                    className="dropdown-link"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : !item.isHash ? (
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
                    .dropdown-link {
                        display: block;
                        padding: 10px 20px;
                        color: #fff;
                        text-transform: uppercase;
                        font-size: 11px;
                        letter-spacing: 1.5px;
                        font-weight: 600;
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        text-align: left;
                    }
                    .dropdown-link:hover {
                        color: var(--color-gold) !important;
                        background: rgba(212, 175, 55, 0.08);
                        padding-left: 25px !important;
                    }
                    .mobile-dropdown-link {
                        transition: all 0.3s ease;
                    }
                    .mobile-dropdown-link:hover {
                        color: var(--color-gold) !important;
                        letter-spacing: 4px !important;
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
                        <ul style={{ listStyle: 'none', padding: '40px 20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '25px', alignItems: 'center' }}>
                            {navItems.map((item) => (
                                <li key={item.name} style={{ width: '100%', textAlign: 'center' }}>
                                    {item.dropdown ? (
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <button 
                                                onClick={() => setIsScheduleMobileOpen(!isScheduleMobileOpen)}
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    color: '#fff',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '3px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '8px',
                                                    cursor: 'pointer',
                                                    padding: '10px 0',
                                                    width: '100%',
                                                }}
                                            >
                                                {item.name}
                                                <ChevronDown 
                                                    size={16} 
                                                    style={{ 
                                                        color: 'var(--color-gold)',
                                                        transform: isScheduleMobileOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                                                        transition: 'transform 0.3s ease' 
                                                    }} 
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {isScheduleMobileOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        style={{ overflow: 'hidden', width: '100%', background: 'rgba(212, 175, 55, 0.04)', borderRadius: '8px', marginTop: '5px' }}
                                                    >
                                                        <ul style={{ listStyle: 'none', padding: '15px 0', margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                                            {item.dropdown.map((subItem) => (
                                                                <li key={subItem.name}>
                                                                    <Link 
                                                                        to={subItem.path}
                                                                        onClick={() => {
                                                                            setIsOpen(false);
                                                                            setIsScheduleMobileOpen(false);
                                                                        }}
                                                                        style={{
                                                                            color: 'var(--color-gold-light)',
                                                                            textTransform: 'uppercase',
                                                                            letterSpacing: '2px',
                                                                            fontSize: '12px',
                                                                            fontWeight: '600',
                                                                            display: 'block'
                                                                        }}
                                                                        className="mobile-dropdown-link"
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : !item.isHash ? (
                                        <Link to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            style={{
                                                color: '#fff',
                                                textTransform: 'uppercase',
                                                letterSpacing: '3px',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                display: 'block',
                                                padding: '10px 0'
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
                                                display: 'block',
                                                padding: '10px 0'
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


