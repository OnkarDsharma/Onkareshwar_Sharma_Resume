"use client";

import { useId } from "react";

interface PixelClockProps {
  className?: string;
  size?: number;
  hourDuration?: number;
  minuteDuration?: number;
  rotate?: number;
}

export default function PixelClock({
  className,
  size = 260,
  hourDuration = 48,
  minuteDuration = 12,
  rotate = 0,
}: PixelClockProps) {
  const uid = useId().replace(/:/g, "");
  const faceId = `clockface-${uid}`;
  const ringId = `clockring-${uid}`;
  const grainId = `clockgrain-${uid}`;

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <defs>
        <radialGradient id={faceId} cx="40%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#e8e6dc" />
          <stop offset="45%" stopColor="#c7c8bc" />
          <stop offset="100%" stopColor="#9a9d90" />
        </radialGradient>
        <linearGradient id={ringId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a28" />
          <stop offset="50%" stopColor="#0a0a09" />
          <stop offset="100%" stopColor="#1e1e1c" />
        </linearGradient>
        <filter id={grainId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix in="noise" type="saturate" values="0" />
        </filter>
      </defs>

      {/* outer case: fully opaque so overlapping clocks properly occlude what's behind them */}
      <circle cx="100" cy="100" r="96" fill={`url(#${ringId})`} />
      <circle cx="100" cy="100" r="88" fill="#0c0c0b" />

      {/* face */}
      <circle cx="100" cy="100" r="82" fill={`url(#${faceId})`} />
      <circle
        cx="100"
        cy="100"
        r="82"
        fill="#3a3d34"
        filter={`url(#${grainId})`}
        opacity="0.22"
        style={{ mixBlendMode: "multiply" }}
      />
      <circle
        cx="100"
        cy="100"
        r="82"
        fill="none"
        stroke="#4a4d42"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* minute ticks */}
      {Array.from({ length: 60 }).map((_, i) => {
        const angle = (i * 6 * Math.PI) / 180;
        const isHour = i % 5 === 0;
        const rOuter = 78;
        const rInner = isHour ? 68 : 74;
        const x1 = 100 + rOuter * Math.sin(angle);
        const y1 = 100 - rOuter * Math.cos(angle);
        const x2 = 100 + rInner * Math.sin(angle);
        const y2 = 100 - rInner * Math.cos(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#1c1d18"
            strokeWidth={isHour ? 2.2 : 0.8}
            opacity={isHour ? 0.8 : 0.4}
          />
        );
      })}

      {/* roman numerals at 12/3/6/9 */}
      <text
        x="100"
        y="34"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="16"
        fill="#17180f"
        opacity="0.82"
      >
        XII
      </text>
      <text
        x="168"
        y="106"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="16"
        fill="#17180f"
        opacity="0.82"
      >
        III
      </text>
      <text
        x="100"
        y="176"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="16"
        fill="#17180f"
        opacity="0.82"
      >
        VI
      </text>
      <text
        x="32"
        y="106"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="16"
        fill="#17180f"
        opacity="0.82"
      >
        IX
      </text>

      {/* hour hand */}
      <g
        style={{
          transformOrigin: "100px 100px",
          animation: `spin ${hourDuration}s linear infinite`,
        }}
      >
        <polygon points="100,45 94,100 100,108 106,100" fill="#111209" />
      </g>

      {/* minute hand */}
      <g
        style={{
          transformOrigin: "100px 100px",
          animation: `spin ${minuteDuration}s linear infinite`,
        }}
      >
        <polygon points="100,22 96,100 100,110 104,100" fill="#0a0b06" />
      </g>

      {/* center pin */}
      <circle cx="100" cy="100" r="5" fill="#0a0b06" stroke="#c7c8bc" strokeWidth="1.2" />
    </svg>
  );
}