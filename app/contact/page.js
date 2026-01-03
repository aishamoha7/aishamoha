"use client";
import { useState } from 'react';
import styles from './contact.module.css';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Contact() {
    const [status, setStatus] = useState({ loading: false, success: false, error: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ loading: false, success: true, error: '' });
                e.target.reset();
            } else {
                setStatus({ loading: false, success: false, error: data.error || 'Failed to send message.' });
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'An error occurred. Please try again.' });
        }
    };

    return (
        <div className={`container ${styles.container}`}>
            <ScrollAnimation className={styles.header}>
                <h1 className={`${styles.title} animate-fade-in`}>Let's Create Together</h1>
                <p className={`${styles.subtitle} animate-fade-in delay-100`}>
                    Have a project in mind? Reach out and let's start the conversation.
                </p>
            </ScrollAnimation>

            <ScrollAnimation className={`${styles.contentWrapper} animate-fade-in delay-200`} delay={0.2}>
                <div className={styles.contactInfo}>
                    <div className={styles.infoBlock}>
                        <h3>Email Me</h3>
                        <a href="mailto:caishamohamed252@gmail.com" className={styles.link}>caishamohamed252@gmail.com</a>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>Call Me</h3>
                        <a href="tel:+252770790727" className={styles.link}>+252 770 790 727</a>
                    </div>

                    <div className={styles.infoBlock}>
                        <h3>Based In</h3>
                        <p>Mogadishu, Somalia</p>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://github.com/aishamoha7" className={styles.socialLink}>Github</a>
                        <a href="https://www.instagram.com/caaisha_sheikh_mohamed?igsh=bmJ2YmhzbXJvb2Nr" className={styles.socialLink}>Instagram</a>
                        <a href="https://wa.me/252770790727" className={styles.socialLink}>WhatsApp</a>
                    </div>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <input type="text" id="name" name="name" required placeholder=" " disabled={status.loading} />
                        <label htmlFor="name">Your Name</label>
                    </div>
                    <div className={styles.formGroup}>
                        <input type="email" id="email" name="email" required placeholder=" " disabled={status.loading} />
                        <label htmlFor="email">Your Email</label>
                    </div>
                    <div className={styles.formGroup}>
                        <textarea id="message" name="message" rows="5" required placeholder=" " disabled={status.loading}></textarea>
                        <label htmlFor="message">your Message</label>
                    </div>

                    {status.error && <p style={{ color: 'red', marginBottom: '1rem' }}>{status.error}</p>}
                    {status.success && <p style={{ color: 'green', marginBottom: '1rem' }}>Message sent successfully!</p>}

                    <button type="submit" className="btn btn-primary" disabled={status.loading}>
                        {status.loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </ScrollAnimation>
        </div>
    );
}
