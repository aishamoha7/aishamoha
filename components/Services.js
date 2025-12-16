import styles from './Services.module.css';
import { GraphicDesignIcon, WebDevIcon, OdooIcon, ContentIcon } from './ServiceIcons';

const SERVICES_DATA = [
    {
        title: "Graphic Design",
        desc: "Creative visual solutions including posters, flyers, and marketing materials with clear messaging and strong visual appeal.",
        icon: <GraphicDesignIcon />
    },
    {
        title: "Web Design & Development",
        desc: "Custom, responsive websites built with Next.js or React. Focus on speed, SEO, and visual impact.",
        icon: <WebDevIcon />
    },
    {
        title: "Odoo Solutions",
        desc: "ERP implementation, customization, and training to streamline your business operations.",
        icon: <OdooIcon />
    },
    {
        title: "Content Creation",
        desc: "Engaging social media graphics, copywriting, and video editing to tell your story.",
        icon: <ContentIcon />
    }
];

export default function Services() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>What I Do</span>
                    <h2 className={styles.heading}>Services</h2>
                </div>

                <div className={styles.grid}>
                    {SERVICES_DATA.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
