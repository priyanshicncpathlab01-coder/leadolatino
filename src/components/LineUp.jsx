import React from 'react';
import { motion } from 'framer-motion';

const imageModules = import.meta.glob('../assets/All Artist Pictures - Same background/*.{png,jpg,jpeg,PNG}', { eager: true });

const categories = [
    { id: 'salsa',   title: 'Salsa Maestros' },
    { id: 'bachata', title: 'Bachata Sensualists' },
    { id: 'kizomba', title: 'Kizomba Artists' },
    { id: 'dj',      title: 'The Sound Architects' },
    { id: 'concert', title: 'Live Performance' }
];

const displayNames = {
    'Aitor & Angelica':                    'Aitor & Angélica',
    'Daimy & Valeria':                     'Daimy & Valleria',
    'Antonio Berardi & Jasmina Berardi':   'Antonio Berardi & Jasmina Berardi',
    'Svetlana(golden)':                    'Svetlana',
    'Tony Lozano':                         'Tony Lozano'
};

const bachataOrder = {
    'sergio & elena':    1,
    'aitor & angelica':  2,
    'burak & estefania': 3,
    'magda liuzza':      4,
    'daimy & valeria':   5,
    'saj & emi':         6,
    'svetlana & magzhan':7,
    'ace fusion':        8,
    'suraj & megha':     9,
    'ward & niki':       10,
    'habibi & marta':    11,
    'david & laura':     12,
    'yakov & lisa':      13,
    'majka & bartek':    14,
    'adrian & yoli':     15,
    'gioia':             16,
    'regina':            17,
    'jennifer':          18,
    'melanie':           19,
    'dariya':            20,
    'svetlana(golden)':  21
};

const salsaOrder = {
    'maykel fonts':                    1,
    'antonio berardi & jasmina berardi': 2,
    'diego & sofia':                   3,
    'rahina':                          4,
    'svetlana':                        5
};

const kizombaOrder = {
    'said & oksana':  1,
    'ioury & eden':   2,
    'ichigo':         3,
    'adrian & carol': 4,
    'suraj & megha':  5,
    'melanie':        6
};

const djOrder = {
    'dj khalid':  1,
    'dj fofojah': 2,
    'dj ichigo':  3,
    'dj hajjar':  4,
    'dj saj':     5
};

const getOrder = (category, n) => {
    if (category === 'bachata')  return bachataOrder[n] || 99;
    if (category === 'salsa')    return salsaOrder[n]   || 99;
    if (category === 'kizomba')  return kizombaOrder[n] || 99;
    if (category === 'dj')       return djOrder[n]      || 99;
    if (category === 'concert')  return 1;
    return 99;
};

// ✅ let — taaki duplicate push kar sakein
let artists = Object.entries(imageModules).map(([path, module], index) => {
    const fileName = path.replace(/\\/g, '/').split('/').pop().split('.')[0].trim();
    const n = fileName.toLowerCase();
    let role     = 'International Artist';
    let category = 'bachata';

    // --- Categorization (order matters — DJ check pehle) ---

    // Concert / Special Performance
    if (n.includes('tony lozano')) {
        role     = 'Live Performance Artist';
        category = 'concert';

    // DJ — ichigo explicitly exclude kiya hai
    } else if ((n.includes('fofojah') || n.includes('hajjar') || n.includes('dj'))
        && !n.includes('ichigo')) {
        role     = 'World-Class DJ';
        category = 'dj';

    // Salsa
    } else if (
        n.includes('maykel') || n.includes('antonio') || n.includes('diego') ||
        n.includes('rahina') ||
        (n.includes('svetlana') && !n.includes('magzhan') && !n.includes('golden'))
    ) {
        role     = 'Salsa Artist';
        category = 'salsa';

    // Kizomba
    } else if (
        n.includes('said')   || n.includes('oksana') ||
        n.includes('ioury')  || n.includes('ichigo') ||
        n.includes('adrian & carol') ||
        n.includes('suraj')  || n.includes('megha')
    ) {
        role     = 'Kizomba Artist';
        category = 'kizomba';

    // Bachata
    } else if (
        n.includes('sergio')  || n.includes('burak')    || n.includes('aitor')  ||
        n.includes('ace fusion') || n.includes('daimy') || n.includes('habibi') ||
        n.includes('ward')    || n.includes('david')    || n.includes('majka')  ||
        n.includes('adrian & yoli') || n.includes('regina') || n.includes('gioia') ||
        n.includes('dariya')  || n.includes('jennifer') || n.includes('assel')  ||
        n.includes('svetlana')|| n.includes('magda')    || n.includes('saj')    ||
        n.includes('emi')     || n.includes('magzhan')  || n.includes('niki')   ||
        n.includes('melanie') || n.includes('yakov')
    ) {
        role     = 'Bachata Artist';
        category = 'bachata';
    }

    // Emcee override
    if (n.includes('emcee')) {
        role     = 'Official Emcee';
        category = 'dj';
    }

    return {
        id:            index + 1,
        name:          displayNames[fileName] || fileName,
        role,
        category,
        image:         module.default || module,
        order:         getOrder(category, n),
        originalIndex: index
    };
});

