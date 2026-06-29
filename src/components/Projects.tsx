import AnimatedList from './animated-list';

const projects = [
  <a key="argus" className="project-card reveal" href="https://github.com/aryanguptajsm/Argus" target="_blank" rel="noreferrer">
    <div className="project-top">
      <div className="project-icon" style={{background: 'rgba(124,90,243,0.15)'}}>✈️</div>
      <span className="feat-badge">Featured</span>
    </div>
    <div className="project-name">Argus</div>
    <div className="project-desc"> A real-time flight surveillance dashboard with a cyberpunk-inspired HUD interface. Tracks thousands of aircraft worldwide using the OpenSky Network API.</div>
    <div className="project-tags">
      <span className="tag">javascript</span><span className="tag">vite</span><span className="tag">tailwind css</span><span className="tag">Opensky network</span>
    </div>
    <div className="project-footer">
      <div className="project-links">
        <span className="proj-link">⭐ 1</span>
      </div>
      <span className="proj-link">View on GitHub →</span>
    </div>
  </a>,
  <a key="storix" className="project-card reveal" href="https://github.com/aryanguptajsm/storix" target="_blank" rel="noreferrer">
    <div className="project-top">
      <div className="project-icon" style={{background: 'rgba(45,212,191,0.15)'}}>🛒</div>
      <span className="feat-badge">Featured</span>
    </div>
    <div className="project-name">Storix</div>
    <div className="project-desc">Storix is an ultra-fast, headless-ready platform built to empower creators and individuals in launching their own high-converting affiliate stores in under 5 minutes.</div>
    <div className="project-tags">
      <span className="tag">Typescript</span><span className="tag">Next.js</span><span className="tag">Tailwind</span><span className="tag">Supabase</span>
    </div>
    <div className="project-footer">
      <div className="project-links">
        <span className="proj-link">⭐ 0</span>
      </div>
      <span className="proj-link">View on GitHub →</span>
    </div>
  </a>,
  <a key="slingshot" className="project-card reveal" href="https://github.com/aryanguptajsm/slingshot" target="_blank" rel="noreferrer">
    <div className="project-top">
      <div className="project-icon" style={{background: 'rgba(251,191,36,0.15)'}}>🎯</div>
    </div>
    <div className="project-name">Slingshot</div>
    <div className="project-desc">A fusion of classic arcade fun, real-time computer vision, and strategic AI. Play with your mouse or your bare hands.</div>
    <div className="project-tags">
      <span className="tag">Typescript</span><span className="tag">vite</span><span className="tag">React</span><span className="tag">Tailwind</span>
    </div>
    <div className="project-footer">
      <div className="project-links">
        <span className="proj-link">⭐ 1 stars</span>
      </div>
      <span className="proj-link">View on GitHub →</span>
    </div>
  </a>,
  <a key="securegen" className="project-card reveal" href="https://github.com/aryanguptajsm/securegen" target="_blank" rel="noreferrer">
    <div className="project-top">
      <div className="project-icon" style={{background: 'rgba(251,113,133,0.15)'}}>🔒</div>
    </div>
    <div className="project-name">Securegen</div>
    <div className="project-desc">SecureGen is a lightweight and static built for fast and secure password generator.</div>
    <div className="project-tags">
      <span className="tag">javascript</span><span className="tag">css</span><span className="tag">Html</span>
    </div>
    <div className="project-footer">
      <div className="project-links">
        <span className="proj-link">⭐ 1</span>
      </div>
      <span className="proj-link">View on GitHub →</span>
    </div>
  </a>,
  <a key="weatherapp" className="project-card reveal" href="https://github.com/aryanguptajsm/weatherapp" target="_blank" rel="noreferrer">
    <div className="project-top">
      <div className="project-icon" style={{background: 'rgba(74,222,128,0.15)'}}>⛅</div>
    </div>
    <div className="project-name">Weatherapp</div>
    <div className="project-desc">A responsive and interactive weather application that provides real-time weather information using HTML, CSS, and JavaScript.</div>
    <div className="project-tags">
      <span className="tag">javascript</span><span className="tag">css</span><span className="tag">Html</span>
    </div>
    <div className="project-footer">
      <div className="project-links">
        <span className="proj-link">⭐ 1</span>
      </div>
      <span className="proj-link">View on GitHub →</span>
    </div>
  </a>,
  <a key="promptiva" className="project-card reveal" href="https://github.com/aryanguptajsm/promptiva" target="_blank" rel="noreferrer">
    <div className="project-top">
      <div className="project-icon" style={{background: 'rgba(124,90,243,0.15)'}}>✨</div>
    </div>
    <div className="project-name">Promptiva</div>
    <div className="project-desc">A ai prompt genrator web application made for good ai output based on prompt engineering.</div>
    <div className="project-tags">
      <span className="tag">javaScript</span><span className="tag">Next.js</span><span className="tag">css</span><span className="tag">supabase sQl</span>
    </div>
    <div className="project-footer">
      <div className="project-links">
        <span className="proj-link">⭐ 0</span>
      </div>
      <span className="proj-link">View on GitHub →</span>
    </div>
  </a>
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <div className="section-label">My work</div>
        <div className="section-title">Featured projects</div>
        <p className="section-sub">A selection of things I've built — ranging from full-stack web apps to developer tools.</p>
      </div>
      <AnimatedList items={projects} className="projects-animated-list" />
    </section>
  );
};

export default Projects;
