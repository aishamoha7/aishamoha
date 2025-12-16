import Link from 'next/link';
import styles from './AboutSection.module.css';

export default function AboutSection() {
    const skills = ["Graphic Design", "Web Development", "Video Editing", "Odoo ERP", "Content Strategy", "Motion Graphics"];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <span className={styles.label}>Who I Am</span>
                        <h2 className={styles.heading}>Designing With Purpose. <br />Building With Passion.</h2>
                        <p className={styles.bio}>
                            I’m a creative hybrid—bridging the gap between visual aesthetics and functional technology.
                            My journey started in graphic design but quickly evolved into a love for building digital products that live and breathe.
                            Whether it’s a high-converting website, a sleek brand identity, or a complex ERP system implementation,
                            I bring a detail-oriented, user-first approach to every project.
                        </p>

                        <div className={styles.skillsGrid}>
                            {skills.map(skill => (
                                <span key={skill} className={styles.skillTag}>{skill}</span>
                            ))}
                        </div>

                        <Link href="/about" className="btn btn-secondary" style={{ marginTop: '2rem' }}>
                            More About Me
                        </Link>
                    </div>

                    <div className={styles.visualContent}>
                        {/* Abstract visual representation instead of a plain photo */}
                        <div className={styles.statCard}>
                            <span className={styles.statNumber}>5+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={`${styles.statCard} ${styles.sc2}`}>
                            <span className={styles.statNumber}>100+</span>
                            <span className={styles.statLabel}>Projects Done</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
