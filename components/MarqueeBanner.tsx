"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "vb_marquee_closed";
const TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export default function MarqueeBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      setVisible(true);
      return;
    }
    try {
      const { ts } = JSON.parse(raw);
      if (Date.now() - ts > TTL_MS) {
        localStorage.removeItem(STORAGE_KEY);
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ts: Date.now() }));
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 36,
        background: "rgba(20,16,22,0.78)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Marquee text */}
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          marginRight: 8,
        }}
      >
        <span
          className="marquee-text"
          style={{
            display: "inline-block",
            paddingLeft: "100%",
            fontSize: 12,
            fontWeight: 300,
            color: "rgba(220,190,130,0.6)",
            letterSpacing: "0.03em",
          }}
        >
          [공지] 욕설, 스팸, 타인을 존중하지 않는 행위, 무단 홍보 등은 영구 입장 금지됩니다! — 매니저
        </span>
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        style={{
          flexShrink: 0,
          width: 32,
          height: 32,
          border: "none",
          background: "transparent",
          color: "rgba(255,255,255,0.35)",
          fontSize: 14,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          marginRight: 4,
          borderRadius: 6,
          transition: "color 0.2s ease, background 0.2s ease",
        }}
        onPointerEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)";
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
        }}
        onPointerLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)";
          (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
        title="닫기"
      >
        ✕
      </button>
    </div>
  );
}
