"use client";

import { useState, useEffect } from "react";

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function StatusBar() {
  const [onlineNow, setOnlineNow] = useState(randomInt(20, 40));
  const [totalOnline, setTotalOnline] = useState(randomInt(20, 40));
  const [cigButts, setCigButts] = useState(randomInt(3000, 6000));

  useEffect(() => {
    // initial correction: total >= now
    const now = randomInt(20, 40);
    const total = now + randomInt(0, 8);
    setOnlineNow(now);
    setTotalOnline(total);
    setCigButts(randomInt(3000, 6000));

    const interval = setInterval(() => {
      const now2 = randomInt(20, 40);
      const total2 = now2 + randomInt(0, 8);
      setOnlineNow(now2);
      setTotalOnline(total2);
      setCigButts(randomInt(3000, 6000));
    }, 30_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 64,
        left: 0,
        right: 0,
        zIndex: 6,
        padding: "7px 20px",
        textAlign: "center",
        background: "rgba(18,16,22,0.72)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.03)",
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 300,
          color: "rgba(200,185,155,0.55)",
          letterSpacing: "0.04em",
        }}
      >
        在公司屋頂抽煙休息 {onlineNow}人 / {totalOnline}人 · 今天撿到{cigButts}個菸頭
      </span>
    </div>
  );
}
