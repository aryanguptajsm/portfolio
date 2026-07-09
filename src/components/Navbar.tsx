import GooeyNav from './gooeynav';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="global-nav">
      <div className="nav-logo">Aryan</div>
      <div className="nav-links-container">
        <GooeyNav items={navItems} />
      </div>
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
