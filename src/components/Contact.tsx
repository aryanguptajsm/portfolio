import { motion } from 'motion/react';

const Contact = () => {
  return (
    <section id="contact">
      <motion.div 
        className="contact-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="section-label">Get in touch</motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="section-title">Let's build something</motion.div>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="section-sub">Have a project idea, want to collaborate, or just want to say hi? My inbox is always open.</motion.p>
        <div className="contact-cards">
          <motion.a variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="contact-card" href="mailto:aryanguptajsm@gmail.com">
            <div className="cc-icon">📬</div>
            <div className="cc-label">Email</div>
            <div className="cc-value">aryanguptajsm@gmail.com</div>
            <div className="cc-sub">I'll reply within 24 hours</div>
          </motion.a>
          <motion.a variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="contact-card" href="https://github.com/aryanguptajsm" target="_blank" rel="noreferrer">
            <div className="cc-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--acc3)"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </div>
            <div className="cc-label">GitHub</div>
            <div className="cc-value">@aryanguptajsm</div>
            <div className="cc-sub">Check out my code</div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
