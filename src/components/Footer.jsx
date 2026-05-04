import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Camera, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#1a1510', padding: '60px 0 30px', borderTop: '2px solid var(--color-gold)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ color: 'var(--color-gold)', fontSize: '24px', marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>India World Dance Congress</h3>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: '1.8' }}>
                            India’s premier Afro-Latin dance festival, bringing together the global Salsa, Bachata, Kizomba, and Zouk community.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '20px', fontFamily: 'var(--font-serif)', letterSpacing: '1px' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.6)', gap: '12px', display: 'flex', flexDirection: 'column', fontSize: '14px' }}>
                            <li><a href="#home" className="footer-link">Home</a></li>
                            <li><Link to="/about" className="footer-link">Our Story</Link></li>
                            <li><a href="#line-up" className="footer-link">Line Up</a></li>
                            <li><Link to="/tickets" className="footer-link">Buy Tickets</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '20px', fontFamily: 'var(--font-serif)', letterSpacing: '1px' }}>Connect</h4>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {[MessageCircle, Camera, Globe].map((Icon, i) => (
                                <a key={i} href="#" style={{ 
                                    color: 'var(--color-gold)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    width: '45px', 
                                    height: '45px', 
                                    background: 'rgba(255,255,255,0.03)', 
                                    borderRadius: '12px',
                                    border: '1px solid rgba(201,152,46,0.2)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(201,152,46,0.1)';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '12px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <p>&copy; {new Date().getFullYear()} India World Dance Congress. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
