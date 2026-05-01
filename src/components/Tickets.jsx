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
        <section id="tickets" style={{ padding: '100px 0', background: 'var(--color-bg-alt)' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', marginBottom: '15px' }}>Buy Tickets</h2>
                <div style={{ width: '50px', height: '3px', background: 'var(--color-gold)', margin: '0 auto', borderRadius: '3px' }} />
            </div>
            <div className="container">
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
                    gap: '24px', 
                    alignItems: 'stretch' 
                }}>
                    {passes.map((pass, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                background: pass.popular ? 'linear-gradient(180deg, rgba(212,175,55,0.05), #fff)' : '#fff',
                                border: '1px solid var(--color-border)',
                                borderTop: `4px solid ${pass.color}`,
                                borderRadius: '20px', 
                                padding: '40px 30px', 
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: pass.popular ? '0 20px 40px rgba(212,175,55,0.15)' : 'var(--shadow-sm)',
                                transition: 'all 0.3s ease'
                            }}>

                            {pass.popular && (
                                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--color-gold)', color: '#fff', padding: '5px 20px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>BEST VALUE</div>
                            )}
                            <h3 style={{ fontSize: '24px', marginBottom: '10px', textAlign: 'center' }}>{pass.title}</h3>
                            <div style={{ fontSize: '50px', textAlign: 'center', fontFamily: 'var(--font-serif)', marginBottom: '30px', color: 'var(--color-gold-dark)' }}>{pass.price}</div>
                            <ul style={{ listStyle: 'none', marginBottom: '40px' }}>
                                {pass.features.map((f, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: 'var(--color-text-muted)' }}>
                                        <Check size={18} color="var(--color-gold)" />{f}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/tickets" className={pass.popular ? "btn-gold" : "btn-outline"} style={{ width: '100%', display: 'block', textAlign: 'center' }}>Book Now</Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tickets;
