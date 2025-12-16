'use client';
import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CEO, EcoBrand",
        text: "Aisha transformed our brand identity completely. Her eye for modern design and detail is unmatched. Highly recommended!"
    },
    {
        id: 2,
        name: "Mohamed Ali",
        role: "Director, TechFlow",
        text: "The Odoo ERP implementation was seamless. Aisha not only understood the technical side but also our business processes."
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Fashion Blogger",
        text: "Her video editing skills brought my content to life. Engagement on my channel has doubled since we started working together."
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === TESTIMONIALS.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? TESTIMONIALS.length - 1 : current - 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Client Love</h2>

                <div className={styles.slider}>
                    <button onClick={prevSlide} className={styles.navBtn}>←</button>

                    <div className={styles.track}>
                        <div className={styles.slide}>
                            <p className={styles.quote}>"{TESTIMONIALS[current].text}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{TESTIMONIALS[current].name.charAt(0)}</div>
                                <div>
                                    <h4 className={styles.name}>{TESTIMONIALS[current].name}</h4>
                                    <span className={styles.role}>{TESTIMONIALS[current].role}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button onClick={nextSlide} className={styles.navBtn}>→</button>
                </div>

                <div className={styles.dots}>
                    {TESTIMONIALS.map((_, idx) => (
                        <span
                            key={idx}
                            className={`${styles.dot} ${idx === current ? styles.activeDot : ''}`}
                            onClick={() => setCurrent(idx)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}
