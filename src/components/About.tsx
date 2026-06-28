const About = () => {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-visual reveal">
          <div className="avatar-box"></div>
          <div className="avatar-badge">⚡ <span>Open to work</span></div>
          <div className="stats-row">
            <div className="stat"><div className="stat-num">15</div><div className="stat-lbl">Projects</div></div>
            <div className="stat"><div className="stat-num">3+</div><div className="stat-lbl">Years coding</div></div>
            <div className="stat"><div className="stat-num">∞</div><div className="stat-lbl">Curiosity</div></div>
          </div>
        </div>
        <div className="about-text reveal">
          <div className="section-label">About me</div>
          <div className="section-title">Crafting code with purpose</div>
          <p>I'm a developer passionate about building intuitive, high-performance web applications. I enjoy the entire spectrum — from architecting APIs to pixel-perfect UI.</p>
          <p>When I'm not coding, I'm exploring new frameworks, contributing to open source, or deep-diving into whatever tech rabbit hole grabbed my attention that week.</p>
          <div className="skills-grid">
            <span className="skill-chip">JavaScript</span>
            <span className="skill-chip">React</span>
            <span className="skill-chip">Node.js</span>
            <span className="skill-chip">Python</span>
            <span className="skill-chip">TypeScript</span>
            <span className="skill-chip">MongoDB</span>
            <span className="skill-chip">PostgreSQL</span>
            <span className="skill-chip">REST APIs</span>
            <span className="skill-chip">Git</span>
            <span className="skill-chip">Tailwind</span>
            <span className="skill-chip">Express.js</span>
            <span className="skill-chip">Next.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
