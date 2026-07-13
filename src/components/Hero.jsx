// Hero.jsx
import './Hero.css';

const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdBcvOJ3stP0GIW2lAjBXdDrkQSHqXJChC8SPUDTWthotvXJw/viewform?usp=header';

const CAT_ICONS = ['💃', '👯', '🔥'];

export default function Hero({ c, lang }) {
  const h = c.hero;
  const help = c.helpBanner;
  const isSi = lang === 'si';

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero" aria-label="Hero section">
        {/* Background: replace src with your own video/image path */}
        <div className="hero-bg">
          {/* BACKGROUND IMAGE SLOT — replace /hero-bg.jpg with your image */}
          {/*  <img
            className="hero-bg-image"
            src="/hero-bg.jpg"
            alt=""
            aria-hidden="true"
            onError={(e) => { e.target.style.display = 'none'; }}
          /> */}
          {/* BACKGROUND VIDEO SLOT — uncomment and replace src */}
          {
            <video className="hero-bg-video" autoPlay muted loop playsInline webkit-playsinline="true">
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
          }
        </div>
        <div className="hero-overlay" aria-hidden="true" />

        <div className={`hero-content${isSi ? ' lang-si' : ''}`}>
          {/* Logo */}
          <div className="hero-logo" aria-label="Dance Verz Logo">
            <img src="/logo.png" alt="Dance Verz Competition 2026 Logo" />
          </div>

          {/* Title */}
          <h1 className="hero-title">Dance Verz Competition 2026</h1>

          <div className="hero-divider" aria-hidden="true" />

          {/* Tagline */}
          <p className="hero-tagline">{h.tagline}</p>
          <p className="hero-description">{h.description}</p>

          {/* Prize badges */}
          <div className="hero-prizes" role="list" aria-label="Prizes">
            <div className="prize-badge gold" role="listitem">🏆 {h.prize}</div>
            <div className="prize-badge cyan" role="listitem">🌍 {h.reach}</div>
          </div>

          {/* Competition card */}
          <div className="hero-competition-card glass-card">
            <h2 className="hero-competition-title gradient-text-gold">{h.competition}</h2>
            <p className="hero-competition-sub">{h.competitionSub}</p>
            <div className="hero-categories">
              {h.categories.map((cat, i) => (
                <div key={i} className="hero-category-item">
                  <span className="cat-icon" aria-hidden="true">{CAT_ICONS[i]}</span>
                  <span>{cat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hero-cta">
            <a
              id="register-btn-hero"
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-register"
              aria-label="Register for Dance Verz Competition 2026"
            >
              {h.cta}
            </a>
            <p className="hero-deadline">
              <span>{h.deadline}</span>
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator" aria-hidden="true">
            <div className="scroll-indicator-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ===== HELP BANNER ===== */}
      <div className={`help-banner${isSi ? ' lang-si' : ''}`} id="help-banner">
        <div className="help-banner-inner">
          <span className="help-banner-label">📱 {help.label} WhatsApp:</span>
          <div className="help-banner-numbers">
            {help.numbers.map((num, i) => (
              <a
                key={i}
                id={`whatsapp-banner-${i}`}
                href={`https://wa.me/${num.replace(/\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="help-banner-number"
                aria-label={`WhatsApp ${num}`}
              >
                💬 {num}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
