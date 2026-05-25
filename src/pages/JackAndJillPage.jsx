import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const stageSubcategories = {
    salsa: [
        'Salsa Open — Open Solo', 'Salsa Open — Open Duet', 'Salsa Open — Open Group',
        'Salsa Pro — Pro Solo', 'Salsa Pro — Pro Duet', 'Salsa Pro — Pro Group'
    ],
    bachata: [
        'Bachata Open — Open Solo', 'Bachata Open — Open Duet', 'Bachata Open — Open Group',
        'Bachata Pro — Pro Solo', 'Bachata Pro — Pro Duet', 'Bachata Pro — Pro Group'
    ],
    kizomba: [
        'Kizomba Open — Open Solo', 'Kizomba Open — Open Duet', 'Kizomba Open — Open Group',
        'Kizomba Pro — Pro Solo', 'Kizomba Pro — Pro Duet', 'Kizomba Pro — Pro Group'
    ]
};

const streetSubcategories = {
    salsa: [
        'Salsa Open — 1 vs 1', 'Salsa Open — Duet vs Duet',
        'Salsa Pro — 1 vs 1', 'Salsa Pro — Duet vs Duet'
    ],
    bachata: [
        'Bachata Open — 1 vs 1', 'Bachata Open — Duet vs Duet',
        'Bachata Pro — 1 vs 1', 'Bachata Pro — Duet vs Duet'
    ],
    kizomba: [
        'Kizomba Open — 1 vs 1', 'Kizomba Open — Duet vs Duet',
        'Kizomba Pro — 1 vs 1', 'Kizomba Pro — Duet vs Duet'
    ]
};

const inputStyle = {
    padding: '14px 16px',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    borderRadius: '12px',
    color: 'white',
    outline: 'none',
    transition: 'border 0.3s'
};

const selectStyle = {
    ...inputStyle,
    cursor: 'pointer'
};

const optionStyle = { background: '#1a1a2e', color: 'white' };

const labelStyle = { color: '#fff', fontSize: '14px', fontWeight: '600' };

const handleFocus = e => e.target.style.borderColor = 'var(--color-gold)';
const handleBlur = e => e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';

