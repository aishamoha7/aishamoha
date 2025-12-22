import styles from "./Footer.module.css";
import { Github, Instagram } from "lucide-react";

const FacebookIcon = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const WhatsAppIcon = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
);

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* Brand */}
                <div className={styles.brand}>
                    <h2>Aisha Mohamed</h2>
                    <p>
                        Multi-skilled Developer & Creative crafting modern web apps, smart Odoo solutions,
                        visually compelling graphic designs, and engaging video edits that bring ideas to life.
                    </p>
                </div>
                {/* Quick Links */}
                <div className={styles.quickLinks}>
                    <h3>Quick Links</h3>
                    <ul className={styles.links}>
                        <li><a href="about">About Me</a></li>
                        <li><a href="services">Services</a></li>
                        <li><a href="portfolio">Portfolio</a></li>
                        <li><a href="odoo">Odoo ERP</a></li>

                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h3 styles={{ fontSize: "1.1rem" }}>Connect</h3>
                    <div className={styles.socials}>
                        <a href="https://github.com/aishamoha7"><Github size={18} /></a>
                        <a href="https://www.instagram.com/caaisha_sheikh_mohamed?igsh=bmJ2YmhzbXJvb2Nr"><Instagram size={18} /></a>
                        <a href="https://www.facebook.com/aisha.sheikh.mohamed.434700"><FacebookIcon size={18} /></a>
                        <a href="https://wa.me/252770790727" target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={20} /></a>
                    </div>
                </div>

            </div>

            <div className={styles.bottom}>
                © {new Date().getFullYear()} All rights reserved. Developed by Aisha Mohamed
            </div>
        </footer>
    );
}
