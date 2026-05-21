import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
    return (
        <section id="features" style={{ padding: '80px 0', background: 'var(--color-bg-main)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Elements */}
            <div style={{ position: 'absolute', top: '0', right: '0', width: '40%', height: '100%', background: 'radial-gradient(circle at 100% 0%, rgba(201, 152, 46, 0.05) 0%, transparent 60%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '40%', height: '100%', background: 'radial-gradient(circle at 0% 100%, rgba(201, 152, 46, 0.04) 0%, transparent 60%)', zIndex: 0 }} />

            <motion.div
                className="features-video-container"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                <div className="features-video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/5UO3jF272qk?rel=0&autoplay=1&mute=1&loop=1&playlist=5UO3jF272qk&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1"
                        title="India World Dance Congress"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="features-video-iframe"
                    />
                </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .features-video-container {
                    width: 100%;
                    padding: 0 24px;
                    box-sizing: border-box;
                }

                .features-video-wrapper {
                    position: relative;
                    width: 100%;
                    padding-bottom: 56.25%; /* 16:9 aspect ratio */
                    border-radius: 24px;
                    overflow: hidden;
                    background: #000;
                    box-shadow:
                        0 20px 60px rgba(0, 0, 0, 0.12),
                        0 0 0 1px rgba(201, 152, 46, 0.15);
                }

                .features-video-iframe {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 120%;
                    height: 120%;
                    transform: translate(-50%, -50%);
                    border: none;
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .features-video-container {
                        padding: 0 16px;
                    }
                    .features-video-wrapper {
                        border-radius: 16px;
                    }
                }

                @media (max-width: 480px) {
                    .features-video-container {
                        padding: 0 12px;
                    }
                    .features-video-wrapper {
                        border-radius: 12px;
                    }
                }
            ` }} />
        </section>
    );
};

export default Features;
