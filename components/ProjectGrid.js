import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

const PROJECTS = [
    {
        id: 1,
        title: "Social Media Posters",
        category: "Branding",
        image: "/images/projects/ecobrand.png",
        size: "large",
        link: "/portfolio"
    },
    {
        id: 2,
        title: "Website Design",
        category: "UI/UX Design",
        image: "/images/projects/fintech.png",
        size: "wide",
        link: "/portfolio"
    },
    {
        id: 3,
        title: "Website Development",
        category: "Development",
        image: "/images/projects/odoo.png",
        size: "wide",
        link: "/portfolio"
    },
    {
        id: 4,
        title: "Digital Video Editing",
        category: "Video Editing",
        image: "/portfolio/video-editing-man.png",
        size: "wide",
        link: "/portfolio"
    },
    {
        id: 5,
        title: "Social Media Content",
        category: "Content Creation",
        image: "/images/projects/social.png",
        size: "wide",
        link: "/portfolio"
    }
];

export default function ProjectGrid() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Selected Works</h2>
                    <p className={styles.subtext}>A curation of my best digital products.</p>
                </div>
                <div className={styles.grid}>
                    {PROJECTS.map((proj) => (
                        <ProjectCard key={proj.id} project={proj} />
                    ))}
                </div>
            </div>
        </section>
    );
}
