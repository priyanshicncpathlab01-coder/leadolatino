import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import workshopBg from '../assets/2.jpg';

const scheduleData = [
    {
        day: 'Thursday',
        label: 'Pre-Party',
        icon: '🔥',
        time: '9:30 PM onwards',
        accent: '#bda022',
        description: 'Kickstart the madness with our exclusive Pre-Party Social Night 💃🕺',
        type: 'single',
    },
    {
        day: 'Fri · Sat · Sun',
        label: 'Workshops',
        icon: '🎓',
        time: '11:00 AM – 8:00 PM  ·  Lunch: 2:00–3:00 PM',
        accent: '#D4AF37',
        type: 'halls',
        halls: [
            { title: '4 Dance Halls', items: ['Salsa', 'Bachata', 'Kizomba', 'Afro-Latin Special'] },
            { title: '5th Hall', items: ['Street Competitions', 'Battles', 'Intensive Bootcamps', 'Interactive Sessions'] },
        ],
    },
    {
        day: 'Every Evening',
        label: 'Stage Events',
        icon: '🏆',
        time: '8:00 PM – 10:00 PM',
        accent: '#C8963E',
        type: 'pills',
        pills: ['Stage Competitions', 'International Performances', 'National Performances', 'Team Showcases', 'Championship Moments ✨'],
    },
    {
        day: 'Every Night',
        label: 'Night Socials & Theme Parties',
        icon: '🌙',
        time: '10:00 PM onwards — Dance till sunrise',
        accent: '#D4AF37',
        type: 'pills',
        pills: ['Massive Social Dance Floors', 'Theme Parties', 'International DJs', 'Special Theme Nights 🎭'],
    },
    {
        day: 'Monday',
        label: 'Post-Party',
        icon: '🎉',
        time: '9:30 PM onwards',
        accent: '#ddd6c9',
        description: 'One final night to celebrate memories, friendships & dance ❤️',
        type: 'single',
    },
    {
        day: 'Always',
        label: "And That's Not All…",
        icon: '🌟',
        time: 'More updates coming soon',
        accent: '#D4AF37',
        type: 'extras',
        pills: ['🎲 Fun Games & Activities', '☀️ Day Socials', '🌅 Sunset Party', '🎭 Theme Experiences', 'Surprise Activities'],
        heritage: '🕌 Heart of India Heritage Tour — Reach out to know more about our special experience 🇮🇳✨',
    },
];

