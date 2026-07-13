// ImageSlider.jsx
// Add your slide images to /public/slides/ folder: slide1.jpg, slide2.jpg, etc.
// Or pass custom images array as props.

import { useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

// Default placeholder slides (replace with real image paths)
// To add real images: put them in /public/slides/ and add paths to SLIDE_IMAGES
const SLIDE_IMAGES = [
  '/slides/slide1.jpg',
  '/slides/slide2.jpg',
  '/slides/slide3.jpg',
  // '/slides/slide4.jpg',
];

const PLACEHOLDER_COUNT = 4; // shown when no real images provided

export default function ImageSlider({ label = '' }) {
  const hasImages = SLIDE_IMAGES.length > 0;
  const total = hasImages ? SLIDE_IMAGES.length : PLACEHOLDER_COUNT;

  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  // Auto-advance every 4s
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="slider-section" id="gallery" aria-label="Photo gallery">
      <p className="slider-section-title">{label}</p>
      <div className="slider-wrapper">
        <div className="slider-track" aria-live="polite">
          {hasImages ? (
            SLIDE_IMAGES.map((src, i) => (
              <div
                key={i}
                className="slide"
                style={{ transform: `translateX(-${current * 100}%)` }}
                aria-hidden={i !== current}
              >
                <img className="slide-img" src={src} alt={`Slide ${i + 1}`} />
              </div>
            ))
          ) : (
            // Placeholder slides — replace with real images
            Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <div
                key={i}
                className="slide"
                style={{ transform: `translateX(-${current * 100}%)` }}
                aria-hidden={i !== current}
              >
                <div className="slide-placeholder">
                  <span className="slide-placeholder-num">0{i + 1}</span>
                  <span className="slide-placeholder-label">Add Slide Image {i + 1}</span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                    /public/slides/slide{i + 1}.jpg
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Controls */}
        <div className="slider-controls">
          <button id="slider-prev" className="slider-btn" onClick={prev} aria-label="Previous slide">
            ‹
          </button>
          <div className="slider-dots" role="tablist" aria-label="Slide indicators">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                id={`slide-dot-${i}`}
                className={`slider-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === current}
                role="tab"
              />
            ))}
          </div>
          <button id="slider-next" className="slider-btn" onClick={next} aria-label="Next slide">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
