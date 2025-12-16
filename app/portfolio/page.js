import styles from './portfolio.module.css';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: "EcoBrand Identity",
        category: "Branding",
        description: "Complete visual identity for a sustainable fashion brand.",
        image: "/portfolio/ecobrand.jpg",
        tools: ["Illustrator", "Photoshop", "Figma"]
    },
    {
        id: 2,
        title: "TechCorp Website",
        category: "Web Design",
        description: "Modern, responsive corporate website with Next.js.",
        image: "/portfolio/techcorp.jpg",
        tools: ["Next.js", "CSS Modules", "React"]
    },
    {
        id: 3,
        title: "Social Media Boost",
        category: "Content Creation",
        description: "Instagram campaign visuals that increased engagement by 40%.",
        image: "/portfolio/social-media.svg",
        tools: ["Photoshop", "Canva", "After Effects"]
    },
    {
        id: 4,
        title: "Product Launch Video",
        category: "Video Editing",
        description: "Cinematic teaser video for a new tech gadget.",
        image: "/portfolio/video-editing.svg",
        tools: ["After Effects", "Premiere Pro"]
    },
    {
        id: 5,
        title: "Odoo Dashboard UI",
        category: "UI Design",
        description: "Custom dashboard interface design for an ERP system.",
        image: "/portfolio/odoo.jpg",
        tools: ["Figma", "Odoo"]
    },
    {
        id: 6,
        title: "Coffee Shop Flyer",
        category: "Print Design",
        description: "Minimalist flyer design for a local cafe opening.",
        image: "/portfolio/coffee.jpg",
        tools: ["InDesign", "Illustrator"]
    }
];

export default function Portfolio() {
    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.title}>My Portfolio</h1>
            <p className={styles.subtitle}>A selection of my recent work in design and development.</p>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            {/* In a real app, use next/image. Using img for external placeholder simplicity without config */}
                            <img src={project.image} alt={project.title} className={styles.image} />
                            <div className={styles.overlay}>
                                <Link href={`#`} className={styles.overlayBtn}>View Project</Link>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <span className={styles.category}>{project.category}</span>
                            <h2 className={styles.projectTitle}>{project.title}</h2>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tools.map(tool => (
                                    <span key={tool} className={styles.tag}>{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