const RegistrationModal = ({ isOpen, onClose, type }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    if (!isOpen) return null;

    const isStage = type === 'stage';
    const title = isStage ? 'Stage Competition Registration' : 'Street Battle Registration';
    const subcategories = isStage ? stageSubcategories : streetSubcategories;
    const currentSubs = selectedCategory ? subcategories[selectedCategory] : [];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.85)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px'
                    }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={e => e.stopPropagation()}
                        style={{
                            background: '#111',
                            border: '1px solid var(--color-gold)',
                            boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)',
                            borderRadius: '24px',
                            padding: '40px',
                            width: '100%',
                            maxWidth: '600px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            position: 'relative'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--color-text-muted)',
                                fontSize: '28px',
                                cursor: 'pointer',
                                transition: 'color 0.3s'
                            }}
                            onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
                            onMouseOut={e => e.target.style.color = 'var(--color-text-muted)'}
                        >
                            ×
                        </button>

                        <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', fontSize: '26px', marginBottom: '30px', textAlign: 'center', fontWeight: '800', textShadow: '0 0 12px rgba(212,175,55,0.4)' }}>{title}</h2>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {/* Row 1: Name + Category */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={labelStyle}>Full Name *</label>
                                    <input type="text" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={labelStyle}>Dance Style *</label>
                                    <select
                                        required
                                        value={selectedCategory}
                                        onChange={e => setSelectedCategory(e.target.value)}
                                        style={selectStyle}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    >
                                        <option value="" disabled style={optionStyle}>Select a dance style</option>
                                        <option value="salsa" style={optionStyle}>Salsa</option>
                                        <option value="bachata" style={optionStyle}>Bachata</option>
                                        <option value="kizomba" style={optionStyle}>Kizomba</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 2: Subcategory (dependent dropdown) */}
                            {selectedCategory && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
                                >
                                    <label style={labelStyle}>{isStage ? 'Competition Category' : 'Battle Category'} *</label>
                                    <select required style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                                        <option value="" disabled selected style={optionStyle}>
                                            {isStage ? 'Select competition category' : 'Select battle category'}
                                        </option>
                                        {currentSubs.map((sub, idx) => (
                                            <option key={idx} value={sub} style={optionStyle}>{sub}</option>
                                        ))}
                                    </select>
                                </motion.div>
                            )}

                            {/* Row 3: Gender + Mobile */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={labelStyle}>Gender *</label>
                                    <select required style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                                        <option value="" style={optionStyle}>Select Gender</option>
                                        <option value="male" style={optionStyle}>Male</option>
                                        <option value="female" style={optionStyle}>Female</option>
                                        <option value="other" style={optionStyle}>Other</option>
                                    </select>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={labelStyle}>Mobile Number (WhatsApp) *</label>
                                    <input type="tel" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                                </div>
                            </div>

                            {/* Email */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={labelStyle}>Email Address *</label>
                                <input type="email" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                            </div>

                            {/* City + Instagram */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={labelStyle}>City / Country *</label>
                                    <input type="text" required style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={labelStyle}>Instagram Handle</label>
                                    <input type="text" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                                </div>
                            </div>

                            {/* Dance School */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={labelStyle}>Dance School / Team Name (if applicable)</label>
                                <input type="text" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                            </div>

                            {/* Festival Pass */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={labelStyle}>Festival Pass Type *</label>
                                <select required style={selectStyle} onFocus={handleFocus} onBlur={handleBlur}>
                                    <option value="" style={optionStyle}>Select Pass</option>
                                    <option value="full" style={optionStyle}>Full Pass</option>
                                    <option value="party" style={optionStyle}>Party Pass</option>
                                    <option value="beginner" style={optionStyle}>Beginner Pass</option>
                                </select>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                style={{
                                    marginTop: '10px',
                                    width: '100%',
                                    padding: '18px',
                                    background: 'var(--color-gold)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: '18px',
                                    fontWeight: '900',
                                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    letterSpacing: '1px'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(212, 175, 55, 0.4)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                                onClick={e => {
                                    e.preventDefault();
                                    alert("Registration submitted!");
                                    setSelectedCategory('');
                                    onClose();
                                }}
                            >
                                Submit Registration
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const JackAndJillPage = () => {
    const [modalType, setModalType] = useState(null);


    return (
        <div className="app">
            <Navbar />
            <main style={{ paddingTop: '100px', minHeight: '80vh', background: 'var(--color-bg-main)' }}>
                <section style={{ padding: '100px 0' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontFamily: 'var(--font-serif)', color: '#0a0a0aff', textShadow: '0 0 20px rgba(255,255,255,0.2)', fontWeight: '800', marginBottom: '30px' }}
                        >
                            Jack & Jill Competition
                        </motion.h1>
                        <div style={{ width: '80px', height: '4px', background: 'var(--color-gold)', margin: '0 auto 40px' }} />
                        <p style={{ fontSize: '20px', color: 'rgba(27, 26, 26, 0.9)', maxWidth: '800px', margin: '0 auto', fontWeight: '500' }}>
                            Get ready for the most exciting Afro-Latin dance competition in India. Showcase your skills, connection, and musicality in our official Jack & Jill battles.
                        </p>

                        <div style={{
                            marginTop: '80px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '40px',
                            textAlign: 'left'
                        }}>
                            {/* Card 1: Stage Competitions */}
                            <motion.div
                                style={{
                                    padding: '40px',
                                    background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))',
                                    borderRadius: '32px',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.4s ease'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.15)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
                                }}
                            >
                                <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '8px', fontSize: '32px', color: '#fff', fontWeight: '800', textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>Stage Competitions</h2>
                                <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-gold)', marginBottom: '32px', fontWeight: '700', textShadow: '0 0 8px rgba(212,175,55,0.4)' }}>(Choreography Format)</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flexGrow: 1 }}>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                                        gap: '16px'
                                    }}>
                                        {[
                                            { title: 'Salsa Open', desc: 'Open Solo, Open Duet, Open Group' },
                                            { title: 'Salsa Pro', desc: 'Pro Solo, Pro Duet, Pro Group' },
                                            { title: 'Bachata Open', desc: 'Open Solo, Open Duet, Open Group' },
                                            { title: 'Bachata Pro', desc: 'Pro Solo, Pro Duet, Pro Group' },
                                            { title: 'Kizomba Open', desc: 'Open Solo, Open Duet, Open Group' },
                                            { title: 'Kizomba Pro', desc: 'Pro Solo, Pro Duet, Pro Group' }
                                        ].map((cat, i) => (
                                            <div key={i} style={{
                                                padding: '16px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(212, 175, 55, 0.15)',
                                                borderRadius: '12px',
                                                transition: 'all 0.3s ease'
                                            }}
                                                onMouseOver={e => {
                                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                                                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)';
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseOut={e => {
                                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)';
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                }}
                                            >
                                                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '6px', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>{cat.title}</h3>
                                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', margin: 0, lineHeight: '1.4', fontWeight: '600' }}>{cat.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setModalType('stage')}
                                        style={{
                                            marginTop: '32px',
                                            marginBottom: '16px',
                                            width: '100%',
                                            padding: '20px',
                                            background: 'linear-gradient(45deg, var(--color-gold), #ffdf00)',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '50px',
                                            fontSize: '18px',
                                            fontWeight: '900',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)',
                                            letterSpacing: '1px',
                                            textShadow: '0 2px 5px rgba(0,0,0,0.3)'
                                        }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        Register Now
                                    </button>

                                    {/* Rules Section - Card 1 */}
                                    <div style={{ marginTop: '16px', padding: '24px', background: 'rgba(0,0,0,0.4)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#fff', marginBottom: '20px', fontFamily: 'var(--font-serif)', textShadow: '0 0 12px rgba(255,255,255,0.3)' }}>Stage Competition Rules</h3>

                                        <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '8px', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>Performance Duration</h4>
                                        <ul style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', paddingLeft: '20px', marginBottom: '16px', lineHeight: '1.6', fontWeight: '500' }}>
                                            <li>Solo: 1 minute 30 seconds – 2 minutes</li>
                                            <li>Duet: 2 – 3 minutes</li>
                                            <li>Group: 2 – 3 minutes</li>
                                        </ul>
                                        <p style={{ fontSize: '14px', color: '#fff', marginBottom: '20px', fontWeight: '700', background: 'rgba(231, 76, 60, 0.2)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(231, 76, 60, 0.4)', textShadow: '0 0 8px rgba(255,255,255,0.3)' }}>
                                            <strong>Important:</strong> Strict adherence to time limits is mandatory. Exceeding limits may result in penalties or disqualification.
                                        </p>

                                        <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '8px', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>Music Submission</h4>
                                        <ul style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.6', fontWeight: '500' }}>
                                            <li>Music must be submitted in MP3 format before the deadline.</li>
                                            <li>File naming format: Name_Category_Style</li>
                                            <li>Participants must carry backup music on a USB device.</li>
                                        </ul>

                                        <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '8px', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>Judging Criteria</h4>
                                        <ul style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', paddingLeft: '20px', marginBottom: '0', lineHeight: '1.6', fontWeight: '500' }}>
                                            <li>Technique & Execution</li>
                                            <li>Musicality</li>
                                            <li>Creativity & Choreography</li>
                                            <li>Stage Presence & Energy</li>
                                            <li>Synchronization (for duet/group categories)</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 2: Street Battles */}
                            <motion.div
                                style={{
                                    padding: '40px',
                                    background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))',
                                    borderRadius: '32px',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.4s ease'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.15)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.5)';
                                }}
                            >
                                <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '8px', fontSize: '32px', color: '#fff', fontWeight: '800', textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>Street Battles</h2>
                                <p style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-gold)', marginBottom: '32px', fontWeight: '700', textShadow: '0 0 8px rgba(212,175,55,0.4)' }}>(Improvisation Format)</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flexGrow: 1 }}>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                                        gap: '16px'
                                    }}>
                                        {[
                                            { title: 'Salsa Open', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Salsa Pro', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Bachata Open', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Bachata Pro', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Kizomba Open', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Kizomba Pro', desc: '1 vs 1, Duet vs Duet' }
                                        ].map((cat, i) => (
                                            <div key={i} style={{
                                                padding: '16px',
                                                background: 'rgba(255,255,255,0.03)',
                                                border: '1px solid rgba(212, 175, 55, 0.15)',
                                                borderRadius: '12px',
                                                transition: 'all 0.3s ease'
                                            }}
                                                onMouseOver={e => {
                                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)';
                                                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)';
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseOut={e => {
                                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)';
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                }}
                                            >
                                                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '6px', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>{cat.title}</h3>
                                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', margin: 0, lineHeight: '1.4', fontWeight: '600' }}>{cat.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setModalType('street')}
                                        style={{
                                            marginTop: '32px',
                                            marginBottom: '16px',
                                            width: '100%',
                                            padding: '20px',
                                            background: 'linear-gradient(45deg, var(--color-gold), #ffdf00)',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '50px',
                                            fontSize: '18px',
                                            fontWeight: '900',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)',
                                            letterSpacing: '1px',
                                            textShadow: '0 2px 5px rgba(0,0,0,0.3)'
                                        }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                    >
                                        Register Now
                                    </button>

                                    {/* Rules Section - Card 2 */}
                                    <div style={{ marginTop: '16px', padding: '24px', background: 'rgba(0,0,0,0.4)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#fff', marginBottom: '20px', fontFamily: 'var(--font-serif)', textShadow: '0 0 12px rgba(255,255,255,0.3)' }}>Street Battle Rules</h3>

                                        <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '8px', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>Format</h4>
                                        <ul style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.6', fontWeight: '500' }}>
                                            <li>Battles will follow an elimination structure: Prelims → Finals</li>
                                            <li>Music will be played live by the DJ</li>
                                            <li>All battle rounds are fully improvised</li>
                                        </ul>

                                        <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '8px', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>Battle Time</h4>
                                        <ul style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.6', fontWeight: '500' }}>
                                            <li>Each round duration will be determined by judges and DJ</li>
                                            <li>Approximate round length: 1–2 minutes</li>
                                        </ul>

                                        <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '8px', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>Judging Criteria</h4>
                                        <ul style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', paddingLeft: '20px', marginBottom: '20px', lineHeight: '1.6', fontWeight: '500' }}>
                                            <li>Musicality</li>
                                            <li>Connection (especially in partner categories)</li>
                                            <li>Creativity & Interpretation</li>
                                            <li>Floorcraft & Presence</li>
                                            <li>Overall Impact</li>
                                        </ul>

                                        <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '8px', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>Additional Regulations</h4>
                                        <ul style={{ color: 'rgba(255,255,255,0.9)', fontSize: '15px', paddingLeft: '20px', marginBottom: '0', lineHeight: '1.6', fontWeight: '500' }}>
                                            <li>Judges’ decisions are final and binding.</li>
                                            <li>No refunds will be provided for competition registrations.</li>
                                            <li>The organizing team reserves the right to reassign participants to a more suitable category if required.</li>
                                            <li>Media (photos/videos) captured during the event may be used for promotional purposes.</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <RegistrationModal
                isOpen={modalType !== null}
                onClose={() => setModalType(null)}
                type={modalType}  // 'stage' or 'street'
            />        </div>
    );
};

export default JackAndJillPage;
