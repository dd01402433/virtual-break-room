"use client";

import { useState } from "react";
import Link from "next/link";

const pages = [
  { slug: "online-damta", title: "온라인 담타" },
  { slug: "fake-delivery", title: "가짜 배달" },
  { slug: "fake-shopping", title: "가짜 쇼핑몰" },
  { slug: "ai-chat", title: "AI 채팅" },
  { slug: "random-chat", title: "랜덤 채팅" },
  { slug: "virtual-cafe", title: "가상 카페" },
  { slug: "quit-work-timer", title: "퇴근 타이머" },
  { slug: "stress-game", title: "스트레스 해소 게임" },
  { slug: "online-together", title: "온라인 모각공" },
];

export default function DopamineNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 100,
          right: 16,
          zIndex: 50,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(212,168,96,0.18)",
          border: "1px solid rgba(212,168,96,0.35)",
          color: "#d4a860",
          fontSize: 18,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transition: "background 0.2s",
        }}
        title="도파민 사이트 TOP 10"
      >
        🧠
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 49,
              background: "rgba(0,0,0,0.5)",
            }}
          />
          <div
            className="dopamine-nav-popup"
            style={{
              position: "fixed",
              bottom: 156,
              right: 16,
              zIndex: 50,
              width: 220,
              maxWidth: "calc(100vw - 32px)",
              maxHeight: 340,
              overflowY: "auto",
              background: "rgba(13,13,20,0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(212,168,96,0.2)",
              borderRadius: 12,
              padding: "12px 0",
            }}
          >
            <div
              style={{
                padding: "0 16px 8px",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(212,168,96,0.6)",
                letterSpacing: "0.04em",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                marginBottom: 4,
              }}
            >
              도파민 사이트 TOP 10
            </div>

            <Link
              href="/dopamine"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "8px 16px",
                fontSize: 13,
                color: "#f0e0c0",
                textDecoration: "none",
                fontWeight: 600,
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              전체 목록 보기
            </Link>

            {pages.map((p) => (
              <Link
                key={p.slug}
                href={`/dopamine/${p.slug}`}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "7px 16px",
                  fontSize: 12,
                  color: "rgba(235,230,220,0.7)",
                  textDecoration: "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(212,168,96,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {p.title}
              </Link>
            ))}

            <Link
              href="/dopamine/faq"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "7px 16px",
                fontSize: 12,
                color: "rgba(235,230,220,0.5)",
                textDecoration: "none",
                borderTop: "1px solid rgba(255,255,255,0.04)",
                marginTop: 4,
              }}
            >
              FAQ
            </Link>
          </div>
        </>
      )}
    </>
  );
}