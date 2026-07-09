// Footer.jsx

import './Footer.css';

export default function Footer({ c, lang }) {
  const isSi = lang === 'si';
  return (
    <footer className={`footer${isSi ? ' lang-si' : ''}`} role="contentinfo">
      <div className="footer-logo">
        <img src="/logo.png" alt="Dance Verz Logo" />
      </div>
      <div className="footer-rainbow" aria-hidden="true" />
      <p className="footer-tagline">{c.footer.tagline}</p>
      <p className="footer-copy">{c.footer.copy}</p>
    </footer>
  );
}
