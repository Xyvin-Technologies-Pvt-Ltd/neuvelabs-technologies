"use client";

export default function ScanlineOverlay({ enabled = true }) {
  if (!enabled) return null;

  return (
    <>
      {/* Scanlines */}
      <div className="scanlines" aria-hidden="true" />
      {/* Noise texture */}
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}


