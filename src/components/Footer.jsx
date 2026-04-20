import React from 'react';
import { MessageCircle, Camera, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#1a1510', padding: '60px 0 30px', borderTop: '2px solid var(--color-gold)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ color: 'var(--color-gold)', fontSize: '20px', marginBottom: '20px' }}>India World Dance Congress</h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>The luxury dance experience you've been waiting for. Join us and make memories that will last a lifetime.</p>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '20px' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.6)', gap: '10px', display: 'flex', flexDirection: 'column' }}>
                            <li><a href="#home" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.6)' }}>Home</a></li>
                            <li><a href="#about" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.6)' }}>About</a></li>
                            <li><a href="#buy-tickets" style={{ transition: 'color 0.2s', color: 'rgba(255,255,255,0.6)' }}>Tickets</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '20px' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" style={{ color: 'var(--color-gold)', display: 'block', padding: '10px', background: 'rgba(201,152,46,0.15)', borderRadius: '50%' }}><MessageCircle size={20} /></a>
                            <a href="#" style={{ color: 'var(--color-gold)', display: 'block', padding: '10px', background: 'rgba(201,152,46,0.15)', borderRadius: '50%' }}><Camera size={20} /></a>
                            <a href="#" style={{ color: 'var(--color-gold)', display: 'block', padding: '10px', background: 'rgba(201,152,46,0.15)', borderRadius: '50%' }}><Globe size={20} /></a>
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
