"use client";

import { useState } from "react";

export default function StickyAd() {
  const [closed, setClosed] = useState(false);
  const [width, setWidth] = useState(15);

  if (closed) return null;

  return (
    <div
      className="sticky-ad"
      style={{ width: `${width}%` }}
    >
      <div className="sticky-ad-header">
        <button
          className="sticky-ad-close"
          onClick={() => setClosed(true)}
          aria-label="Close ad"
        >
          ✕
        </button>
      </div>
      <iframe
        src="//acceptable.a-ads.com/2444559/?size=Adaptive"
        className="sticky-ad-iframe"
        title="AADS"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
      <div
        className="sticky-ad-handle"
        onPointerDown={(e) => {
          e.preventDefault();
          const startX = e.clientX;
          const startW = width;
          const onMove = (ev: PointerEvent) => {
            const delta = ((ev.clientX - startX) / window.innerWidth) * 100;
            setWidth(Math.max(10, Math.min(25, startW + delta)));
          };
          const onUp = () => {
            document.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerup", onUp);
          };
          document.addEventListener("pointermove", onMove);
          document.addEventListener("pointerup", onUp);
        }}
      />
    </div>
  );
}
