"use client";

export default function TextureBackdrop() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 15%, rgba(180,182,168,0.28), transparent 38%), radial-gradient(circle at 85% 8%, rgba(210,208,196,0.4), transparent 45%), radial-gradient(circle at 55% 60%, rgba(120,124,110,0.2), transparent 48%), radial-gradient(circle at 20% 85%, rgba(20,22,16,0.55), transparent 42%), radial-gradient(circle at 90% 80%, rgba(150,152,138,0.22), transparent 42%), linear-gradient(180deg, #4a4d42 0%, #26281f 45%, #101208 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16] mix-blend-overlay"
        preserveAspectRatio="none"
      >
        <filter id="grain-bg">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix in="noise" type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-bg)" />
      </svg>
    </div>
  );
}