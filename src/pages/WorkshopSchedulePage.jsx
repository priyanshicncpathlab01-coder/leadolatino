import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const scheduleDays = ['Thursday', 'Friday', 'Saturday', 'Sunday'];

const columns = [
    { name: 'Hours / Time', isTime: true },
    { name: 'Salsa (Hall 1)', isTime: false },
    { name: 'Bachata (Hall 2)', isTime: false },
    { name: 'Kizomba (Hall 3)', isTime: false },
    { name: 'Afro / Special (Hall 4)', isTime: false },
    { name: 'Bootcamp / Master (Hall 5)', isTime: false }
];

const timeSlotsByDay = {
    Thursday: [
        '14:00 - 14:50',
        '15:00 - 15:50',
        '16:00 - 16:50',
        '17:00 - 17:50'
    ],
    Friday: [
        '11:00 - 11:50',
        '12:00 - 12:50',
        '13:00 - 13:50',
        '14:00 - 14:50'
    ],
    Saturday: [
        '11:00 - 11:50',
        '12:00 - 12:50',
        '13:00 - 13:50',
        '14:00 - 14:50'
    ],
    Sunday: [
        '11:00 - 11:50',
        '12:00 - 12:50',
        '13:00 - 13:50',
        '14:00 - 14:50'
    ]
};

const styles = `
    :root {
        --gold-light: #F5D67A;
        --gold-mid: #D4AF37;
        --gold-deep: #C8963E;
        --gold-dark: #9A7520;
        --black: #f0f0f0;
        --black-soft: #111111;
        --black-card: #141414;
        --black-border: #2A2A2A;
        --text-primary: #F0E6C8;
        --text-secondary: #A89060;
        --text-muted: #6B5A3A;
    }

    .wks-page {
        background: var(--black);
        font-family: var(--font-sans);
        color: var(--text-primary);
    }

    .wks-header {
        text-align: center;
        padding: 100px 24px 40px;
        position: relative;
    }

    .wks-title {
        font-family: var(--font-serif);
        font-size: clamp(32px, 5vw, 52px);
        font-weight: 500;
        letter-spacing: 0.15em;
        color: var(--gold-light);
        text-transform: uppercase;
        margin-bottom: 12px;
    }

    .wks-subtitle {
        font-family: var(--font-sans);
        font-size: clamp(16px, 2vw, 20px);
        color: var(--text-secondary);
        max-width: 700px;
        margin: 0 auto 30px;
        font-weight: 300;
        line-height: 1.6;
    }

    .wks-tab-bar {
        display: flex;
        justify-content: center;
        gap: 12px;
        margin-bottom: 50px;
        flex-wrap: wrap;
        padding: 0 24px;
    }

    .wks-tab-btn {
        background: var(--black-card);
        border: 1px solid var(--black-border);
        color: var(--text-secondary);
        font-family: var(--font-sans);
        padding: 12px 30px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 13px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 600;
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .wks-tab-btn:hover {
        border-color: var(--gold-mid);
        color: var(--gold-light);
        box-shadow: 0 4px 15px rgba(212,175,55,0.15);
    }

    .wks-tab-btn.active {
        border-color: var(--gold-mid);
        color: var(--black);
        background: linear-gradient(135deg, var(--gold-light), var(--gold-mid));
        box-shadow: 0 4px 20px rgba(212,175,55,0.3);
    }

    /* Premium Schedule Table/Grid */
    .wks-table-container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 80px;
        padding: 0 24px;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    /* Custom Webkit scrollbar for table container */
    .wks-table-container::-webkit-scrollbar {
        height: 6px;
    }
    .wks-table-container::-webkit-scrollbar-track {
        background: var(--black-soft);
    }
    .wks-table-container::-webkit-scrollbar-thumb {
        background: var(--gold-dark);
        border-radius: 3px;
    }
    .wks-table-container::-webkit-scrollbar-thumb:hover {
        background: var(--gold-mid);
    }

    .wks-table {
        width: 100%;
        min-width: 950px; /* Ensures columns stay wide and readable on mobile scroll */
        border-collapse: separate;
        border-spacing: 12px;
        table-layout: fixed;
    }

    .wks-th {
        background: var(--black-soft);
        border: 1px solid var(--gold-dark);
        color: var(--gold-light);
        font-family: var(--font-serif);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        padding: 18px 12px;
        text-align: center;
        border-radius: 6px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .wks-th.time-column {
        width: 16%;
        border-color: rgba(212, 175, 55, 0.4);
    }

    .wks-td {
        background: var(--black-card);
        border: 1px dashed rgba(212, 175, 55, 0.15);
        height: 100px;
        border-radius: 8px;
        position: relative;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        cursor: pointer;
    }

    /* Time column cell styling */
    .wks-td.time-cell {
        background: var(--black-soft);
        border: 1px solid rgba(212, 175, 55, 0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        cursor: default;
    }

    .wks-time-text {
        font-family: var(--font-serif);
        font-size: 14px;
        font-weight: 500;
        color: var(--text-secondary);
        letter-spacing: 1px;
        text-align: center;
    }

    /* Glow effect on hover */
    .wks-td:not(.time-cell):hover {
        border-color: var(--gold-mid);
        border-style: solid;
        background: rgba(212, 175, 55, 0.02);
        box-shadow: 0 0 25px rgba(212, 175, 55, 0.08);
        transform: translateY(-2px);
    }

    .wks-td:not(.time-cell)::after {
        content: '+';
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        font-family: var(--font-sans);
        font-size: 20px;
        color: var(--text-muted);
        opacity: 0.25;
        font-weight: 300;
        transition: all 0.3s ease;
    }

    .wks-td:not(.time-cell):hover::after {
        opacity: 0.7;
        color: var(--gold-light);
        transform: translate(-50%, -50%) rotate(90deg);
    }

    @media (max-width: 768px) {
        .wks-header {
            padding: 80px 16px 30px;
        }
        .wks-tab-bar {
            margin-bottom: 30px;
            gap: 8px;
        }
        .wks-tab-btn {
            padding: 10px 20px;
            font-size: 11px;
        }
        .wks-table {
            min-width: 850px;
            border-spacing: 8px;
        }
        .wks-td, .wks-td.time-cell {
            height: 90px;
        }
        .wks-th {
            font-size: 12px;
            padding: 14px 8px;
        }
    }
`;

