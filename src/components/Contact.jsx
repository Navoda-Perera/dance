// Contact.jsx

import './Contact.css';

const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdBcvOJ3stP0GIW2lAjBXdDrkQSHqXJChC8SPUDTWthotvXJw/viewform?usp=header';

const CARD_TYPES = ['phone', 'whatsapp', 'email'];

export default function Contact({ c, lang }) {
  const isSi = lang === 'si';

  return (
    <section
      className={`contact-section${isSi ? ' lang-si' : ''}`}
      id="contact"
      aria-label="Contact section"
    >
      <div className="contact-inner">
        <div className="contact-header">
          <h2 className="gradient-text-gold">{c.contact.title}</h2>
          <p>{c.contact.subtitle}</p>
        </div>

        <div className="contact-cards">
          {c.contact.items.map((item, i) => (
            <div
              key={i}
              id={`contact-card-${CARD_TYPES[i]}`}
              className={`contact-card ${CARD_TYPES[i]}`}
            >
              <div className="contact-card-icon-wrap" aria-hidden="true">
                {item.icon}
              </div>
              <div className="contact-card-label">{item.label}</div>
              <div className="contact-card-values">
                {item.values.map((val, j) => {
                  // Build appropriate href
                  let href = '#';
                  if (CARD_TYPES[i] === 'phone') href = `tel:${val.replace(/\s/g, '')}`;
                  else if (CARD_TYPES[i] === 'whatsapp')
                    href = `https://wa.me/${val.replace(/\s/g, '')}`;
                  else if (CARD_TYPES[i] === 'email') href = `mailto:${val}`;

                  return (
                    <a
                      key={j}
                      id={`contact-${CARD_TYPES[i]}-${j}`}
                      href={href}
                      target={CARD_TYPES[i] === 'whatsapp' ? '_blank' : undefined}
                      rel={CARD_TYPES[i] === 'whatsapp' ? 'noopener noreferrer' : undefined}
                      className="contact-value"
                    >
                      {val}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="contact-cta-banner">
          <h3 className="gradient-text-rainbow">
            {isSi ? 'දැන් ලියාපදිංචි වන්න!' : 'Ready to Compete?'}
          </h3>
          <p>
            {isSi
              ? 'ශ්‍රී ලංකාවේ විශාලතම Freestyle Dance Competition 2026 සඳහා ඔබේ ස්ථානය දැන් ලියාපදිංචි කරගන්න!'
              : "Don't miss your chance to compete on Sri Lanka's biggest Freestyle Dance stage!"}
          </p>
          <a
            id="register-btn-contact"
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-register"
          >
            {isSi ? 'දැන් ලියාපදිංචි වන්න! →' : 'Register Now! →'}
          </a>
        </div>
      </div>
    </section>
  );
}
