import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tickets = () => {
    const passes = [
        {
            title: 'Bronze Pass',
            price: '10,999',
            icon: null,
            gradient: 'linear-gradient(145deg, #ffffff, #fafafa)',
            borderColor: 'rgba(0, 0, 0, 0.08)',
            color: '#1a1a1a',
            titleBg: 'linear-gradient(135deg, #d48b48, #a86221)',
            titleColor: '#fff',
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
            icon: null,
            gradient: 'linear-gradient(145deg, #ffffff, #fafafa)',
            borderColor: 'rgba(0, 0, 0, 0.08)',
            color: '#1a1a1a',
            titleBg: 'linear-gradient(135deg, #e5e5e5, #999999)',
            titleColor: '#111',
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
            
            popular: true,
            isGold: true,
            gradient: 'linear-gradient(#a07f14)',
            borderColor: '#a07f14',
            color: '#1a1a1a',
            titleBg: 'transparent',
            titleColor: '#1a1a1a',
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
            icon: null,
            isVIP: true,
            gradient: 'linear-gradient(145deg, #ffffff, #fafafa)',
            borderColor: 'rgba(0, 0, 0, 0.08)',
            color: '#1a1a1a',
            titleBg: '#1a1a1a',
            titleColor: '#fff',
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
        <section id="tickets" style={{ padding: '140px 0', background: 'linear-gradient(145deg, #0a0a0a, #000000, #111)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Glows */}
            <div style={{ position: 'absolute', top: '10%', left: '-15%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(201, 152, 46, 0.1) 0%, transparent 60%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '-15%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(201, 152, 46, 0.08) 0%, transparent 60%)', zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span style={{ color: 'var(--color-gold)', fontSize: '12px', fontWeight: '800', letterSpacing: '5px', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>Exclusive Access</span>
                        <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '25px', fontWeight: '500' }}>Choose Your Experience</h2>
                        <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)', margin: '0 auto' }} />
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
                                border: `1px solid ${pass.borderColor}`,
                                borderRadius: '28px',
                                padding: '55px 32px 45px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
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
                                    top: 15, left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    background: pass.isGold ? '#111' : 'var(--color-gold)',
                                    color: pass.isGold ? '#fff' : '#fff',
                                    padding: '8px 28px',
                                    borderRadius: '24px',
                                    fontSize: '13px',
                                    fontWeight: '900',
                                    zIndex: 3,
                                    letterSpacing: '2.5px',
                                    textTransform: 'uppercase',
                                    boxShadow: pass.isGold ? '0 10px 30px rgba(0, 0, 0, 0.5)' : '0 10px 30px rgba(201, 152, 46, 0.6)',
                                    border: pass.isGold ? '1.5px solid var(--color-gold-light)' : '1.5px solid #fff',
                                    whiteSpace:'nowrap'
                                }}>MOST POPULAR</div>
                            )}

                            {pass.isGold && (
                                <div className="premium-shimmer" style={{
                                    position: 'absolute', inset: 0, borderRadius: '28px', pointerEvents: 'none', overflow: 'hidden', zIndex: 0
                                }} />
                            )}

                            {pass.isVIP && (
                                <div className="badge-vip" style={{
                                    position: 'absolute', top: 15, left: '50%', transform: 'translate(-50%, -50%)',
                                    background: 'linear-gradient(90deg, #111, #222)', color: 'var(--color-gold)',
                                    padding: '8px 32px', borderRadius: '30px', fontSize: '13px', fontWeight: '900',
                                    letterSpacing: '3px', zIndex: 3, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)', whiteSpace: 'nowrap',
                                    border: '1.5px solid var(--color-gold)'
                                }}>ULTIMATE EXPERIENCE</div>
                            )}

                            {/* Icon with glowing ring */}
                            <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                                {pass.icon && (
                                    <div className="icon-ring" style={{
                                        color: pass.isGold ? '#1a1a1a' : pass.color,
                                        marginBottom: '22px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '50%',
                                        border: `1.5px solid ${pass.isGold ? 'rgba(26,26,26,0.3)' : pass.borderColor}`,
                                        background: pass.isGold ? `radial-gradient(circle, rgba(255,255,255,0.3), transparent)` : `radial-gradient(circle, rgba(201,152,46,0.08), transparent)`,
                                        boxShadow: pass.isGold ? `0 0 20px rgba(255,255,255,0.4)` : `0 0 20px rgba(201,152,46,0.15)`
                                    }}>
                                        {pass.icon}
                                    </div>
                                )}
                                <h3 style={{
                                    fontSize: '16px',
                                    marginBottom: '18px',
                                    color: pass.titleColor || (pass.isGold ? '#1a1a1a' : pass.color),
                                    background: pass.titleBg || 'transparent',
                                    display: 'inline-block',
                                    padding: pass.titleBg && pass.titleBg !== 'transparent' ? '8px 24px' : '0',
                                    borderRadius: pass.titleBg && pass.titleBg !== 'transparent' ? '24px' : '0',
                                    fontFamily: 'var(--font-sans)',
                                    letterSpacing: '3px',
                                    textTransform: 'uppercase',
                                    fontWeight: '800',
                                    boxShadow: pass.titleBg && pass.titleBg !== 'transparent' ? '0 8px 20px rgba(0,0,0,0.1)' : 'none'
                                }}>{pass.title}</h3>
                                <div style={{
                                    fontSize: '56px',
                                    color: '#111',
                                    fontFamily: 'var(--font-serif)',
                                    fontWeight: '800',
                                    lineHeight: '1',
                                    textShadow: pass.isGold ? '0 4px 20px rgba(255, 255, 255, 0.4)' : 'none'
                                }}>
                                    <span style={{ fontSize: '26px', color: '#111', marginRight: '4px', fontWeight: '700' }}>₹</span>
                                    {pass.price}
                                </div>
                                <span style={{
                                    display: 'block',
                                    marginTop: '8px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: pass.isGold ? 'rgba(0,0,0,0.7)' : '#666',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase'
                                }}>per person</span>
                            </div>

                            <div style={{ height: '1px', background: pass.isGold ? `linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)` : `linear-gradient(90deg, transparent, ${pass.borderColor}, transparent)`, margin: '0 auto 30px', width: '100%', position: 'relative', zIndex: 1 }} />

                            <ul style={{ listStyle: 'none', marginBottom: '40px', flex: 1, padding: 0, position: 'relative', zIndex: 1 }}>
                                {pass.features.map((f, i) => (
                                    <li key={i} className="feature-item" style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '14px',
                                        marginBottom: '16px',
                                        color: pass.isGold ? '#1a1a1a' : '#333',
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        lineHeight: '1.5',
                                        padding: '4px 0'
                                    }}>
                                        <span style={{
                                            flexShrink: 0,
                                            marginTop: '3px',
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: pass.isGold ? 'rgba(255,255,255,0.4)' : '#e5e5e5'
                                        }}>
                                            <Check size={14} color={pass.isGold ? '#000' : '#1a1a1a'} strokeWidth={3} />
                                        </span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <div style={{
                                textAlign: 'center',
                                marginBottom: '16px',
                                fontSize: '28px',
                                fontWeight: '800',
                                color: '#111',
                                fontFamily: 'var(--font-serif)',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                <span style={{ fontSize: '18px', marginRight: '4px', fontWeight: '700' }}>₹</span>
                                {pass.price}
                            </div>

                            <Link
                                to="/tickets"
                                className="ticket-btn"
                                style={{
                                    width: '100%', display: 'block', textAlign: 'center',
                                    background: pass.isGold ? '#1a1510' : 'transparent',
                                    border: pass.isGold ? `2px solid #1a1510` : `2px solid #1a1a1a`,
                                    color: pass.isGold ? 'var(--color-gold-light)' : '#1a1a1a',
                                    fontWeight: '800', padding: '18px 0', borderRadius: '14px', textTransform: 'uppercase',
                                    letterSpacing: '3px', fontSize: '14px', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    position: 'relative', zIndex: 1,
                                    boxShadow: pass.isGold ? '0 8px 25px rgba(0, 0, 0, 0.3)' : 'none'
                                }}
                            >
                                {pass.isVIP ? 'Go Exclusive' : 'Select Pass'}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .ticket-card {
                    box-shadow: 0 15px 40px rgba(0,0,0,0.05);
                }
                .ticket-card:hover {
                    box-shadow: 0 35px 70px rgba(0,0,0,0.1), 0 0 40px rgba(0, 0, 0, 0.05);
                    border-color: rgba(0,0,0,0.15) !important;
                }
                .popular-card {
                    box-shadow: 0 20px 50px rgba(201, 152, 46, 0.15), 0 15px 40px rgba(0,0,0,0.08);
                }
                .popular-card:hover {
                    border-color: var(--color-gold) !important;
                    box-shadow: 0 35px 70px rgba(201, 152, 46, 0.2), 0 0 60px rgba(201, 152, 46, 0.2) !important;
                }
                .vip-card {
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05), 0 15px 40px rgba(0,0,0,0.08);
                }
                .vip-card:hover {
                    border-color: rgba(0,0,0,0.2) !important;
                    box-shadow: 0 35px 70px rgba(0,0,0,0.1), 0 0 60px rgba(0,0,0,0.05) !important;
                }
                .ticket-btn:hover {
                    background: var(--color-gold) !important;
                    color: #fff !important;
                    border-color: var(--color-gold) !important;
                    transform: translateY(-3px);
                    box-shadow: 0 12px 30px rgba(201, 152, 46, 0.4) !important;
                    letter-spacing: 3px !important;
                }
                .feature-item {
                    transition: transform 0.2s ease;
                }
                .icon-ring {
                    transition: all 0.4s ease;
                }
                .ticket-card:hover .icon-ring {
                    transform: scale(1.1);
                    box-shadow: 0 0 30px rgba(201, 152, 46, 0.3) !important;
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

