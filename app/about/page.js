import styles from './about.module.css';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function About() {
    return (
        <div className={`container ${styles.container}`}>
            <ScrollAnimation>
                <h1 className={styles.title}>About Me</h1>

                <section className={styles.bioSection}>
                    <div className={styles.bioContent}>
                        <p>
                            I am Aisha Mohamed, a creative and detail-oriented digital professional. My journey began with a passion for visual storytelling, which evolved into a multifaceted career spanning graphic design, modern web development, and content creation.
                        </p>
                        <p>
                            I specialize in building clean, responsive websites and creating impactful visuals that help brands grow. Whether it's designing a logo, developing a web application, or editing a professional video, I combine creativity with strategy to deliver high-quality digital solutions.
                        </p>
                        <p>
                            In addition to my creative skills, I have hands-on experience with Odoo ERP systems, helping businesses manage their operations efficiently.
                        </p>
                    </div>
                </section>
            </ScrollAnimation>

            <ScrollAnimation className={styles.skillsSection} delay={0.2}>
                <h2>My Skills</h2>
                <div className={styles.skillGrid}>
                    <div className={styles.skillCategory}>
                        <h3>Design & Creative</h3>
                        <ul>
                            <li>Logo Design</li>
                            <li>Branding & Visual Identity</li>
                            <li>Social Media Designs</li>
                            <li>Poster & Flyer Design</li>
                            <li>UI Design</li>
                            <li>Typography & Color Theory</li>
                        </ul>
                    </div>
                    <div className={styles.skillCategory}>
                        <h3>Web & Media</h3>
                        <ul>
                            <li>Modern Website Design</li>
                            <li>Responsive Development</li>
                            <li>Content Creation</li>
                            <li>Video Editing</li>
                            <li>Visual Storytelling</li>
                        </ul>
                    </div>
                    <div className={styles.skillCategory}>
                        <h3>Tools & Tech</h3>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>After Effects</li>
                            <li>Odoo ERP Software</li>
                            <li>Next.js / React</li>
                        </ul>
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    );
}
