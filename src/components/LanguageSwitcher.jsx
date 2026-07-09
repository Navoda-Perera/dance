// LanguageSwitcher.jsx
import './LanguageSwitcher.css';

export default function LanguageSwitcher({ currentLang, onLangChange, labels }) {
  const langs = [
    { code: 'en', label: 'English' },
    { code: 'si', label: 'සිංහල' },
    // Tamil page placeholder — disabled for now
    // { code: 'ta', label: 'தமிழ்' },
  ];

  return (
    <nav className="lang-switcher" role="navigation" aria-label="Language selector">
      <div className="lang-switcher-logo">
        <img src="/logo.png" alt="Dance Verz Logo" />
      </div>
      <div className="lang-buttons">
        {langs.map((l) => (
          <button
            key={l.code}
            id={`lang-btn-${l.code}`}
            className={`lang-btn${currentLang === l.code ? ' active' : ''}`}
            onClick={() => onLangChange(l.code)}
            aria-label={`Switch to ${l.label}`}
            aria-pressed={currentLang === l.code}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