const styles = `
    :root {
        --gold-light: #F5D67A;
        --gold-mid: #D4AF37;
        --gold-deep: #C8963E;
        --gold-dark: #9A7520;
        --black: #f1ecec;
        --black-soft: #111111;
        --black-card: #141414;
        --black-border: #2A2A2A;
        --text-primary: #F0E6C8;
        --text-secondary: #A89060;
        --text-muted: #6B5A3A;
    }
 
    .ws-page {
        background: var(--black);
        font-family: var(--font-sans);
    }
 
    .ws-schedule-section {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 24px 100px;
        background: var(--black);
        overflow: hidden;
    }
 
    .ws-schedule-section::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background:
            radial-gradient(ellipse 60% 40% at 15% 20%, rgba(212,175,55,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 30% at 85% 80%, rgba(200,150,62,0.06) 0%, transparent 60%);
        pointer-events: none;
    }
 
    .ws-section-title {
        font-family: var(--font-serif);
        font-size: clamp(38px, 5vw, 48px);
        font-weight: 800;
        letter-spacing: 0.12em;
        text-align: center;
color: #000000;
        margin-bottom: 8px;
        text-transform: uppercase;
    }
 
    .ws-title-rule {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
        margin-bottom: 64px;
    }
 
    .ws-title-rule-line {
        height: 1px;
        width: 80px;
        background: linear-gradient(to right, transparent, var(--gold-mid));
    }
 
    .ws-title-rule-line.right {
        background: linear-gradient(to left, transparent, var(--gold-mid));
    }
 
    .ws-title-rule-diamond {
        width: 8px;
        height: 8px;
        background: var(--gold-mid);
        transform: rotate(45deg);
        flex-shrink: 0;
    }
 
    .ws-timeline {
        position: relative;
        width: 100%;
        max-width: 900px;
        z-index: 1;
    }
 
    .ws-timeline::before {
        content: '';
        position: absolute;
        left: 52px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: linear-gradient(to bottom,
            transparent 0%,
            var(--gold-dark) 5%,
            var(--gold-dark) 95%,
            transparent 100%
        );
    }
 
    .ws-event {
        display: flex;
        gap: 0;
        margin-bottom: 32px;
        position: relative;
        animation: fadeSlideIn 0.6s ease both;
    }
 
    @keyframes fadeSlideIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
 
    .ws-event:nth-child(1) { animation-delay: 0.1s; }
    .ws-event:nth-child(2) { animation-delay: 0.2s; }
    .ws-event:nth-child(3) { animation-delay: 0.3s; }
    .ws-event:nth-child(4) { animation-delay: 0.4s; }
    .ws-event:nth-child(5) { animation-delay: 0.5s; }
    .ws-event:nth-child(6) { animation-delay: 0.6s; }
 
    .ws-event-marker {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 104px;
        flex-shrink: 0;
        padding-top: 4px;
    }
 
    .ws-event-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--black-card);
        border: 1px solid var(--gold-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        position: relative;
        z-index: 2;
        box-shadow: 0 0 20px rgba(212,175,55,0.15);
        flex-shrink: 0;
    }
 
    .ws-event-day {
        font-family: var(--font-sans);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.1em;
        color: var(--text-secondary);
        text-transform: uppercase;
        text-align: center;
        margin-top: 6px;
        line-height: 1.4;
    }
 
    .ws-event-card {
        flex: 1;
        background: var(--black-card);
        border: 1px solid var(--black-border);
        border-left: 2px solid var(--gold-dark);
        border-radius: 0 12px 12px 0;
        overflow: hidden;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
 
    .ws-event-card:hover {
        border-color: var(--gold-mid);
        border-left-color: var(--gold-mid);
        box-shadow: 0 4px 32px rgba(212,175,55,0.1);
    }
 
    .ws-event-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 20px;
        border-bottom: 1px solid #1E1E1E;
        flex-wrap: wrap;
        gap: 8px;
    }
 
    .ws-event-label {
        font-family: var(--font-serif);
        font-size: clamp(14px, 2vw, 18px);
        font-weight: 500;
        color: var(--gold-light);
        letter-spacing: 0.06em;
    }
 
    .ws-event-time {
        font-family: var(--font-sans);
        font-size: 14px;
        color: #fffbfb;
        letter-spacing: 0.03em;
        font-weight: 500;
    }
 
    .ws-event-body {
        padding: 16px 20px;
    }
 
    .ws-event-desc {
        font-family: var(--font-sans);
        font-size: 15px;
        color: var(--text-primary);
        line-height: 1.7;
        font-weight: 300;
    }
 
    .ws-halls-label {
        font-family: var(--font-serif);
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.15em;
        color: var(--text-muted);
        text-transform: uppercase;
        margin-bottom: 12px;
    }
 
    .ws-halls-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }
 
    .ws-hall-box {
        background: #0E0E0E;
        border: 1px solid #222;
        border-top: 2px solid var(--gold-dark);
        border-radius: 6px;
        padding: 12px 14px;
    }
 
    .ws-hall-title {
        font-family: var(--font-serif);
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.12em;
        color: var(--gold-deep);
        text-transform: uppercase;
        margin-bottom: 10px;
    }
 
    .ws-hall-item {
        font-family: var(--font-sans);
        font-size: 14px;
        color: var(--text-primary);
        padding: 3px 0;
        border-bottom: 1px solid #1A1A1A;
        display: flex;
        align-items: center;
        gap: 6px;
    }
 
    .ws-hall-item:last-child { border-bottom: none; }
 
    .ws-hall-item::before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 4px;
        background: var(--gold-dark);
        transform: rotate(45deg);
        flex-shrink: 0;
    }
 
    .ws-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
 
    .ws-pill {
        font-family: var(--font-sans);
        font-size: 13px;
        padding: 5px 14px;
        border-radius: 2px;
        background: transparent;
        border: 1px solid var(--gold-dark);
        color: var(--gold-light);
        letter-spacing: 0.04em;
        transition: background 0.2s ease, border-color 0.2s ease;
    }
 
    .ws-pill:hover {
        background: rgba(212,175,55,0.08);
        border-color: var(--gold-mid);
    }
 
    .ws-heritage {
        margin-top: 14px;
        padding: 12px 16px;
        background: linear-gradient(135deg, rgba(212,175,55,0.08), rgba(200,150,62,0.05));
        border: 1px solid var(--gold-dark);
        border-radius: 6px;
        font-family: var(--font-sans);
        font-size: 14px;
        color: var(--gold-light);
        line-height: 1.6;
    }
 
    @media (max-width: 640px) {
        .ws-timeline::before {
            left: 36px;
        }
 
        .ws-event-marker {
            width: 72px;
        }
 
        .ws-event-icon {
            width: 32px;
            height: 32px;
            font-size: 15px;
        }
 
        .ws-event-day {
            font-size: 8px;
        }
 
        .ws-halls-grid {
            grid-template-columns: 1fr;
        }
 
        .ws-event-header {
            flex-direction: column;
            align-items: flex-start;
        }
 
        .ws-schedule-section {
            padding: 60px 16px 80px;
        }
 
        .ws-title-rule-line {
            width: 40px;
        }
    }
 
    @media (max-width: 480px) {
        .ws-event {
            gap: 0;
        }
 
        .ws-event-body {
            padding: 12px 14px;
        }
 
        .ws-event-header {
            padding: 12px 14px;
        }
    }
`;

