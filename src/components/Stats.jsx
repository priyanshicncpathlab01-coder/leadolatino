import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const statsData = [
    { value: 6000, suffix: '+', label: 'Social Dancers', icon: '💃' },
    { value: 600, suffix: '+', label: 'Artists', icon: '🎭' },
    { value: 250, suffix: '', label: 'Workshops', icon: '🎓' },
    { value: 150, suffix: '', label: 'Shows', icon: '🎪' },
];

// Animated counter hook
function useCounter(target, isVisible, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Ease-out cubic for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, target, duration]);

    return count;
}

const StatCard = ({ value, suffix, label, icon, index, isVisible }) => {
    const count = useCounter(value, isVisible, 2200);

    return (
        <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {/* Glow ring behind the icon */}
            <motion.div
                className="stat-icon-wrapper"
                animate={isVisible ? { rotate: [0, 5, -5, 0] } : {}}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, delay: index * 0.3 }}
            >
                <span className="stat-icon">{icon}</span>
            </motion.div>

            <motion.span
                className="stat-number"
                initial={{ scale: 0.5 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            >
                {count.toLocaleString()}{suffix}
            </motion.span>

            <span className="stat-label">{label}</span>

            {/* Decorative bottom line */}
            <motion.div
                className="stat-underline"
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
            />
        </motion.div>
    );
};

const Stats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="stats" ref={ref} className="stats-section">
            {/* Decorative top border */}
            <div className="stats-top-glow" />

            <div className="container">
                <motion.h3
                    className="stats-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    The Numbers Speak
                </motion.h3>

                <div className="stats-grid">
                    {statsData.map((stat, i) => (
                        <StatCard key={stat.label} {...stat} index={i} isVisible={isInView} />
                    ))}
                </div>
            </div>

            <style>{`
                .stats-section {
                    position: relative;
                    padding: 80px 0 90px;
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
                    box-shadow: 0 0 15px rgba(201, 152, 46, 0.25);
                }

                .stats-heading {
                    text-align: center;
                    font-family: var(--font-serif);
                    font-size: clamp(22px, 4vw, 32px);
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    color: var(--color-gold-dark);
                    margin-bottom: 50px;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                }

                .stat-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    padding: 36px 20px 28px;
                    border-radius: 16px;
                    background: var(--color-bg-card);
                    border: 1px solid var(--color-border);
                    box-shadow: var(--shadow-sm);
                    transition: all 0.4s ease;
                    position: relative;
                    overflow: hidden;
                }

                .stat-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(
                        circle at 50% 0%,
                        rgba(201, 152, 46, 0.06) 0%,
                        transparent 70%
                    );
                    pointer-events: none;
                }

                .stat-card:hover {
                    border-color: var(--color-border-gold);
                    transform: translateY(-6px);
                    box-shadow: var(--shadow-gold);
                }

                .stat-icon-wrapper {
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: var(--color-gold-subtle);
                    border: 1px solid var(--color-border-gold);
                }

                .stat-icon {
                    font-size: 32px;
                    filter: drop-shadow(0 0 6px rgba(201,152,46,0.3));
                }

                .stat-number {
                    font-family: var(--font-serif);
                    font-size: clamp(36px, 5vw, 52px);
                    font-weight: 600;
                    background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    line-height: 1;
                }

                .stat-label {
                    font-family: var(--font-sans);
                    font-size: 14px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-text-muted);
                }

                .stat-underline {
                    width: 40px;
                    height: 2px;
                    background: var(--color-gold);
                    transform-origin: center;
                    border-radius: 2px;
                    margin-top: 4px;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .stats-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }
                }

                @media (max-width: 480px) {
                    .stats-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    .stats-section {
                        padding: 60px 0 70px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Stats;
