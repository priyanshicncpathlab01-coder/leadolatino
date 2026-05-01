import React from 'react';
import { motion } from 'framer-motion';
// Dynamic import of all artist images
const imageModules = import.meta.glob('../assets/All Artist Pictures - Same background/*.{png,jpg,jpeg,PNG}', { eager: true });

const categories = [
    { id: 'salsa', title: 'Salsa Artists' },
    { id: 'bachata', title: 'Bachata Artists' },
    { id: 'kizomba', title: 'Kizomba Artists' },
    { id: 'dj', title: 'World-Class DJs' }
];

const artists = Object.entries(imageModules).map(([path, module], index) => {
    const fileName = path.split('/').pop().split('.')[0];
    const n = fileName.toLowerCase();
    let role = 'International Artist';
    let category = 'bachata';

    // Explicit Categorization
    if (n.includes('dj') || n.includes('fofojah') || n.includes('hajjar')) {
        role = 'World-Class DJ';
        category = 'dj';
    } else if (n.includes('maykel') || n.includes('antonio') || n.includes('diego')) {
        role = 'Salsa Artist';
        category = 'salsa';
    } else if (n.includes('said') || n.includes('oksana') || n.includes('ioury') || n.includes('adrian & carol')) {
        role = 'Kizomba Artist';
        category = 'kizomba';
    } else if (n.includes('ichigo')) {
        role = 'Kizomba Artist & DJ';
        category = 'dj';
    } else if (n.includes('sergio') || n.includes('burak') || n.includes('aitor') || n.includes('ace fusion') || n.includes('daimy') || n.includes('habibi') || n.includes('ward') || n.includes('david') || n.includes('majka') || n.includes('adrian & yoli') || n.includes('regina') || n.includes('gioia') || n.includes('dariya') || n.includes('jennifer') || n.includes('assel') || n.includes('svetlana')) {
        role = 'Bachata Artist';
        category = 'bachata';
    }

    // Overlap handling (placing in first relevant category or specified)
    if (n.includes('suraj') || n.includes('megha')) {
        role = 'Bachata & Kizomba';
        category = 'bachata';
    }
    if (n.includes('rahina') || n.includes('melanie') || n.includes('sveta')) {
        role = 'Salsa & Bachata';
        category = 'salsa';
    }
    if (n.includes('emcee')) {
        role = 'Official Emcee';
        category = 'dj'; // Emcee usually with DJs/Stage
    }

    return {
        id: index + 1,
        name: fileName,
        role: role,
        category: category,
        image: module.default || module
    };
}).sort((a, b) => a.name.localeCompare(b.name));


const LineUp = () => {
    return (
        <section id="line-up" style={{ padding: '100px 0', background: 'var(--color-bg-alt)', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ color: 'var(--color-gold-dark)', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Meet Our Star-Studded Line Up</h2>
                        <h3 style={{ fontSize: '48px', fontFamily: 'var(--font-serif)', color: 'var(--color-text-heading)', marginBottom: '20px' }}>Artists & Instructors</h3>
                        <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-dark))', margin: '0 auto', borderRadius: '3px' }} />
                    </motion.div>
                </div>

                {categories.map((cat) => {
                    const filteredArtists = artists.filter(a => a.category === cat.id);
                    if (filteredArtists.length === 0) return null;

                    return (
                        <div key={cat.id} style={{ marginBottom: '80px' }}>
                            <motion.h4
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    fontSize: '32px',
                                    fontFamily: 'var(--font-serif)',
                                    color: 'var(--color-gold-dark)',
                                    marginBottom: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    borderLeft: '4px solid var(--color-gold)',
                                    paddingLeft: '20px'
                                }}
                            >
                                {cat.title} <span style={{ fontSize: '24px' }}>{cat.icon}</span>
                            </motion.h4>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                                gap: '30px'
                            }}>
                                {filteredArtists.map((artist, index) => (
                                    <motion.div
                                        key={artist.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        style={{
                                            position: 'relative',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            boxShadow: 'var(--shadow-md)',
                                            background: 'var(--color-bg-card)'
                                        }}
                                        className="artist-card"
                                        onMouseEnter={(e) => {
                                            const overlay = e.currentTarget.querySelector('.artist-overlay');
                                            const img = e.currentTarget.querySelector('img');
                                            if (overlay) overlay.style.opacity = '1';
                                            if (img) img.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            const overlay = e.currentTarget.querySelector('.artist-overlay');
                                            const img = e.currentTarget.querySelector('img');
                                            if (overlay) overlay.style.opacity = '0';
                                            if (img) img.style.transform = 'scale(1)';
                                        }}
                                    >
                                        <div style={{ position: 'relative', paddingTop: '120%', overflow: 'hidden' }}>
                                            <img
                                                src={artist.image}
                                                alt={artist.name}
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform var(--transition-slow)'
                                                }}
                                            />
                                            <div
                                                className="artist-overlay"
                                                style={{
                                                    position: 'absolute',
                                                    top: 0, left: 0, right: 0, bottom: 0,
                                                    background: 'linear-gradient(to top, rgba(26, 21, 16, 0.9) 0%, rgba(26, 21, 16, 0.2) 50%, rgba(26, 21, 16, 0) 100%)',
                                                    opacity: 0,
                                                    transition: 'opacity var(--transition-normal)',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-end',
                                                    padding: '30px 20px',
                                                    textAlign: 'center'
                                                }}
                                            >
                                                <h4 style={{
                                                    color: 'var(--color-text-on-dark)',
                                                    fontFamily: 'var(--font-serif)',
                                                    fontSize: '24px',
                                                    marginBottom: '5px',
                                                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                                }}>
                                                    {artist.name}
                                                </h4>
                                                <p style={{
                                                    color: 'var(--color-gold)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    fontSize: '13px',
                                                    fontWeight: '600'
                                                }}>
                                                    {artist.role}
                                                </p>
                                            </div>
                                        </div>

                                        <div style={{
                                            padding: '20px',
                                            textAlign: 'center',
                                            borderTop: '1px solid var(--color-border)'
                                        }}>
                                            <h4 style={{
                                                color: 'var(--color-text-heading)',
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: '20px',
                                                marginBottom: '4px'
                                            }}>
                                                {artist.name}
                                            </h4>
                                            <p style={{
                                                color: 'var(--color-text-muted)',
                                                fontSize: '14px'
                                            }}>
                                                {artist.role}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="btn-outline"
                    >
                        View Full Schedule
                    </motion.button>
                </div>
            </div>
        </section>
    );
};


export default LineUp;
