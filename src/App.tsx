import { useEffect, useState } from 'react';

type Repo = {
  name: string;
  owner?: { login?: string };
  description?: string | null;
  language?: string | null;
  fork?: boolean;
  archived?: boolean;
};

const USERNAME = 'aryanguptajsm';

function validRepository(repo: Repo) {
  return (
    repo &&
    typeof repo.name === 'string' &&
    /^[A-Za-z0-9_.-]+$/.test(repo.name) &&
    typeof repo.owner?.login === 'string' &&
    repo.owner.login.toLowerCase() === USERNAME.toLowerCase()
  );
}

function getInitials(name: string) {
  return (
    name
      .split(/[-_.\s]+/)
      .filter(Boolean)
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || '</>'
  );
}

function App() {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [status, setStatus] = useState('Loading public projects from GitHub…');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      reveals.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const loadProjects = async () => {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 10000);

      try {
        const response = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&direction=desc&per_page=100&type=owner`,
          {
            signal: controller.signal,
            headers: { Accept: 'application/vnd.github+json' },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub request failed: ${response.status}`);
        }

        const repositories = (await response.json()) as Repo[];
        if (!Array.isArray(repositories)) {
          throw new Error('Unexpected repository data.');
        }

        const selected = repositories
          .filter(validRepository)
          .filter((repo) => !repo.fork && !repo.archived)
          .slice(0, 6);

        if (!selected.length) {
          setStatus('No recent non-fork, non-archived projects to display. Browse GitHub for more.');
          return;
        }

        setProjects(selected);
        setStatus(
          `Showing ${selected.length} recently updated public repositories · Forks and archived projects excluded.`
        );
      } catch {
        setProjects([
          {
            name: 'GrowFit',
            description: 'Explore this project and its source code on GitHub.',
            language: 'Repository',
            owner: { login: USERNAME },
          },
        ]);
        setStatus('Live projects are temporarily unavailable. Browse all repositories on GitHub.');
      } finally {
        window.clearTimeout(timeout);
      }
    };

    loadProjects();
  }, []);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header>
        <nav className="container nav" aria-label="Main navigation">
          <a href="#home" className="logo" aria-label="Aryan home">
            aryan<span>.</span>
          </a>

          <button
            type="button"
            className="menu"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>

          <div id="nav-links" className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              Work
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="https://github.com/aryanguptajsm" target="_blank" rel="noreferrer noopener">
              GitHub ↗
            </a>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Let's connect ↗
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="container hero" id="home" aria-labelledby="hero-title">
          <div>
            <div className="intro">
              <span className="dot" aria-hidden="true" /> A little code. A lot of curiosity.
            </div>
            <h1 id="hero-title">
              Hey, I'm Aryan.
              <br />
              Ideas into
              <br />
              <em>interfaces.</em>
            </h1>
            <p className="hero-copy">
              Welcome to my corner of the internet. A space for the things I build, the ideas I
              explore, and the code behind them.
            </p>
            <div className="actions">
              <a href="#work" className="button primary">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/aryanguptajsm" className="button" target="_blank" rel="noreferrer noopener">
                My GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-foot">Keep scrolling. There's more below.</div>
          </div>

          <div className="visual" aria-hidden="true">
            <div className="orbit" />
            <div className="orbit two" />
            <div className="asterisk">✳</div>
            <div className="code-card">
              <div className="window-bar">
                <i />
                <i />
                <i />
                <span>currently.txt</span>
              </div>
              <pre aria-label="A code-styled note about Aryan's work">
                <span className="comment">// a work in progress. always.</span>

<span className="keyword">ideas</span> into <span className="string">interfaces</span>

<span className="comment">explore. create. improve.</span>

<span className="string">Made with curiosity</span>
              </pre>
            </div>
            <div className="floating-label">Made of ideas &amp; a little caffeine ↗</div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="container ticker-inner">
            <span>Ideas into code</span>
            <b>✳</b>
            <span>Details matter</span>
            <b>✳</b>
            <span>Always exploring</span>
            <b>✳</b>
            <span>Build. Learn. Repeat.</span>
          </div>
        </div>

        <section className="container section" id="work" aria-labelledby="work-title">
          <div className="section-top reveal">
            <div>
              <p className="eyebrow">01 / The project shelf</p>
              <h2 id="work-title">
                Code in the wild<span style={{ color: 'var(--purple)' }}>.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/aryanguptajsm?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
            >
              All repositories ↗
            </a>
          </div>

          <div className="projects" id="projects">
            {projects.map((repo, index) => (
              <article className="project" key={repo.name}>
                <div className="project-art" aria-hidden="true">
                  <span className="project-number">PROJECT / {String(index + 1).padStart(2, '0')}</span>
                  <strong>{getInitials(repo.name)}</strong>
                </div>
                <div className="project-body">
                  <h3>{repo.name}</h3>
                  <p>
                    {repo.description || 'Explore this project and its source code on GitHub.'}
                  </p>
                  <div className="project-meta">
                    <span className="tag">{repo.language || 'Repository'}</span>
                    <a
                      href={`https://github.com/${USERNAME}/${encodeURIComponent(repo.name)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`View ${repo.name} source code`}
                    >
                      View code ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="project-status" id="project-status" role="status" aria-live="polite">
            {status}
          </p>
        </section>

        <section className="container about" id="about" aria-labelledby="about-title">
          <div className="reveal">
            <p className="eyebrow">02 / Behind the screen</p>
            <h2 id="about-title">
              A name.
              <br />
              A GitHub.
              <br />
              Plenty of ideas.
            </h2>
          </div>
          <div className="reveal">
            <p className="about-copy">
              I'm <strong>Aryan</strong>. This portfolio is a home for my projects and a window into
              what I'm exploring.
            </p>
            <p className="about-copy">
              For a closer look, jump into my GitHub. That's where you'll find the repositories and
              the details behind the work.
            </p>
            <a className="profile-link" href="https://github.com/aryanguptajsm" target="_blank" rel="noreferrer noopener">
              <span className="avatar" aria-hidden="true">
                A
              </span>
              <span>
                <strong>@aryanguptajsm</strong>
                <small>Find my work on GitHub</small>
              </span>
              <span className="arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </section>

        <section className="container contact reveal" id="contact" aria-labelledby="contact-title">
          <span className="contact-star" aria-hidden="true">
            ✳
          </span>
          <span className="eyebrow">03 / Keep the conversation going</span>
          <h2 id="contact-title">
            Great things start
            <br />
            with a little curiosity.
          </h2>
          <p>
            Interested in the work? Explore my projects, follow along, or find the contact details I
            share on GitHub.
          </p>
          <a className="button" href="https://github.com/aryanguptajsm" target="_blank" rel="noreferrer noopener">
            Find me on GitHub <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="container">
        <span>
          © <span id="year">{new Date().getFullYear()}</span> Aryan. Crafted with curiosity.
        </span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
