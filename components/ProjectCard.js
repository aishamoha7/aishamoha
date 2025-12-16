import Link from 'next/link';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, className }) {
    // project prop struct: { title, category, image, link, size }
    return (
        <Link href={project.link || '#'} className={`${styles.card} ${className || ''}`} data-size={project.size}>
            <div className={styles.imageContainer}>
                {/* Ideally use Next.js Image, using div placeholder for now if no image provided */}
                <div className={styles.imagePlaceholder} style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className={styles.overlay}>
                    <span className={styles.viewBtn}>View Project</span>
                </div>
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
            </div>
        </Link>
    );
}
