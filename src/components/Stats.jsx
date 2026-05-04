import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Star, BookOpen, Music } from 'lucide-react';

const statsData = [
    { value: 1111, suffix: '+', label: 'Social Dancers', Icon: Users },
    { value: 100, suffix: '+', label: 'Artists', Icon: Star },
    { value: 120, suffix: '', label: 'Workshops', Icon: BookOpen },
    { value: 50, suffix: '', label: 'Shows', Icon: Music },
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

const StatCard = ({ value, suffix, label, Icon, index, isVisible }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const count = useCounter(value, isVisible);

    // Auto-reveal sequence on first sight
    useEffect(() => {
        if (!isVisible) return;
        const revealTimeout = setTimeout(() => setIsFlipped(true), 1200 + index * 400);
        const hideTimeout = setTimeout(() => setIsFlipped(false), 6000 + index * 400);
        return () => {
            clearTimeout(revealTimeout);
            clearTimeout(hideTimeout);
        };
    }, [isVisible, index]);

    return (
        <motion.div
            className="stat-card-container"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="stat-card-inner"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* Front Side */}
                <div className="stat-card-front">
                    <div className="stat-icon-wrapper">
                        <div className="stat-icon-inner">
                            <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <div className="stat-icon-ring" />
                    </div>
                    <span className="stat-label">{label}</span>
                    <div className="stat-card-hint">Hover to reveal</div>
                </div>

                {/* Back Side */}
                <div className="stat-card-back">
                    <motion.span
                        className="stat-number"
                        animate={isFlipped ? { scale: [0.9, 1.05, 1] } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {count.toLocaleString()}{suffix}
                    </motion.span>
                    <span className="stat-label-back">{label}</span>
                    <div className="stat-underline" />
                </div>
            </motion.div>
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

            <style dangerouslySetInnerHTML={{ __html: `
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

                .stat-card-container {
                    perspective: 1000px;
                    height: 220px;
                    width: 100%;
                }

                .stat-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }

                .stat-card-front, .stat-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    display: flex;
                    flex-direction: column;
                    alignItems: center;
                    justifyContent: center;
                    gap: 16px;
                    padding: 30px 20px;
                    border-radius: 24px;
                    background: var(--color-bg-card);
                    border: 1.5px solid rgba(212, 175, 55, 0.2);
                    box-shadow: 0 10px 30px -10px rgba(201, 152, 46, 0.1);
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .stat-card-front {
                    background: linear-gradient(145deg, #ffffff, #faf8f5);
                }

                .stat-card-back {
                    background: linear-gradient(145deg, #fdfcfb, #f5f2e8);
                    transform: rotateY(180deg);
                    border-color: var(--color-gold-light);
                    box-shadow: 0 15px 45px -12px rgba(201, 152, 46, 0.2);
                }

                .stat-card-container:hover .stat-card-front,
                .stat-card-container:hover .stat-card-back {
                    border-color: var(--color-gold);
                    box-shadow: 0 20px 60px -15px rgba(201, 152, 46, 0.4);
                    transform: translateY(-5px);
                }

                .stat-card-hint {
                    position: absolute;
                    bottom: 15px;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--color-gold-dark);
                    opacity: 0.6;
                }

                .stat-icon-wrapper {
                    position: relative;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justifyContent: center;
                }

                .stat-icon-inner {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: linear-gradient(135deg, white 0%, var(--color-gold-subtle) 100%);
                    color: var(--color-gold-dark);
                    border: 1px solid var(--color-border-gold);
                    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.15);
                    z-index: 2;
                }

                .stat-icon-ring {
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    border: 2px dashed var(--color-gold-light);
                    opacity: 0.3;
                    animation: rotate 10s linear infinite;
                    z-index: 1;
                }

                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .stat-number {
                    font-family: var(--font-serif);
                    font-size: clamp(36px, 5vw, 56px);
                    font-weight: 800;
                    letter-spacing: -1px;
                    background: linear-gradient(135deg, var(--color-gold-dark), var(--color-gold));
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                    line-height: 1.1;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.05);
                }

                .stat-label {
                    font-family: var(--font-serif);
                    font-size: 16px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-text);
                    font-weight: 500;
                }

                .stat-label-back {
                    font-family: var(--font-sans);
                    font-size: 12px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: var(--color-text-muted);
                }

                .stat-underline {
                    width: 50px;
                    height: 3px;
                    background: var(--color-gold);
                    border-radius: 3px;
                    margin-top: 8px;
                    box-shadow: 0 2px 4px rgba(201, 152, 46, 0.3);
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
            ` }} />
        </section>
    );
};

export default Stats;
