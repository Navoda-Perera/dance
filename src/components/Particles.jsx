// Particles.jsx — Decorative background floating particles

import { useMemo } from 'react';
import './Particles.css';

const COLORS = [
  'rgba(245,197,24,0.6)',
  'rgba(168,85,247,0.5)',
  'rgba(6,182,212,0.5)',
  'rgba(232,121,249,0.4)',
  'rgba(239,68,68,0.4)',
  'rgba(34,197,94,0.4)',
  'rgba(249,115,22,0.45)',
];

export default function Particles({ count = 28 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: `${Math.random() * 12 + 8}s`,
      delay: `${Math.random() * -15}s`,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, [count]);

  return (
    <div className="particles-canvas" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle-dot"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
