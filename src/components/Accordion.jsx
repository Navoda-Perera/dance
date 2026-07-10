// Accordion.jsx
// Expandable competition info sections

import { useState } from 'react';
import './Accordion.css';

// ---- Sub-components ----

function RulesBody({ c }) {
  return (
    <ul className="rules-list" aria-label="Competition rules">
      {c.rules.items.map((item, i) => (
        <li key={i}><span>{item}</span></li>
      ))}
    </ul>
  );
}

function ScoringBody({ c, tracks }) {
  return (
    <div>
      <p className="scoring-intro">{c.scoring.intro}</p>
      <div className="scoring-platforms">
        <span className="platform-tag yt">▶ YouTube</span>
        <span className="platform-tag fb">📘 Facebook</span>
        <span className="platform-tag tt">🎵 TikTok</span>
      </div>
      <p className="scoring-intro">{c.scoring.engagementNote}</p>
      <p className="scoring-intro" style={{ marginTop: 8 }}>{c.scoring.votingNote}</p>

      {/* Point cards */}
      <div className="scoring-points">
        {c.scoring.points.map((p, i) => (
          <div key={i} className="point-card">
            <div className="point-card-icon">{p.icon}</div>
            <div className="point-card-label">{p.label}</div>
            <div className="point-card-value">= {p.value}</div>
          </div>
        ))}
      </div>

      {/* Scoring Table */}
      <p className="playlist-header" style={{ color: 'var(--cyan)' }}>
        {c.scoring.tableTitle}
      </p>
      {/* Scoring example image */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        
      </div>
      <div className="scoring-table-wrap">
        <table className="scoring-table" aria-label="Scoring example table">
          <thead>
            <tr>
              {c.scoring.tableHeaders.map((h, i) => <th key={i}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {c.scoring.tableRows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="scoring-grand-total">{c.scoring.grandTotal}</div>

      {/* Winner selection */}
      <div className="winner-block">
        <h4>🏆 {c.scoring.winnerTitle}</h4>
        <p>{c.scoring.winnerText}</p>
      </div>
    </div>
  );
}

function VideoBody({ c, tracks }) {
  return (
    <div>
      {/* Guidelines */}
      <ul className="video-guidelines-list" aria-label="Video guidelines">
        {c.video.items.map((item, i) => (
          <li key={i}>
            <span className="vg-bullet">{i + 1}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Competition Playlist */}
    {/*  <p className="playlist-header">{c.video.playlistTitle}</p>
      <p className="playlist-note">{c.video.playlistNote}</p>
      <div className="playlist-grid" role="list" aria-label="Competition tracks">
        {tracks.map((track, i) => (
          <div key={i} className="track-card" role="listitem">
            <div className="track-number">{track.n}</div>
            <div className="track-genre">{track.genre}</div>
          </div>
        ))}
      </div> */}

      {/* Tutorial Video */}
     {/* <div className="tutorial-block" id="tutorial-video">
        <div className="tutorial-block-header">🎬 {c.video.tutorialTitle}</div>
        <div className="tutorial-block-note">{c.video.tutorialNote}</div>
        {/* ---- VIDEO EMBED SLOT ----
            To embed a YouTube video, replace this placeholder with:
            <iframe
              width="100%" style={{aspectRatio:'16/9'}}
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Tutorial" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
        */}
        
      {/*  <div className="video-embed-placeholder" aria-label={c.video.tutorialPlaceholder}>
          <div className="video-embed-icon">▶</div>
          <span>{c.video.tutorialPlaceholder}</span>
          <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>
            Add YouTube embed link here
          </span>
        </div>
      </div>
    </div>
    */}
    
    </div>
  );
}

// ---- Main Accordion ----

const ITEMS = [
  {
    id: 'rules',
    iconClass: 'rules',
    iconEmoji: '📋',
    titleKey: 'rules',
    Body: RulesBody,
  },
  {
    id: 'scoring',
    iconClass: 'scoring',
    iconEmoji: '🏆',
    titleKey: 'scoring',
    Body: ScoringBody,
  },
  {
    id: 'video',
    iconClass: 'video',
    iconEmoji: '🎬',
    titleKey: 'video',
    Body: VideoBody,
  },
];

export default function Accordion({ c, tracks, lang }) {
  const [open, setOpen] = useState(null);
  const isSi = lang === 'si';

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section
      className={`accordion-section${isSi ? ' lang-si' : ''}`}
      id="competition"
      aria-label="Competition information"
    >
      <div className="container">
        <div className="accordion-section-header">
          <h2 className="gradient-text-rainbow">
            {isSi ? 'තරඟය පිළිබඳ තොරතුරු' : 'Competition Information'}
          </h2>
          <p>
            {isSi
              ? 'ඔබේ ප්‍රශ්නවලට පිළිතුරු සොයා ගන්න'
              : 'Find answers to all your questions below'}
          </p>
        </div>

        <div className="rainbow-divider" style={{ marginBottom: 40, width: 120 }} />

        <div className="accordion-list">
          {ITEMS.map((item) => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                id={`accordion-${item.id}`}
                className={`accordion-item${isOpen ? ' open' : ''}`}
              >
                <button
                  id={`accordion-btn-${item.id}`}
                  className="accordion-header"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${item.id}`}
                >
                  <div className="accordion-header-left">
                    <span className={`accordion-icon ${item.iconClass}`} aria-hidden="true">
                      {item.iconEmoji}
                    </span>
                    <span className="accordion-title">
                      {c.accordion[item.titleKey].title}
                    </span>
                  </div>
                  <span className="accordion-chevron" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`accordion-body-${item.id}`}
                  className="accordion-body"
                  role="region"
                  aria-labelledby={`accordion-btn-${item.id}`}
                >
                  <div className="accordion-body-inner">
                    <item.Body c={c.accordion} tracks={tracks} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
