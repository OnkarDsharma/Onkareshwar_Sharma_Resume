"use client";

import { useEffect, useState } from "react";

const START_VALUE = 0.0124;
const END_VALUE = 1.855432;

export default function DivergenceReadout() {
  const [value, setValue] = useState(START_VALUE);

  useEffect(() => {
    function handleScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      setValue(START_VALUE + clamped * (END_VALUE - START_VALUE));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 rounded-sm border border-primary/25 bg-black/70 px-3 py-2 font-terminal text-[11px] tracking-[0.1em] text-primary/80 backdrop-blur-sm">
      Divergence: {value.toFixed(6)}%
    </div>
  );
}