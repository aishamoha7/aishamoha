import styles from './services.module.css';
import ScrollAnimation from '@/components/ScrollAnimation';

const services = [
    {
        title: "Graphic Design",
        description: "Creative visual solutions including posters, flyers, and marketing materials."
    },
    {
        title: "Branding & Logo Design",
        description: "Building strong, memorable brand identities with custom logos and style guides."
    },
    {
        title: "Website Design & Development",
        description: "Modern, responsive, and user-friendly websites built with the latest tech."
    },
    {
        title: "Social Media Content",
        description: "Engaging designs and content strategies to grow your online presence."
    },
    {
        title: "Video Editing",
        description: "Professional video editing for social media, ads, and storytelling."
    },
    {
        title: "Odoo ERP Solutions",
        description: "System management, reporting, and operational support using Odoo."
    }
];

export default function Services() {
    return (
        <div className={`container ${styles.container}`}>
            <ScrollAnimation>
                <h1 className={styles.title}>My Services</h1>
                <p className={styles.subtitle}>Professional digital solutions tailored to your needs.</p>
            </ScrollAnimation>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <ScrollAnimation key={index} className={styles.card} delay={index * 0.1}>
                        <h2 className={styles.cardTitle}>{service.title}</h2>
                        <p className={styles.cardDescription}>{service.description}</p>
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    );
}
