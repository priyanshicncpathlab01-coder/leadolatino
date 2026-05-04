import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tickets = () => {
    const passes = [
        { 
            title: 'Bronze Pass', 
            price: '₹10,999', 
            color: '#CD7F32',
            features: [
                'Access to 120+ Workshops',
                '5 Social Nights',
                'Tony Lozano Live Concert',
                'Competitions and Battles',
                'Shows and Theme Parties'
            ] 
        },
        { 
            title: 'Silver Pass', 
            price: '₹25,999', 
            color: '#A9A9A9',
            features: [
                '3 Nights Stay (Triple Sharing)',
                '9 Delicious Meals',
                'Cricket Match',
                'Fun & Surprise activities',
                'Access to 120+ Workshops',
                '5 Social Nights',
                'Tony Lozano Live Concert'
            ] 
        },
        { 
            title: 'Gold Pass', 
            price: '₹31,999', 
            color: '#D4AF37',
            popular: true,
            features: [
                '3 Nights Stay (Double Sharing)',
                '9 Delicious Meals',
                'Cricket Match',
                'Fun & Surprise activities',
                'Access to 120+ Workshops',
                '5 Social Nights',
                'Tony Lozano Live Concert'
            ] 
        },
        { 
            title: 'VIP Pass', 
            price: '₹44,999', 
            color: '#1A1510',
            features: [
                '3 Nights Stay (Single Occupancy)',
                '9 Delicious Meals',
                'VIP PARTY (with Artists)',
                '2 Master Classes of choice',
                'Artist Meet & Greet',
                'Access to 120+ Workshops',
                'Tony Lozano Live Concert'
            ] 
        }
    ];

    return (
        <section id="tickets" style={{ padding: '120px 0', background: '#120e0a', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Glows */}
            <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)', zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span style={{ color: 'var(--color-gold)', fontSize: '13px', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}>Pricing Plans</span>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '20px' }}>Choose Your Pass</h2>
                    <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), transparent)', margin: '0 auto', borderRadius: '3px' }} />
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(4, 1fr)', 
                    gap: '24px', 
                    alignItems: 'stretch',
                    paddingTop: '40px' // Space for badges
                }}>
                    {passes.map((pass, index) => {
                        const isVIP = pass.title === 'VIP Pass';
                        return (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
                                style={{
                                    background: isVIP ? 'linear-gradient(145deg, #1a1510, #2c241b)' : 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    border: isVIP ? '2px solid var(--color-gold)' : '1px solid rgba(255, 255, 255, 0.08)',
                                    borderRadius: '32px', 
                                    padding: '50px 25px', 
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    zIndex: isVIP ? 2 : 1,
                                    // Removed overflow: hidden from here to allow badges to stand out
                                }}>

                                {/* Shimmer Overlay for VIP only - contained within the border radius */}
                                {isVIP && (
                                    <div className="premium-shimmer" style={{ 
                                        position: 'absolute', 
                                        inset: 0, 
                                        borderRadius: '30px', 
                                        pointerEvents: 'none', 
                                        overflow: 'hidden',
                                        zIndex: 0
                                    }} />
                                )}

                                {pass.popular && !isVIP && (
                                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--color-gold)', color: '#000', padding: '6px 20px', borderRadius: '20px', fontSize: '11px', fontWeight: '900', zIndex: 3, letterSpacing: '1px', boxShadow: '0 5px 15px rgba(212, 175, 55, 0.3)' }}>MOST POPULAR</div>
                                )}
                                
                                {isVIP && (
                                    <div style={{ 
                                        position: 'absolute', 
                                        top: 0, 
                                        left: '50%', 
                                        transform: 'translate(-50%, -50%)', 
                                        background: 'linear-gradient(90deg, #d4af37, #f5d97a, #9e7720)', 
                                        color: '#000', 
                                        padding: '8px 30px', 
                                        borderRadius: '30px', 
                                        fontSize: '11px', 
                                        fontWeight: '900', 
                                        letterSpacing: '2px', 
                                        zIndex: 3, 
                                        boxShadow: '0 10px 25px rgba(212, 175, 55, 0.5)',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        ULTIMATE EXPERIENCE
                                    </div>
                                )}

                                <div style={{ textAlign: 'center', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
                                    <h3 style={{ fontSize: '22px', marginBottom: '15px', color: isVIP ? 'var(--color-gold)' : '#fff', fontFamily: 'var(--font-serif)', letterSpacing: '2px', textTransform: 'uppercase' }}>{pass.title}</h3>
                                    <div style={{ fontSize: '48px', color: '#fff', fontFamily: 'var(--font-serif)', fontWeight: '700' }}>
                                        <span style={{ fontSize: '24px', color: 'var(--color-gold)', marginRight: '5px' }}>{pass.price.slice(0, 1)}</span>
                                        {pass.price.slice(1)}
                                    </div>
                                </div>
                                
                                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)', margin: '0 auto 30px', width: '100%', position: 'relative', zIndex: 1 }} />

                                <ul style={{ listStyle: 'none', marginBottom: '40px', flex: 1, padding: 0, position: 'relative', zIndex: 1 }}>
                                    {pass.features.map((f, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '18px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.4' }}>
                                            <Check size={16} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <Link 
                                    to="/tickets" 
                                    className="btn-gold" 
                                    style={{ 
                                        width: '100%', 
                                        display: 'block', 
                                        textAlign: 'center',
                                        background: isVIP ? 'linear-gradient(135deg, #d4af37, #9e7720)' : (pass.popular ? 'var(--color-gold)' : 'transparent'),
                                        border: (isVIP || pass.popular) ? 'none' : '1px solid var(--color-gold)',
                                        color: (isVIP || pass.popular) ? '#000' : 'var(--color-gold)',
                                        fontWeight: '800',
                                        padding: '18px 0',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                >
                                    {isVIP ? 'Go Exclusive' : 'Select Pass'}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 1200px) {
                    #tickets div[style*="grid-template-columns: repeat(4"] {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 600px) {
                    #tickets div[style*="grid-template-columns: repeat(4"] {
                        grid-template-columns: 1fr !important;
                    }
                }
            ` }} />
        </section>
    );
};

export default Tickets;