const WorkshopSchedulePage = () => {
    const [selectedDay, setSelectedDay] = useState('Friday');

    const currentTimeSlots = timeSlotsByDay[selectedDay] || [];

    return (
        <div className="app wks-page" style={{ minHeight: '100vh', position: 'relative' }}>
            <style>{styles}</style>
            <Navbar />

            <main style={{ paddingTop: '100px' }}>
                <section className="wks-header">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            display: 'inline-block',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '11px',
                            fontWeight: '600',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: 'var(--gold-mid)',
                            border: '1px solid rgba(212, 175, 55, 0.3)',
                            padding: '6px 20px',
                            borderRadius: '30px',
                            marginBottom: '15px',
                            background: 'rgba(212, 175, 55, 0.03)'
                        }}>
                            Workshop Pass Experience
                        </span>
                        <h1 className="wks-title">Workshop Schedule</h1>
                        <p className="wks-subtitle">
                            Immerse yourself in our premium multi-hall workshop experience. Custom slots will be updated soon.
                        </p>
                    </motion.div>
                </section>

                {/* Day Selectors */}
                <div className="wks-tab-bar">
                    {scheduleDays.map((day, i) => (
                        <motion.button
                            key={day}
                            className={`wks-tab-btn ${selectedDay === day ? 'active' : ''}`}
                            onClick={() => setSelectedDay(day)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                            {day}
                        </motion.button>
                    ))}
                </div>

                {/* Schedule Table */}
                <div className="wks-table-container">
                    <AnimatePresence mode="wait">
                        <motion.table 
                            key={selectedDay}
                            className="wks-table"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4 }}
                        >
                            <thead>
                                <tr>
                                    {columns.map((col, index) => (
                                        <th 
                                            key={index} 
                                            className={`wks-th ${col.isTime ? 'time-column' : ''}`}
                                        >
                                            {col.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentTimeSlots.map((timeRange, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {columns.map((col, colIndex) => (
                                            col.isTime ? (
                                                <td key={colIndex} style={{ padding: 0 }}>
                                                    <div className="wks-td time-cell">
                                                        <span className="wks-time-text">{timeRange}</span>
                                                    </div>
                                                </td>
                                            ) : (
                                                <td key={colIndex} className="wks-td">
                                                    {/* Empty placeholder cell */}
                                                </td>
                                            )
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </motion.table>
                    </AnimatePresence>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default WorkshopSchedulePage;
