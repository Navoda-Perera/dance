// Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#hero', labelEn: 'Home', labelSi: 'මුල් පිටුව' },
  { href: '#competition', labelEn: 'Competition', labelSi: 'තරඟය' },
  { href: '#contact', labelEn: 'Contact', labelSi: 'සම්බන්ධ' },
];

const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdBcvOJ3stP0GIW2lAjBXdDrkQSHqXJChC8SPUDTWthotvXJw/viewform?usp=header';

export default function Navbar({ lang, onLangChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#hero');
  const isSi = lang === 'si';

  /* Scroll → glass effect + active section tracking */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = NAV_LINKS.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`} role="banner">
      <div className="navbar-inner">

        {/* Logo */}
        <a href="#hero" className="navbar-logo" onClick={() => handleNavClick('#hero')} aria-label="HETHEN LIVE Home">
          <img src="/hethen-logo.png" alt="HETHEN LIVE Logo" style={{ borderRadius: '50%' }} />
          <span className="navbar-logo-text">HETHEN LIVE</span>
        </a>

        {/* Desktop nav links */}
        <nav className="navbar-links" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar-link${active === link.href ? ' navbar-link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              aria-current={active === link.href ? 'page' : undefined}
            >
              {isSi ? link.labelSi : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="navbar-controls">
          {/* Language toggle */}
          <div className="navbar-lang" role="group" aria-label="Language selector">
            <button
              id="nav-lang-en"
              className={`navbar-lang-btn${lang === 'en' ? ' active' : ''}`}
              onClick={() => onLangChange('en')}
              aria-pressed={lang === 'en'}
            >EN</button>
            <span className="navbar-lang-sep" aria-hidden="true">|</span>
            <button
              id="nav-lang-si"
              className={`navbar-lang-btn${lang === 'si' ? ' active' : ''}`}
              onClick={() => onLangChange('si')}
              aria-pressed={lang === 'si'}
            >සිං</button>
          </div>

          {/* Register CTA */}
          <a
            id="nav-register-btn"
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
            aria-label="Register for Dance Verz 2026"
          >
            {isSi ? 'ලියාපදිංචි' : 'Join Now'}
          </a>

          {/* Hamburger */}
          <button
            id="nav-hamburger"
            className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`navbar-mobile${menuOpen ? ' navbar-mobile--open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={`navbar-mobile-link${active === link.href ? ' active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {isSi ? link.labelSi : link.labelEn}
          </a>
        ))}
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          {isSi ? 'දැන් ලියාපදිංචි වන්න →' : 'Register Now →'}
        </a>
      </div>
    </header>
  );
}
