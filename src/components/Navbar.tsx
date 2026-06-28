const Navbar = () => {
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
      <button className="nav-btn" onClick={scrollToContact}>Let's talk</button>
    </nav>
  );
};

export default Navbar;
