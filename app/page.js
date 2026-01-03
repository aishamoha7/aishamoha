import Link from "next/link";
import styles from "./page.module.css";
import ProjectGrid from "@/components/ProjectGrid";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <ScrollAnimation className={styles.heroContent} variant="fadeUp">
          <span className={`${styles.label} animate-fade-in`}></span>
          <h1 className={`${styles.headline} animate-fade-in delay-100`}>
            Hi, I’m <br />
            <span className={styles.highlight}>Aisha Mohamed</span>
          </h1>
          <p className={`${styles.intro} animate-fade-in delay-200`}>
            I am <strong></strong> A multi-skilled creative professional specializing in graphic design,
            modern website development, content creation, Odoo development, and professional video editing.
          </p>
          <div className={`${styles.ctaGroup} animate-fade-in delay-300`}>
            <Link href="/portfolio" className="btn btn-primary">View Projects</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className={`${styles.heroVisual} animate-fade-in delay-200`} variant="fadeIn" delay={0.2}>
          <div className={styles.visualShape}></div>
        </ScrollAnimation>
      </section>

      {/* SECTIONS */}
      <ScrollAnimation>
        <ProjectGrid />
      </ScrollAnimation>

      <ScrollAnimation>
        <AboutSection />
      </ScrollAnimation>

      <ScrollAnimation>
        <Services />
      </ScrollAnimation>

      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>

      {/* CTA SECTION */}
      <ScrollAnimation className={styles.ctaSection} style={{ textAlign: 'center', padding: '6rem 0' }}>
        <h2 className={styles.headline} style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Start a Project?</h2>
        <p className={styles.intro} style={{ margin: '0 auto 2rem auto' }}>Let's collaborate to build something impactful for your brand.</p>
        <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
      </ScrollAnimation>
    </div>
  );
}