const WorkshopsPage = () => {
    return (
        <div className="app ws-page" style={{ minHeight: '100vh', position: 'relative' }}>
            <style>{styles}</style>
            <Navbar />

            <main style={{ paddingTop: '80px' }}>
                {/* Main Image Section */}
                <section style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '60px 0 0',
                    background: '#0A0A0A',
                    overflow: 'hidden'
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        style={{ width: '100%' }}
                    >
                        <img
                            src={workshopBg}
                            alt="Workshop Standee"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block'
                            }}
                        />
                    </motion.div>
                </section>

                {/* Schedule Section */}
                <section className="ws-schedule-section">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ width: '100%', maxWidth: '900px', position: 'relative', zIndex: 1 }}
                    >
                        <h1 className="ws-section-title">Event Schedule</h1>
                        <div className="ws-title-rule">
                            <div className="ws-title-rule-line"></div>
                            <div className="ws-title-rule-diamond"></div>
                            <div className="ws-title-rule-line right"></div>
                        </div>

                        <div className="ws-timeline">
                            {scheduleData.map((event, i) => (
                                <div className="ws-event" key={i}>
                                    <div className="ws-event-marker">
                                        <div className="ws-event-icon">{event.icon}</div>
                                        <div className="ws-event-day">{event.day}</div>
                                    </div>

                                    <div className="ws-event-card">
                                        <div className="ws-event-header">
                                            <span className="ws-event-label">{event.label}</span>
                                            <span className="ws-event-time">{event.time}</span>
                                        </div>

                                        <div className="ws-event-body">
                                            {event.type === 'single' && (
                                                <p className="ws-event-desc">{event.description}</p>
                                            )}

                                            {event.type === 'halls' && (
                                                <>
                                                    <div className="ws-halls-label">5 Separate Halls Experience</div>
                                                    <div className="ws-halls-grid">
                                                        {event.halls.map((hall, j) => (
                                                            <div className="ws-hall-box" key={j}>
                                                                <div className="ws-hall-title">{hall.title}</div>
                                                                {hall.items.map(item => (
                                                                    <div className="ws-hall-item" key={item}>{item}</div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}

                                            {event.type === 'pills' && (
                                                <div className="ws-pills">
                                                    {event.pills.map(pill => (
                                                        <span className="ws-pill" key={pill}>{pill}</span>
                                                    ))}
                                                </div>
                                            )}

                                            {event.type === 'extras' && (
                                                <>
                                                    <div className="ws-pills">
                                                        {event.pills.map(pill => (
                                                            <span className="ws-pill" key={pill}>{pill}</span>
                                                        ))}
                                                    </div>
                                                    <div className="ws-heritage">{event.heritage}</div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default WorkshopsPage;

