interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="nav-logo">aryan</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
          {isDark ? '☀️' : '🌙'}
        </button>
        <button className="nav-btn" onClick={scrollToContact}>Let's talk</button>
      </div>
    </nav>
  );
};

export default Navbar;
