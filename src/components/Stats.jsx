import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Star, BookOpen, Music } from 'lucide-react';

const statsData = [
    { value: 1111, suffix: '+', label: 'Social Dancers', sublabel: 'from around the world', Icon: Users },
    { value: 100,  suffix: '+', label: 'Artists',        sublabel: 'world-class performers',  Icon: Star },
    { value: 120,  suffix: '',  label: 'Workshops',       sublabel: 'across all styles',        Icon: BookOpen },
    { value: 50,   suffix: '',  label: 'Shows',           sublabel: 'live on stage',            Icon: Music },
];

function useCounter(target, isVisible, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;
        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, target, duration]);

    return count;
}

const StatCard = ({ value, suffix, label, sublabel, Icon, index, isVisible }) => {
    const count = useCounter(value, isVisible);

    return (
        <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 }}
        >
            {/* Top accent line */}
            <div className="stat-card-accent" />

            {/* Icon */}
            <div className="stat-icon-wrap">
                <Icon size={26} strokeWidth={1.5} />
            </div>

            {/* Number */}
            <motion.span
                className="stat-number"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
            >
                {count.toLocaleString()}{suffix}
            </motion.span>

            {/* Label */}
            <span className="stat-label">{label}</span>

            {/* Divider */}
            <div className="stat-divider" />

            {/* Sub-label */}
            <span className="stat-sublabel">{sublabel}</span>
        </motion.div>
    );
};

const Stats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="stats" ref={ref} className="stats-section">
            <div className="stats-top-glow" />

            <div className="container">
                <motion.div
                    className="stats-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="stats-heading">The Numbers Speak</h3>
                    <p className="stats-subheading">A decade of passion, rhythm, and celebration</p>
                </motion.div>

                <div className="stats-grid">
                    {statsData.map((stat, i) => (
                        <StatCard key={stat.label} {...stat} index={i} isVisible={isInView} />
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .stats-section {
                    position: relative;
                    padding: 90px 0 100px;
                    background: var(--color-bg-alt);
                    overflow: hidden;
                }

                .stats-top-glow {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60%;
                    height: 2px;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        var(--color-gold) 50%,
                        transparent 100%
                    );
                    box-shadow: 0 0 20px rgba(201, 152, 46, 0.3);
                }

                .stats-header {
                    text-align: center;
                    margin-bottom: 56px;
                }

                .stats-heading {
                    font-family: var(--font-serif);
                    font-size: clamp(24px, 4vw, 36px);
                    font-weight: 500;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: var(--color-gold-dark);
                    margin-bottom: 10px;
                }

                .stats-subheading {
                    font-family: var(--font-sans);
                    font-size: 15px;
                    color: var(--color-text-muted);
                    letter-spacing: 0.5px;
                    font-weight: 300;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                }

                /* ---- Card ---- */
                .stat-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 36px 24px 28px;
                    border-radius: 16px;
                    background: var(--color-bg-card);
                    border: 1px solid rgba(212, 175, 55, 0.18);
                    box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.12);
                    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                                box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                                border-color 0.35s ease;
                    overflow: hidden;
                }

                .stat-card:hover {
                    transform: translateY(-6px);
                    border-color: rgba(212, 175, 55, 0.5);
                    box-shadow: 0 20px 48px -12px rgba(201, 152, 46, 0.22);
                }

                /* Gold top accent bar */
                .stat-card-accent {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
                    opacity: 0.7;
                }

                /* Icon */
                .stat-icon-wrap {
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04));
                    border: 1px solid rgba(212, 175, 55, 0.3);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-gold-dark);
                    margin-bottom: 20px;
                }

                /* Number */
                .stat-number {
                    
                    font-size: clamp(38px, 5vw, 56px);
                    font-weight: 700;
                    line-height: 1;
                    letter-spacing: -1px;
                    background: linear-gradient(135deg, var(--color-gold-dark), var(--color-gold));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    margin-bottom: 10px;
                }

                /* Label */
                .stat-label {
                    font-family: var(--font-serif);
                    font-size: 15px;
                    font-weight: 500;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    color: var(--color-text);
                    margin-bottom: 14px;
                }

                /* Divider */
                .stat-divider {
                    width: 36px;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
                    border-radius: 2px;
                    margin-bottom: 12px;
                    opacity: 0.6;
                }

                /* Sub-label */
                .stat-sublabel {
                    font-family: var(--font-sans);
                    font-size: 12px;
                    letter-spacing: 0.5px;
                    color: var(--color-text-muted);
                    font-weight: 300;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 16px;
                    }
                }

                @media (max-width: 480px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 14px;
                    }
                    .stats-section {
                        padding: 64px 0 72px;
                    }
                    .stat-card {
                        padding: 28px 16px 22px;
                    }
                    .stat-number {
                        font-size: 36px;
                    }
                    .stat-label {
                        font-size: 13px;
                        letter-spacing: 1.5px;
                    }
                }
            ` }} />
        </section>
    );
};

export default Stats;
