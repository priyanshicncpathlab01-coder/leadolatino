import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tickets = () => {
    const passes = [
        { title: 'Full Pass', price: '180€', features: ['All Workshops', 'All Parties', 'All Shows', 'Jack & Jill Access'] },
        { title: 'Party Pass', price: '120€', features: ['All Parties (Fri-Sun)', 'All Shows', 'Pre-Party Access', 'Social Room'] },
        { title: 'VIP Pass', price: '250€', features: ['Front Row Shows', 'VIP Lounge', 'All Workshops', 'All Parties', 'Fast Track Entry'], popular: true }
    ];

    return (
        <section id="tickets" style={{ padding: '100px 0', background: 'var(--color-bg-alt)' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', marginBottom: '15px' }}>Buy Tickets</h2>
                <div style={{ width: '50px', height: '3px', background: 'var(--color-gold)', margin: '0 auto', borderRadius: '3px' }} />
            </div>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
                    {passes.map((pass, index) => (
                        <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: pass.popular ? 'linear-gradient(180deg, rgba(201,152,46,0.08), #fff)' : '#fff',
                                border: pass.popular ? '2px solid var(--color-gold)' : '1px solid var(--color-border)',
                                borderRadius: '16px', padding: '40px', position: 'relative',
                                transform: pass.popular ? 'scale(1.05)' : 'scale(1)', zIndex: pass.popular ? 2 : 1,
                                boxShadow: pass.popular ? 'var(--shadow-gold)' : 'var(--shadow-sm)',
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
