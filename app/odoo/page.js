import styles from './odoo.module.css';
import ScrollAnimation from '@/components/ScrollAnimation';

const tasks = [
    "Managing Sales, Invoices, and Quotations",
    "Handling Customers and Vendors (CRM)",
    "Creating and updating Products and Price Lists",
    "Monitoring Inventory and Stock Movements",
    "Generating Financial and Operational Reports",
    "Supporting basic Odoo system customization",
    "Data entry and system organization"
];

export default function Odoo() {
    return (
        <div className={`container ${styles.container}`}>
            <ScrollAnimation>
                <h1 className={styles.title}>Odoo ERP Experience</h1>
                <p className={styles.subtitle}>Specialized expertise in managing business operations with Odoo.</p>

                <div className={styles.highlightSection}>
                    <div className={styles.introContent}>
                        <h2>Why I Work with Odoo</h2>
                        <p>
                            As an Odoo specialist, I bridge the gap between technical system capabilities and practical business needs.
                            My experience ensures accurate records, efficient workflows, and data-driven decision making for businesses.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>

            <ScrollAnimation className={styles.tasksContainer} delay={0.2}>
                <h2>Key Responsibilities</h2>
                <ul className={styles.taskList}>
                    {tasks.map((task, index) => (
                        <li key={index} className={styles.taskItem}>
                            <span className={styles.icon}>⚙️</span>
                            {task}
                        </li>
                    ))}
                </ul>
            </ScrollAnimation>
        </div>
    );
}
