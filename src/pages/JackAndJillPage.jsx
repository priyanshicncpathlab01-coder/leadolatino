import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationModal = ({ isOpen, onClose, type }) => {
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        mobile: '',
        email: '',
        city: '',
        instagram: '',
        danceSchool: '',
        festivalPass: ''
    });
    const [errors, setErrors] = useState({});

    if (!isOpen) return null;

    const stageSubCategories = {
        salsa: ['Open Solo', 'Open Duet', 'Open Group', 'Pro Solo', 'Pro Duet', 'Pro Group'],
        bachata: ['Open Solo', 'Open Duet', 'Open Group', 'Pro Solo', 'Pro Duet', 'Pro Group'],
        kizomba: ['Open Solo', 'Open Duet', 'Open Group', 'Pro Solo', 'Pro Duet', 'Pro Group'],
    };

    const streetSubCategories = {
        salsa: ['Open 1vs1', 'Open Duet vs Duet', 'Pro 1vs1', 'Pro Duet vs Duet'],
        bachata: ['Open 1vs1', 'Open Duet vs Duet', 'Pro 1vs1', 'Pro Duet vs Duet'],
        kizomba: ['Open 1vs1', 'Open Duet vs Duet', 'Pro 1vs1', 'Pro Duet vs Duet'],
    };

    const subCategories = type === 'stage' ? stageSubCategories : streetSubCategories;

    // ─── Validation Logic ───
    const validate = () => {
        const newErrors = {};

        if (!formData.fullName.trim())
            newErrors.fullName = 'Full name is required';

        if (!category)
            newErrors.category = 'Please select a category';

        if (category && !subCategory)
            newErrors.subCategory = 'Please select a sub category';

        if (!formData.gender)
            newErrors.gender = 'Please select gender';

        if (!formData.mobile.trim())
            newErrors.mobile = 'Mobile number is required';
        else if (!/^[0-9]{10}$/.test(formData.mobile.trim()))
            newErrors.mobile = 'Enter valid 10-digit mobile number';

        if (!formData.email.trim())
            newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
            newErrors.email = 'Enter a valid email address';

        if (!formData.city.trim())
            newErrors.city = 'City / Country is required';

        if (!formData.festivalPass)
            newErrors.festivalPass = 'Please select a festival pass';

        return newErrors;
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error on change
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        alert(`${type === 'stage' ? 'Stage Competition' : 'Street Battle'} Registration submitted successfully!`);
        onClose();
    };

    // ─── Shared Styles ───
    const inputStyle = (field) => ({
        padding: '14px 16px',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${errors[field] ? 'rgba(231, 76, 60, 0.8)' : 'rgba(212, 175, 55, 0.3)'}`,
        borderRadius: '12px',
        color: 'white',
        outline: 'none',
        transition: 'border 0.3s',
        width: '100%',
        boxSizing: 'border-box'
    });

    const selectStyle = (field) => ({
        ...inputStyle(field),
        cursor: 'pointer',
        appearance: 'none',
        WebkitAppearance: 'none',
    });

    const handleFocus = e => e.target.style.borderColor = 'var(--color-gold)';
    const handleBlur = e => e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';

    const errorText = (field) => errors[field] ? (
        <span style={{ color: 'rgba(231, 76, 60, 0.9)', fontSize: '12px', marginTop: '4px' }}>
            ⚠ {errors[field]}
        </span>
    ) : null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
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
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '20px', right: '20px',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--color-text-muted)',
                                fontSize: '28px',
                                cursor: 'pointer',
                                transition: 'color 0.3s'
                            }}
                            onMouseOver={e => e.target.style.color = 'var(--color-gold)'}
                            onMouseOut={e => e.target.style.color = 'var(--color-text-muted)'}
                        >×</button>

                        {/* Title */}
                        <h2 style={{
                            fontFamily: 'var(--font-serif)',
                            color: 'var(--color-gold)',
                            fontSize: '28px',
                            marginBottom: '30px',
                            textAlign: 'center',
                            fontWeight: '800',
                            textShadow: '0 0 12px rgba(212,175,55,0.4)'
                        }}>
                            {type === 'stage' ? 'Stage Competition' : 'Street Battle'} Registration
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                        >

                            {/* Row 1: Full Name + Category */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>

                                {/* Full Name */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Full Name *</label>
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        onChange={e => handleChange('fullName', e.target.value)}
                                        style={inputStyle('fullName')}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        placeholder="Enter your full name"
                                    />
                                    {errorText('fullName')}
                                </div>

                                {/* Category */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Category *</label>
                                    <select
                                        value={category}
                                        onChange={e => {
                                            setCategory(e.target.value);
                                            setSubCategory('');
                                            if (errors.category) setErrors(prev => ({ ...prev, category: '' }));
                                        }}
                                        style={selectStyle('category')}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    >
                                        <option value="" disabled style={{ background: '#1a1a2e', color: '#aaa' }}>
                                            Select a dance form
                                        </option>
                                        <option value="salsa" style={{ background: '#1a1a2e', color: 'white' }}>Salsa</option>
                                        <option value="bachata" style={{ background: '#1a1a2e', color: 'white' }}>Bachata</option>
                                        <option value="kizomba" style={{ background: '#1a1a2e', color: 'white' }}>Kizomba</option>
                                    </select>
                                    {errorText('category')}
                                </div>
                            </div>

                            {/* Sub Category */}
                            {category && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>
                                        Sub Category *
                                        <span style={{ color: 'var(--color-gold)', marginLeft: '8px', fontSize: '12px', fontWeight: '500' }}>
                                            ({type === 'stage' ? 'Stage' : 'Street'})
                                        </span>
                                    </label>
                                    <select
                                        value={subCategory}
                                        onChange={e => {
                                            setSubCategory(e.target.value);
                                            if (errors.subCategory) setErrors(prev => ({ ...prev, subCategory: '' }));
                                        }}
                                        style={selectStyle('subCategory')}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    >
                                        <option value="" disabled style={{ background: '#1a1a2e', color: '#aaa' }}>
                                            Select sub category
                                        </option>
                                        {subCategories[category].map((sub, i) => (
                                            <option key={i} value={sub} style={{ background: '#1a1a2e', color: 'white' }}>
                                                {sub}
                                            </option>
                                        ))}
                                    </select>
                                    {errorText('subCategory')}
                                </div>
                            )}

                            {/* Row 2: Gender + Mobile */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>

                                {/* Gender */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Gender *</label>
                                    <select
                                        value={formData.gender}
                                        onChange={e => handleChange('gender', e.target.value)}
                                        style={selectStyle('gender')}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                    >
                                        <option value="" disabled style={{ color: 'black' }}>Select Gender</option>
                                        <option value="male" style={{ color: 'black' }}>Male</option>
                                        <option value="female" style={{ color: 'black' }}>Female</option>
                                        <option value="other" style={{ color: 'black' }}>Other</option>
                                    </select>
                                    {errorText('gender')}
                                </div>

                                {/* Mobile */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Mobile Number (WhatsApp) *</label>
                                    <input
                                        type="tel"
                                        value={formData.mobile}
                                        onChange={e => handleChange('mobile', e.target.value)}
                                        style={inputStyle('mobile')}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        placeholder="10-digit mobile number"
                                        maxLength={10}
                                    />
                                    {errorText('mobile')}
                                </div>
                            </div>

                            {/* Email */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Email Address *</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={e => handleChange('email', e.target.value)}
                                    style={inputStyle('email')}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder="Enter your email address"
                                />
                                {errorText('email')}
                            </div>

                            {/* Row 3: City + Instagram */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>

                                {/* City */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>City / Country *</label>
                                    <input
                                        type="text"
                                        value={formData.city}
                                        onChange={e => handleChange('city', e.target.value)}
                                        style={inputStyle('city')}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        placeholder="Enter your city / country"
                                    />
                                    {errorText('city')}
                                </div>

                                {/* Instagram */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Instagram Handle</label>
                                    <input
                                        type="text"
                                        value={formData.instagram}
                                        onChange={e => handleChange('instagram', e.target.value)}
                                        style={inputStyle('instagram')}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        placeholder="@yourhandle"
                                    />
                                </div>
                            </div>

                            {/* Dance School */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Dance School / Team Name (if applicable)</label>
                                <input
                                    type="text"
                                    value={formData.danceSchool}
                                    onChange={e => handleChange('danceSchool', e.target.value)}
                                    style={inputStyle('danceSchool')}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder="Enter dance school or team name"
                                />
                            </div>

                            {/* Festival Pass */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>Festival Pass Type *</label>
                                <select
                                    value={formData.festivalPass}
                                    onChange={e => handleChange('festivalPass', e.target.value)}
                                    style={selectStyle('festivalPass')}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                >
                                    <option value="" disabled style={{ color: 'black' }}>Select Pass</option>
                                    <option value="full" style={{ color: 'black' }}>Full Pass</option>
                                    <option value="party" style={{ color: 'black' }}>Party Pass</option>
                                    <option value="beginner" style={{ color: 'black' }}>Beginner Pass</option>
                                </select>
                                {errorText('festivalPass')}
                            </div>

                            {/* Submit Button */}
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

                        {/* Page Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                fontSize: 'clamp(40px, 8vw, 72px)',
                                fontFamily: 'var(--font-serif)',
                                color: '#0a0a0aff',
                                textShadow: '0 0 20px rgba(255,255,255,0.2)',
                                fontWeight: '800',
                                marginBottom: '30px'
                            }}
                        >
                            Jack & Jill Competition
                        </motion.h1>

                        <div style={{ width: '80px', height: '4px', background: 'var(--color-gold)', margin: '0 auto 40px' }} />

                        <p style={{
                            fontSize: '20px',
                            color: 'rgba(27, 26, 26, 0.9)',
                            maxWidth: '800px',
                            margin: '0 auto',
                            fontWeight: '500'
                        }}>
                            Get ready for the most exciting Afro-Latin dance competition in India. Showcase your skills, connection, and musicality in our official Jack & Jill battles.
                        </p>

                        {/* Cards Grid */}
                        <div style={{
                            marginTop: '80px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '40px',
                            textAlign: 'left'
                        }}>

                            {/* ───── Card 1: Stage Competitions ───── */}
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
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                                        {[
                                            { title: 'Salsa Open', desc: 'Open Solo, Open Duet, Open Group' },
                                            { title: 'Salsa Pro', desc: 'Pro Solo, Pro Duet, Pro Group' },
                                            { title: 'Bachata Open', desc: 'Open Solo, Open Duet, Open Group' },
                                            { title: 'Bachata Pro', desc: 'Pro Solo, Pro Duet, Pro Group' },
                                            { title: 'Kizomba Open', desc: 'Open Solo, Open Duet, Open Group' },
                                            { title: 'Kizomba Pro', desc: 'Pro Solo, Pro Duet, Pro Group' }
                                        ].map((cat, i) => (
                                            <div key={i}
                                                style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '12px', transition: 'all 0.3s ease' }}
                                                onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)'; e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                                onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                            >
                                                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '6px', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>{cat.title}</h3>
                                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', margin: 0, lineHeight: '1.4', fontWeight: '600' }}>{cat.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setModalType('stage')}
                                        style={{ marginTop: '32px', marginBottom: '16px', width: '100%', padding: '20px', background: 'linear-gradient(45deg, var(--color-gold), #ffdf00)', color: '#fff', border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: '900', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)', letterSpacing: '1px', textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                    >Register Now</button>

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

                            {/* ───── Card 2: Street Battles ───── */}
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
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                                        {[
                                            { title: 'Salsa Open', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Salsa Pro', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Bachata Open', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Bachata Pro', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Kizomba Open', desc: '1 vs 1, Duet vs Duet' },
                                            { title: 'Kizomba Pro', desc: '1 vs 1, Duet vs Duet' }
                                        ].map((cat, i) => (
                                            <div key={i}
                                                style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '12px', transition: 'all 0.3s ease' }}
                                                onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.5)'; e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                                onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                            >
                                                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#fff', marginBottom: '6px', textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>{cat.title}</h3>
                                                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', margin: 0, lineHeight: '1.4', fontWeight: '600' }}>{cat.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setModalType('street')}
                                        style={{ marginTop: '32px', marginBottom: '16px', width: '100%', padding: '20px', background: 'linear-gradient(45deg, var(--color-gold), #ffdf00)', color: '#fff', border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: '900', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)', letterSpacing: '1px', textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                    >Register Now</button>

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
                                            <li>Judges' decisions are final and binding.</li>
                                            <li>No refunds will be provided for competition registrations.</li>
                                            <li>The organizing team reserves the right to reassign participants to a more suitable category if required.</li>
                                            <li>Media (photos/videos) captured during the event may be used for promotional purposes.</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                        {/* Additional Details Section */}
                        <div style={{
                            marginTop: '60px',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '30px'
                        }}>
                            {/* General Rules */}
                            <motion.div
                                style={{
                                    padding: '30px',
                                    background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'all 0.4s ease',
                                    textAlign: 'left'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.15)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                                }}
                            >
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-gold)', marginBottom: '16px', textShadow: '0 0 10px rgba(212,175,55,0.3)', fontFamily: 'var(--font-serif)' }}>General Rules</h3>
                                <ul style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', paddingLeft: '20px', margin: 0, lineHeight: '1.6', fontWeight: '500' }}>
                                    <li>All participants must hold a valid Lead O’Latino 2026 Festival Pass to compete.</li>
                                    <li>Registration is only confirmed after approval by the organizing team.</li>
                                    <li>Participants may register in multiple categories.</li>
                                    <li>All participants must report at least 60 minutes prior to their scheduled category time.</li>
                                    <li>Failure to be present when called may result in disqualification.</li>
                                    <li>The organizing team reserves the right to merge or cancel categories if necessary.</li>
                                </ul>
                            </motion.div>

                            {/* Registration Fee */}
                            <motion.div
                                style={{
                                    padding: '30px',
                                    background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'all 0.4s ease',
                                    textAlign: 'left'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.15)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                                }}
                            >
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-gold)', marginBottom: '16px', textShadow: '0 0 10px rgba(212,175,55,0.3)', fontFamily: 'var(--font-serif)' }}>Registration Fee</h3>
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', margin: 0, lineHeight: '1.6', fontWeight: '500' }}>
                                    Championship Registration: INR 2000
                                </p>
                            </motion.div>

                            {/* Contact for Registrations */}
                            <motion.div
                                style={{
                                    padding: '30px',
                                    background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'all 0.4s ease',
                                    textAlign: 'left'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.15)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                                }}
                            >
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-gold)', marginBottom: '16px', textShadow: '0 0 10px rgba(212,175,55,0.3)', fontFamily: 'var(--font-serif)' }}>Contact for Registrations</h3>
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', margin: 0, lineHeight: '1.6', fontWeight: '500' }}>
                                    Call/WhatsApp: +91 98210 77414<br />
                                    Email: leadolatino@gmail.com<br />
                                    Instagram DM: @leadolatino_afrolatinfestival
                                </p>
                            </motion.div>

                            {/* Organised by */}
                            <motion.div
                                style={{
                                    padding: '30px',
                                    background: 'linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.9))',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'all 0.4s ease',
                                    textAlign: 'left'
                                }}
                                onMouseOver={e => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.6)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.15)';
                                }}
                                onMouseOut={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                                }}
                            >
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--color-gold)', marginBottom: '16px', textShadow: '0 0 10px rgba(212,175,55,0.3)', fontFamily: 'var(--font-serif)' }}>Organised by</h3>
                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', margin: 0, lineHeight: '1.6', fontWeight: '500' }}>
                                    Suraj Verma & Addy
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <RegistrationModal
                isOpen={modalType !== null}
                onClose={() => setModalType(null)}
                type={modalType}
            />
        </div>
    );
};

export default JackAndJillPage;