const surajMegha = artists.find(a => a.name.toLowerCase().includes('suraj'));
if (surajMegha) {
    artists.push({
        ...surajMegha,
        id:       9999,
        category: 'bachata',
        role:     'Bachata & Kizomba',
        order:    bachataOrder['suraj & megha'] || 9
    });
}


const ichigo = artists.find(a => a.name.toLowerCase().includes('ichigo'));
if (ichigo) {
    artists.push({
        ...ichigo,
        id:       9998,
        category: 'dj',
        role:     'Kizomba Artist & DJ',
        order:    djOrder['dj ichigo'] || 3
    });
}
const melanie = artists.find(a => a.name.toLowerCase().includes('melanie'));
if (melanie) {
    artists.push({
        ...melanie,
        id:       9997,
        category: 'kizomba',
        role:     'Bachata & Kizomba',
        order:    kizombaOrder['melanie'] || 6   // kizomba mein 6th position
    });
}

artists = artists.sort((a, b) => {
    if (a.category === b.category) {
        return a.order - b.order;
    }
    const categoryOrder = ['concert', 'salsa', 'bachata', 'kizomba', 'dj'];
    return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
});


const LineUp = () => {
    return (
        <section id="line-up" className="creative-section" style={{ padding: '160px 0', background: 'var(--color-bg-main)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Creative Elements */}
            <div className="bg-grid-pattern" />
            <div className="bg-watermark">CONGRESS</div>
            
            {/* Animated Particles */}
            {[...Array(15)].map((_, i) => (
                <div 
                    key={i} 
                    className="gold-particle" 
                    style={{ 
                        left: `${Math.random() * 100}%`, 
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${15 + Math.random() * 10}s`
                    }} 
                />
            ))}

            <div className="bg-glow-orb orb-1" />
            <div className="bg-glow-orb orb-2" />

            <div style={{
                position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
                fontSize: '15vw', fontWeight: '900', color: 'rgba(201, 152, 46, 0.03)',
                whiteSpace: 'nowrap', zIndex: 0, pointerEvents: 'none',
                fontFamily: 'var(--font-serif)', textTransform: 'uppercase'
            }}>
                World Class Talent
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '100px', position: 'relative' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span style={{ 
                            color: 'var(--color-gold)', 
                            fontSize: '12px', 
                            fontWeight: '800', 
                            letterSpacing: '5px', 
                            textTransform: 'uppercase', 
                            display: 'block', 
                            marginBottom: '20px',
                            opacity: 0.8
                        }}>
                            The Star-Studded
                        </span>
                        <h2 className="premium-shimmer-text" style={{ 
                            fontSize: 'clamp(40px, 8vw, 72px)', 
                            fontFamily: 'var(--font-serif)', 
                            color: 'var(--color-text-heading)', 
                            marginBottom: '25px', 
                            fontWeight: '400',
                            lineHeight: 1
                        }}>
                            Event Line Up
                        </h2>
                        <div style={{ width: '80px', height: '1px', background: 'var(--color-gold)', margin: '0 auto', opacity: 0.5 }} />
                    </motion.div>
                </div>

                {categories.map((cat) => {
                    const filteredArtists = artists.filter(a => a.category === cat.id);
                    if (filteredArtists.length === 0) return null;

                    return (
                        <div key={cat.id} style={{ marginBottom: '100px' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    marginBottom: '80px',
                                    position: 'relative'
                                }}
                            >
                                <div style={{
                                    background: '#000',
                                    padding: '20px 60px',
                                    border: '1px solid var(--color-gold)',
                                    boxShadow: '10px 10px 0px var(--color-gold)',
                                    transform: 'skewX(-10deg)',
                                    position: 'relative',
                                    zIndex: 2
                                }}>
                                    <h4 style={{ 
                                        fontSize: 'clamp(32px, 5vw, 48px)', 
                                        fontFamily: 'var(--font-sans)', 
                                        color: '#fff', 
                                        fontWeight: '900',
                                        textTransform: 'uppercase',
                                        letterSpacing: '6px',
                                        margin: 0,
                                        transform: 'skewX(10deg)' // Counter skew for text
                                    }}>
                                        {cat.title}
                                    </h4>
                                </div>
                                {/* Decorative line behind */}
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '50%', 
                                    left: '0', 
                                    right: '0', 
                                    height: '1px', 
                                    background: 'rgba(201, 152, 46, 0.2)', 
                                    zIndex: 1 
                                }} />
                            </motion.div>

                            <div className="artist-grid">
                                {filteredArtists.map((artist, index) => (
                                    <motion.div
                                        key={artist.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.05 }}
                                        className="artist-card-elegant"
                                    >
                                        <div className="artist-card-inner">
                                            <div className="artist-image-box">
                                                <img
                                                    src={artist.image}
                                                    alt={artist.name}
                                                    className="artist-img-elegant"
                                                    onError={(e) => e.target.src = '/fallback-artist.jpg'}
                                                />
                                                <div className="artist-glow-overlay" />
                                                <div className="artist-info-overlay-elegant">
                                                    <span className="artist-category-tag">{artist.category}</span>
                                                    <div className="artist-meta">
                                                        <p className="artist-role-elegant">{artist.role}</p>
                                                        <h4 className="artist-name-elegant">{artist.name}</h4>
                                                    </div>
                                                </div>
                                                <div className="artist-shimmer-sweep" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .creative-section {
                    background-color: #050403; 
                    position: relative;
                }

                /* Creative Background Watermark */
                .bg-watermark {
                    position: absolute;
                    top: 20%;
                    left: 50%;
                    transform: translateX(-50%);
                    font-size: 25vw;
                    font-family: var(--font-serif);
                    color: rgba(201, 152, 46, 0.02);
                    white-space: nowrap;
                    pointer-events: none;
                    z-index: 0;
                    user-select: none;
                }

                .bg-grid-pattern {
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(rgba(201, 152, 46, 0.08) 1px, transparent 1px);
                    background-size: 40px 40px;
                    opacity: 0.4;
                    pointer-events: none;
                }

                /* Animated Golden Particles */
                .gold-particle {
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: var(--color-gold);
                    border-radius: 50%;
                    opacity: 0.3;
                    pointer-events: none;
                    animation: floatParticle 20s infinite linear;
                }

                @keyframes floatParticle {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
                }

                .bg-glow-orb {
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    border-radius: 50%;
                    filter: blur(120px);
                    z-index: 0;
                    opacity: 0.08;
                    pointer-events: none;
                }
                .orb-1 { top: -10%; left: -10%; background: var(--color-gold); }
                .orb-2 { bottom: -10%; right: -10%; background: #c9982e; }

                .premium-shimmer-text {
                    background: linear-gradient(
                        90deg, 
                        #fff 0%, 
                        var(--color-gold) 50%, 
                        #fff 100%
                    );
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: textShimmer 8s linear infinite;
                }

                @keyframes textShimmer {
                    to { background-position: 200% center; }
                }

                .artist-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* 3 Artists per row */
                    gap: 60px 40px;
                }

                @media (max-width: 1024px) {
                    .artist-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 640px) {
                    .artist-grid {
                        grid-template-columns: 1fr;
                    }
                }

                .artist-card-elegant {
                    position: relative;
                    cursor: pointer;
                    perspective: 1000px;
                }

                .artist-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1);
                }

                .artist-image-box {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 1/1; /* Square for smaller size */
                    overflow: hidden;
                    border-radius: 24px; /* Slightly smaller radius for smaller size */
                    background: #111;
                    border: 1px solid rgba(201, 152, 46, 0.1);
                    transition: all 0.6s cubic-bezier(0.2, 0, 0, 1);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                }

                .artist-img-elegant {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 1.2s cubic-bezier(0.2, 0, 0, 1);
                }

                .artist-glow-overlay {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%);
                    opacity: 0.6;
                    transition: all 0.6s ease;
                    z-index: 1;
                }

                /* Elegant Glow Effect on Hover */
                .artist-card-elegant:hover .artist-image-box {
                    transform: translateY(-10px);
                    border-color: var(--color-gold);
                    box-shadow: 
                        0 0 0 1px rgba(201, 152, 46, 0.3),
                        0 20px 40px rgba(0, 0, 0, 0.8),
                        0 0 30px rgba(201, 152, 46, 0.2);
                }

                .artist-card-elegant:hover .artist-img-elegant {
                    transform: scale(1.1);
                    filter: sepia(0.3) saturate(1.5) brightness(0.8) hue-rotate(-10deg);
                }

                .artist-card-elegant:hover .artist-image-box {
                    border-color: var(--color-gold);
                    box-shadow: 
                        0 0 40px rgba(201, 152, 46, 0.4),
                        0 0 0 2px var(--color-gold);
                }

                .artist-shimmer-sweep {
                    position: absolute;
                    top: 0;
                    left: -150%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(201, 152, 46, 0.2),
                        transparent
                    );
                    transform: skewX(-20deg);
                    transition: all 0.75s ease;
                    z-index: 3;
                    pointer-events: none;
                }

                .artist-card-elegant:hover .artist-shimmer-sweep {
                    left: 150%;
                }

                .artist-info-overlay-elegant {
                    position: absolute;
                    inset: 0;
                    padding: 25px; /* Reduced padding */
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    z-index: 2;
                }

                .artist-category-tag {
                    align-self: flex-end;
                    font-size: 9px; /* Slightly smaller */
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: var(--color-gold);
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(8px);
                    padding: 4px 10px;
                    border-radius: 100px;
                    border: 1px solid rgba(201, 152, 46, 0.2);
                    transform: translateY(-10px);
                    opacity: 0;
                    transition: all 0.5s cubic-bezier(0.2, 0, 0, 1);
                }

                .artist-card-elegant:hover .artist-category-tag {
                    transform: translateY(0);
                    opacity: 1;
                }

                .artist-meta {
                    transform: translateY(10px);
                    transition: all 0.6s cubic-bezier(0.2, 0, 0, 1);
                }

                .artist-card-elegant:hover .artist-meta {
                    transform: translateY(0);
                }

                .artist-role-elegant {
                    color: var(--color-gold);
                    font-size: 10px; /* Smaller */
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 5px;
                    opacity: 0;
                    transition: all 0.6s ease;
                }

                .artist-card-elegant:hover .artist-role-elegant {
                    opacity: 1;
                }

                .artist-name-elegant {
                    font-family: var(--font-serif);
                    color: #fff;
                    font-size: 32px; /* Large highlighted name */
                    margin: 0;
                    line-height: 1.1;
                    font-weight: 600;
                    text-shadow: 0 4px 15px rgba(0,0,0,0.8);
                    letter-spacing: 1px;
                }

                @media (max-width: 768px) {
                    .artist-grid {
                        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
                        gap: 30px 20px;
                    }
                    .artist-image-box { border-radius: 24px; }
                }
            ` }} />
        </section>
    );
};

export default LineUp;