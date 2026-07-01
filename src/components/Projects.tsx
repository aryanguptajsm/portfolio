import AnimatedList from './animated-list';

interface Project {
  id: string;
  name: string;
  desc: string;
  icon: string;
  iconBg: string;
  tags: string[];
  href: string;
  stars?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "argus",
    name: "Argus",
    desc: "A real-time flight surveillance dashboard with a cyberpunk-inspired HUD interface. Tracks thousands of aircraft worldwide using the OpenSky Network API.",
    icon: "✈️",
    iconBg: "rgba(124,90,243,0.15)",
    tags: ["JavaScript", "Vite", "Tailwind CSS", "OpenSky Network"],
    href: "https://github.com/aryanguptajsm/Argus",
    stars: "⭐ 1",
    featured: true
  },
  {
    id: "storix",
    name: "Storix",
    desc: "Storix is an ultra-fast, headless-ready platform built to empower creators and individuals in launching their own high-converting affiliate stores in under 5 minutes.",
    icon: "🛒",
    iconBg: "rgba(45,212,191,0.15)",
    tags: ["TypeScript", "Next.js", "Tailwind", "Supabase"],
    href: "https://github.com/aryanguptajsm/storix",
    stars: "⭐ 0",
    featured: true
  },
  {
    id: "slingshot",
    name: "Slingshot",
    desc: "A fusion of classic arcade fun, real-time computer vision, and strategic AI. Play with your mouse or your bare hands.",
    icon: "🎯",
    iconBg: "rgba(251,191,36,0.15)",
    tags: ["TypeScript", "Vite", "React", "Tailwind"],
    href: "https://github.com/aryanguptajsm/slingshot",
    stars: "⭐ 1"
  },
  {
    id: "securegen",
    name: "Securegen",
    desc: "SecureGen is a lightweight and static password generator built for fast and secure password generation.",
    icon: "🔒",
    iconBg: "rgba(251,113,133,0.15)",
    tags: ["JavaScript", "CSS", "HTML"],
    href: "https://github.com/aryanguptajsm/securegen",
    stars: "⭐ 1"
  },
  {
    id: "weatherapp",
    name: "Weatherapp",
    desc: "A responsive and interactive weather application that provides real-time weather information using HTML, CSS, and JavaScript.",
    icon: "⛅",
    iconBg: "rgba(74,222,128,0.15)",
    tags: ["JavaScript", "CSS", "HTML"],
    href: "https://github.com/aryanguptajsm/weatherapp",
    stars: "⭐ 1"
  },
  {
    id: "promptiva",
    name: "Promptiva",
    desc: "An AI prompt generator web application made for generating high-quality AI outputs based on prompt engineering.",
    icon: "✨",
    iconBg: "rgba(124,90,243,0.15)",
    tags: ["JavaScript", "Next.js", "CSS", "Supabase SQL"],
    href: "https://github.com/aryanguptajsm/promptiva",
    stars: "⭐ 0"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <div className="section-label">My work</div>
        <div className="section-title">Featured projects</div>
        <p className="section-sub">A selection of things I've built — ranging from full-stack web apps to developer tools.</p>
      </div>
      
      <AnimatedList>
        {projects.map((project) => (
          <a
            key={project.id}
            className="project-card-row"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-card-left">
              <div 
                className="project-card-icon" 
                style={{ background: project.iconBg }}
              >
                {project.icon}
              </div>
              <div className="project-card-title-area">
                <span className="project-card-name">{project.name}</span>
                {project.featured && <span className="feat-badge">Featured</span>}
              </div>
            </div>
            
            <div className="project-card-desc">
              {project.desc}
            </div>
            
            <div className="project-card-right">
              <div className="project-card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-card-meta">
                {project.stars && <span>{project.stars}</span>}
                <span className="project-card-link">View GitHub →</span>
              </div>
            </div>
          </a>
        ))}
      </AnimatedList>
    </section>
  );
};

export default Projects;
