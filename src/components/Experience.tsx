import { motion } from 'motion/react';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience">
      <div className="section-header reveal">
        <div className="section-label">Journey</div>
        <div className="section-title">Experience & learning</div>
        <p className="section-sub">The path that shaped me as a developer.</p>
      </div>
      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="tl-item">
          <div className="tl-dot active">🚀</div>
          <div className="tl-content">
            <div className="tl-role">Full Stack Developer (Freelance)</div>
            <div className="tl-company">Self-employed</div>
            <div className="tl-period">2023 — Present</div>
            <div className="tl-desc">Building custom web applications for clients — from MVPs to full production systems. Delivered 10+ projects across e-commerce, SaaS, and dashboards.</div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="tl-item">
          <div className="tl-dot">💻</div>
          <div className="tl-content">
            <div className="tl-role">Open Source Contributor</div>
            <div className="tl-company">GitHub Community</div>
            <div className="tl-period">2022 — Present</div>
            <div className="tl-desc">Actively contributing to JavaScript and React open-source projects. PRs merged across 5+ repositories with focus on performance improvements and documentation.</div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="tl-item">
          <div className="tl-dot">🎓</div>
          <div className="tl-content">
            <div className="tl-role">Web Development — Self-taught Journey</div>
            <div className="tl-company">Continuous learning</div>
            <div className="tl-period">2021 — 2022</div>
            <div className="tl-desc">Deep-dived into the full web stack — HTML/CSS to React, then Node.js and databases. Built 20+ practice projects to solidify every concept before moving on.</div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Experience;
