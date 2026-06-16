"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface Bubble {
  id: string;
  text: string;
  type?: string;
  style: React.CSSProperties;
  createdAt: number;
}

let bubbleIdCounter = 0;

export function useFloatBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const timersRef = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  // Cleanup all timers on unmount
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((t) => clearTimeout(t));
      timers.clear();
    };
  }, []);

  const addBubble = useCallback((text: string, opts?: { type?: string; originX?: number; originY?: number }) => {
    const id = `bubble_${++bubbleIdCounter}_${Date.now()}`;
    const isSmoke = opts?.type === "smoke";

    let left: number;
    let top: number;

    if (isSmoke && opts?.originX !== undefined && opts?.originY !== undefined) {
      // smoke starts from click position, converted to percentage
      left = Math.max(5, Math.min(85, (opts.originX / window.innerWidth) * 100));
      top = Math.max(5, Math.min(80, (opts.originY / window.innerHeight) * 100));
    } else {
      const avoidZone = Math.random() < 0.4;
      if (avoidZone) {
        left = Math.random() < 0.5
          ? 5 + Math.random() * 20
          : 75 + Math.random() * 20;
        top = 15 + Math.random() * 50;
      } else {
        left = 10 + Math.random() * 80;
        top = 10 + Math.random() * 50;
      }
    }

    const duration = isSmoke ? 3 + Math.random() * 2 : 5 + Math.random() * 3;
    const fontSize = isSmoke ? 11 : 13 + Math.random() * 4;

    const bubble: Bubble = {
      id,
      text: isSmoke ? "" : text,
      type: opts?.type,
      createdAt: Date.now(),
      style: {
        left: `${left}%`,
        top: `${top}%`,
        fontSize,
        animationDuration: `${duration}s`,
      },
    };

    setBubbles((prev) => [...prev, bubble]);

    const timer = setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== id));
      timersRef.current.delete(id);
    }, duration * 1000 + 500);

    timersRef.current.set(id, timer);
  }, []);

  return { bubbles, addBubble };
}

export default function FloatBubbles({ bubbles }: { bubbles: Bubble[] }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 20,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {bubbles.map((bubble) => {
        if (bubble.type === "smoke") {
          return (
            <div
              key={bubble.id}
              className="smoke-bubble"
              style={{
                position: "absolute",
                left: bubble.style.left,
                top: bubble.style.top,
                animation: `smokeFloat ${bubble.style.animationDuration} ease-out forwards`,
              }}
            >
              {/* multiple wispy smoke particles */}
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="smoke-wisp"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: `${parseFloat(bubble.style.animationDuration as string) * 0.7 + i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          );
        }

        return (
          <div
            key={bubble.id}
            className="float-bubble"
            style={{
              position: "absolute",
              ...bubble.style,
              background: "rgba(20,18,18,0.75)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: "6px 14px",
              color: "rgba(255,255,255,0.85)",
              whiteSpace: "nowrap",
              maxWidth: 280,
              overflow: "hidden",
              textOverflow: "ellipsis",
              boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
              animation: `bubbleFloat ${bubble.style.animationDuration} ease-out forwards`,
            }}
          >
            {bubble.text}
          </div>
        );
      })}
    </div>
  );
}
