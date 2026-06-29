import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about">
      <div className="about-grid">
        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="avatar-box"></div>
          <div className="avatar-badge">⚡ <span>Open to work</span></div>
          <div className="stats-row">
            <div className="stat"><div className="stat-num">15</div><div className="stat-lbl">Projects</div></div>
            <div className="stat"><div className="stat-num">3+</div><div className="stat-lbl">Years coding</div></div>
            <div className="stat"><div className="stat-num">∞</div><div className="stat-lbl">Curiosity</div></div>
          </div>
        </motion.div>
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-label">About me</div>
          <div className="section-title">Crafting code with purpose</div>
          <p>I'm a developer passionate about building intuitive, high-performance web applications. I enjoy the entire spectrum — from architecting APIs to pixel-perfect UI.</p>
          <p>When I'm not coding, I'm exploring new frameworks, contributing to open source, or deep-diving into whatever tech rabbit hole grabbed my attention that week.</p>
          <div className="skills-grid">
            {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Git', 'Tailwind', 'Express.js', 'Next.js'].map(skill => (
              <motion.span 
                key={skill} 
                className="skill-chip"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
