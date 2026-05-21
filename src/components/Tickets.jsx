import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tickets = () => {
    const passes = [
        { 
            title: 'Bronze Pass', 
            price: '10,999', 
            icon: <Zap size={24} />,
            gradient: 'linear-gradient(145deg, rgba(15, 15, 15, 0.15), rgba(0, 0, 0, 0.4))',
            borderColor: 'rgba(223, 207, 63, 0.88)',
            color: '#1a1d1c',
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
            price: '25,999', 
            icon: <Star size={24} />,
            gradient: 'linear-gradient(145deg, rgba(59, 19, 19, 0.15), rgba(0, 0, 0, 0.4))',
            borderColor: 'rgba(226, 216, 75, 0.93)',
            color: '#fffefe',
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
            price: '31,999', 
            icon: <Crown size={24} />,
            popular: true,
            gradient: 'linear-gradient(145deg, rgba(212, 175, 55, 0.15), rgba(0, 0, 0, 0.4))',
            borderColor: 'rgba(212, 175, 55, 0.4)',
            color: '#D4AF37',
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
            price: '44,999', 
            icon: <Shield size={24} />,
            isVIP: true,
            gradient: 'linear-gradient(145deg, rgba(24, 22, 20, 0.9), rgba(134, 89, 37, 0.9))',
            borderColor: 'var(--color-gold)',
            color: 'var(--color-gold)',
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
        <section id="tickets" style={{ padding: '140px 0', background: 'linear-gradient(145deg, var(--color-bg-dark-section), var(--color-gold-subtle))', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Glows */}
            <div style={{ position: 'absolute', top: '10%', left: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(0, 0, 0, 0.08) 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '40%', height: '40%', background: 'radial-gradient(circle, rgba(153, 101, 204, 0.08) 0%, transparent 70%)', zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span style={{ color: 'var(--color-gold)', fontSize: '12px', fontWeight: '800', letterSpacing: '5px', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>Exclusive Access</span>
                        <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '25px', fontWeight: '500' }}>Choose Your Experience</h2>
                        <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)', margin: '0 auto' }} />
                    </motion.div>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(4, 1fr)', 
                    gap: '24px', 
                    alignItems: 'stretch',
                    paddingTop: '20px'
                }}>
                    {passes.map((pass, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 40 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ duration: 0.8, delay: index * 0.12 }}
                            whileHover={{ y: -14, scale: 1.02 }}
                            className={`ticket-card ${pass.isVIP ? 'vip-card' : ''} ${pass.popular ? 'popular-card' : ''}`}
                            style={{
                                background: pass.gradient,
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: `1px solid ${pass.borderColor}`,
                                borderRadius: '28px', 
                                padding: '55px 32px 45px', 
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                overflow: 'hidden'
                            }}>

                            {/* Subtle inner glow at top */}
                            <div style={{
                                position: 'absolute',
                                top: 0, left: '50%', transform: 'translateX(-50%)',
                                width: '70%', height: '1px',
                                background: `radial-gradient(circle, ${pass.borderColor}, transparent)`,
                                zIndex: 1
                            }} />

                            {pass.popular && (
                                <div className="badge-popular" style={{ 
                                    position: 'absolute', 
                                    top: 0, left: '50%', 
                                    transform: 'translate(-50%, -50%)', 
                                    background: 'var(--color-gold)', 
                                    color: '#0a0a0a', 
                                    padding: '7px 22px', 
                                    borderRadius: '20px', 
                                    fontSize: '10px', 
                                    fontWeight: '900', 
                                    zIndex: 3, 
                                    letterSpacing: '1.5px',
                                    boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)'
                                }}>MOST POPULAR</div>
                            )}
                            
                            {pass.isVIP && (
                                <>
                                    <div className="premium-shimmer" style={{ 
                                        position: 'absolute', inset: 0, borderRadius: '28px', pointerEvents: 'none', overflow: 'hidden', zIndex: 0
                                    }} />
                                    <div className="badge-vip" style={{ 
                                        position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', 
                                        background: 'linear-gradient(90deg, #b69c49, #f5d97a, #9e7720)', color: '#000000', 
                                        padding: '8px 30px', borderRadius: '30px', fontSize: '10px', fontWeight: '900', 
                                        letterSpacing: '2px', zIndex: 3, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.5)', whiteSpace: 'nowrap'
                                    }}>ULTIMATE EXPERIENCE</div>
                                </>
                            )}

                            {/* Icon with glowing ring */}
                            <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                                <div className="icon-ring" style={{ 
                                    color: pass.color, 
                                    marginBottom: '22px', 
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '50%',
                                    border: `1.5px solid ${pass.borderColor}`,
                                    background: `radial-gradient(circle, ${pass.borderColor.replace(/[\d.]+\)$/, '0.08)')}, transparent)`,
                                    boxShadow: `0 0 20px ${pass.borderColor.replace(/[\d.]+\)$/, '0.15)')}`
                                }}>
                                    {pass.icon}
                                </div>
                                <h3 style={{ 
                                    fontSize: '15px', 
                                    marginBottom: '18px', 
                                    color: pass.color, 
                                    fontFamily: 'var(--font-sans)', 
                                    letterSpacing: '3px', 
                                    textTransform: 'uppercase', 
                                    fontWeight: '700'
                                }}>{pass.title}</h3>
                                <div style={{ 
                                    fontSize: '48px', 
                                    color: '#fff', 
                                    fontFamily: 'var(--font-serif)', 
                                    fontWeight: '600',
                                    lineHeight: '1',
                                    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                }}>
                                    <span style={{ fontSize: '22px', color: pass.color, marginRight: '2px', fontWeight: '400' }}>₹</span>
                                    {pass.price}
                                </div>
                                <span style={{
                                    display: 'block',
                                    marginTop: '8px',
                                    fontSize: '12px',
                                    color: 'rgba(255,255,255,0.4)',
                                    letterSpacing: '1px'
                                }}>per person</span>
                            </div>
                            
                            <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${pass.borderColor}, transparent)`, margin: '0 auto 30px', width: '100%', position: 'relative', zIndex: 1 }} />

                            <ul style={{ listStyle: 'none', marginBottom: '40px', flex: 1, padding: 0, position: 'relative', zIndex: 1 }}>
                                {pass.features.map((f, i) => (
                                    <li key={i} className="feature-item" style={{ 
                                        display: 'flex', 
                                        alignItems: 'flex-start', 
                                        gap: '12px', 
                                        marginBottom: '14px', 
                                        color: 'rgba(255,255,255,0.75)', 
                                        fontSize: '14px', 
                                        lineHeight: '1.5',
                                        padding: '4px 0'
                                    }}>
                                        <span style={{
                                            flexShrink: 0,
                                            marginTop: '3px',
                                            width: '18px',
                                            height: '18px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: `${pass.borderColor.replace(/[\d.]+\)$/, '0.12)')}`
                                        }}>
                                            <Check size={12} color={pass.color} strokeWidth={3} />
                                        </span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <Link 
                                to="/tickets" 
                                className="ticket-btn"
                                style={{ 
                                    width: '100%', display: 'block', textAlign: 'center',
                                    background: pass.isVIP ? 'linear-gradient(135deg, #d4af37, #9e7720)' : 'transparent',
                                    border: `1.5px solid ${pass.color}`,
                                    color: pass.isVIP ? '#0c0b0b' : pass.color,
                                    fontWeight: '700', padding: '17px 0', borderRadius: '14px', textTransform: 'uppercase',
                                    letterSpacing: '2.5px', fontSize: '12px', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', 
                                    position: 'relative', zIndex: 1,
                                    boxShadow: pass.isVIP ? '0 8px 25px rgba(212, 175, 55, 0.3)' : 'none'
                                }}
                            >
                                {pass.isVIP ? 'Go Exclusive' : 'Select Pass'}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .ticket-card {
                    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
                }
                .ticket-card:hover {
                    box-shadow: 0 35px 70px rgba(0,0,0,0.5), 0 0 40px rgba(212, 175, 55, 0.08);
                    border-color: rgba(212, 175, 55, 0.6) !important;
                }
                .popular-card {
                    box-shadow: 0 20px 50px rgba(212, 175, 55, 0.12), 0 15px 40px rgba(0,0,0,0.3);
                }
                .vip-card {
                    box-shadow: 0 20px 50px rgba(212, 175, 55, 0.15), 0 15px 40px rgba(0,0,0,0.4);
                }
                .vip-card:hover {
                    border-color: var(--color-gold-light) !important;
                    box-shadow: 0 35px 70px rgba(0,0,0,0.5), 0 0 60px rgba(212, 175, 55, 0.15) !important;
                }
                .ticket-btn:hover {
                    background: var(--color-gold) !important;
                    color: #000 !important;
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.35) !important;
                    letter-spacing: 3px !important;
                }
                .feature-item {
                    transition: transform 0.2s ease;
                }
                .ticket-card:hover .feature-item {
                    color: rgba(255,255,255,0.9) !important;
                }
                .icon-ring {
                    transition: all 0.4s ease;
                }
                .ticket-card:hover .icon-ring {
                    transform: scale(1.1);
                    box-shadow: 0 0 30px rgba(212, 175, 55, 0.25) !important;
                }
                @media (max-width: 1200px) {
                    #tickets div[style*="grid-template-columns: repeat(4"] {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 40px !important;
                    }
                }
                @media (max-width: 600px) {
                    #tickets div[style*="grid-template-columns: repeat(4"] {
                        grid-template-columns: 1fr !important;
                        gap: 30px !important;
                    }
                    .ticket-card {
                        padding: 45px 24px 40px !important;
                        border-radius: 22px !important;
                    }
                }
            ` }} />
        </section>
    );
};

export default Tickets;

