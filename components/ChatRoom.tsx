"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import SkeletonCard from "@/components/SkeletonCard";
import MarqueeBanner from "@/components/MarqueeBanner";
import StatusBar from "@/components/StatusBar";
import AdBanner from "@/components/AdBanner";
import FloatBubbles, { useFloatBubbles } from "@/components/FloatBubbles";
import "../app/globals.css";

interface Message {
  id: string;
  name: string;
  text: string;
  type?: string;
  timestamp: number;
}

// ── Particles ──────────────────────────────────────────
function Particles() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 1 + Math.random() * 2,
            height: 1 + Math.random() * 2,
            background: `rgba(220,190,140,${0.08 + Math.random() * 0.12})`,
            borderRadius: "50%",
            left: Math.random() * 100 + "%",
            bottom: -10,
            animation: `particleFloat ${10 + Math.random() * 18}s linear infinite`,
            animationDelay: -Math.random() * 20 + "s",
          }}
        />
      ))}
    </div>
  );
}

// ── Cigarette ──────────────────────────────────────────
// Canvas logical size: 200×800, rendered ~150×600
const CIG_CANVAS_W = 200;
const CIG_CANVAS_H = 800;
const CIG_RENDER_W = 150;
const CIG_RENDER_H = 600;

// Cigarette geometry (all in logical canvas px)
const CIG_CX = CIG_CANVAS_W / 2;           // center x = 100
const CIG_HALF_W = 35;                      // half-width of cigarette = 35 → total 70px
const FILTER_H = 200;                        // filter (mouthpiece) height
const PAPER_H = 480;                         // white paper height (≈ 2.4× filter)
const TOTAL_H = FILTER_H + PAPER_H;          // 680
// Canvas layout: cigarette drawn from y = CANVAS_H - TOTAL_H - 40 = 80  to  y = CANVAS_H - 40 = 760
const CIG_BOTTOM_Y = CIG_CANVAS_H - 40;      // 760
const CIG_TOP_Y = CIG_BOTTOM_Y - TOTAL_H;    // 80
const FILTER_TOP_Y = CIG_BOTTOM_Y - FILTER_H; // 560  (boundary between filter & paper)
const BURN_INIT = PAPER_H;                    // initial burnLength = 480
const BURN_MIN = FILTER_H;                    // stop at filter top (burnLength = 200)

function Cigarette({ smokerName }: { smokerName: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const smokeParticles = useRef<
    { x: number; y: number; vx: number; vy: number; life: number; size: number }[]
  >([]);
  const burning = useRef(false);
  const burnLength = useRef(BURN_INIT);
  const ashLength = useRef(0);
  const pressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPressed = useRef(false);
  const lastWag = useRef(0);
  const [shaking, setShaking] = useState(false);
  const [remoteState, setRemoteState] = useState<{
    isBurning: boolean;
    burnLevel: number;
    smokerName: string;
    lastUpdate: number;
  } | null>(null);
  const postTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  // Ref-based post function to avoid stale closures in animate
  const doPostCigStateRef = useRef<() => void>(() => {});
  doPostCigStateRef.current = () => {
    fetch("/api/cigarette", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isBurning: burning.current,
        burnLevel: (BURN_INIT - burnLength.current) / (BURN_INIT - BURN_MIN),
        smokerName: smokerName || "匿名",
        lastUpdate: Date.now(),
      }),
    }).catch(() => {});
  };

  // Poll remote cigarette state every 2s
  useEffect(() => {
    const poll = () => {
      fetch("/api/cigarette")
        .then((r) => r.json())
        .then((data) => {
          if (data && data.isBurning !== undefined) {
            setRemoteState(data);
          }
        })
        .catch(() => {});
    };
    poll();
    const id = setInterval(poll, 2000);
    return () => clearInterval(id);
  }, []);

  // Cleanup posting timer on unmount
  useEffect(() => {
    return () => {
      if (postTimer.current) clearInterval(postTimer.current);
    };
  }, []);

  // ── draw ────────────────────────────────────────────
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, CIG_CANVAS_W, CIG_CANVAS_H);

      // ── recovery: regenerate cigarette when not burning ──
      if (!burning.current && burnLength.current <= BURN_MIN) {
        burnLength.current += 0.3;
        if (burnLength.current > BURN_INIT) burnLength.current = BURN_INIT;
        // fade ash during recovery
        if (ashLength.current > 0) {
          ashLength.current = Math.max(0, ashLength.current - 0.15);
        }
      }
      // cleanup remaining ash after full recovery
      if (!burning.current && burnLength.current >= BURN_INIT && ashLength.current > 0) {
        ashLength.current = Math.max(0, ashLength.current - 0.5);
      }

      // ── posting management ──
      const isRecovering = !burning.current && burnLength.current <= BURN_MIN && burnLength.current < BURN_INIT;
      if (burning.current || isRecovering) {
        if (!postTimer.current) {
          doPostCigStateRef.current();
          postTimer.current = setInterval(() => doPostCigStateRef.current(), 1000);
        }
      } else {
        if (postTimer.current) {
          clearInterval(postTimer.current);
          postTimer.current = null;
        }
      }

      // smoke emission
      if (burning.current) {
        if (Math.random() < 0.4) {
          smokeParticles.current.push({
            x: CIG_CX + (Math.random() - 0.5) * 30,
            y: CIG_BOTTOM_Y - burnLength.current,
            vx: (Math.random() - 0.5) * 2.0,
            vy: -4.0 - Math.random() * 6.0,
            life: 1,
            size: 10 + Math.random() * 18,
          });
        }
      }

      // remote smoke (other user smoking)
      if (
        remoteState &&
        remoteState.isBurning &&
        remoteState.smokerName !== smokerName
      ) {
        const remoteBurnLength =
          BURN_INIT - remoteState.burnLevel * (BURN_INIT - BURN_MIN);
        if (Math.random() < 0.3) {
          smokeParticles.current.push({
            x: CIG_CX + (Math.random() - 0.5) * 30,
            y: CIG_BOTTOM_Y - remoteBurnLength,
            vx: (Math.random() - 0.5) * 2.0,
            vy: -4.0 - Math.random() * 6.0,
            life: 1,
            size: 10 + Math.random() * 18,
          });
        }
      }

      // update & draw smoke
      for (let i = smokeParticles.current.length - 1; i >= 0; i--) {
        const p = smokeParticles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx += (Math.random() - 0.5) * 0.02;
        p.life -= 0.006;
        p.size += 0.08;
        if (p.life <= 0) {
          smokeParticles.current.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,170,160,${p.life * 0.4})`;
        ctx.fill();
      }

      // ── draw cigarette body ─────────────────────────
      const top = CIG_BOTTOM_Y - burnLength.current;  // burning tip y
      const left = CIG_CX - CIG_HALF_W;               // 65
      const right = CIG_CX + CIG_HALF_W;              // 135
      const paperTop = CIG_TOP_Y;                      // 80
      const paperBot = FILTER_TOP_Y;                   // 560

      // ---- white paper (burnable part) ----
      const paperVisibleH = Math.max(0, paperBot - top);
      if (paperVisibleH > 0) {
        ctx.fillStyle = "#f0ece6";
        ctx.fillRect(left, top, CIG_HALF_W * 2, paperVisibleH);

        // recovery tint: bottom fades from grey back to white
        if (!burning.current && burnLength.current < BURN_INIT) {
          const recoveryFactor = burnLength.current / BURN_INIT; // 0→1 as it recovers
          const tintAlpha = (1 - recoveryFactor) * 0.4;
          if (tintAlpha > 0.01) {
            const tintH = Math.min(40, paperVisibleH);
            const tintGrad = ctx.createLinearGradient(0, top, 0, top + tintH);
            tintGrad.addColorStop(0, `rgba(80,75,70,${tintAlpha})`);
            tintGrad.addColorStop(1, "rgba(80,75,70,0)");
            ctx.fillStyle = tintGrad;
            ctx.fillRect(left, top, CIG_HALF_W * 2, tintH);
          }
        }

        // subtle horizontal texture lines
        ctx.strokeStyle = "rgba(0,0,0,0.06)";
        ctx.lineWidth = 1;
        for (let y = top + 16; y < paperBot - 8; y += 30) {
          ctx.beginPath();
          ctx.moveTo(left + 8, y);
          ctx.lineTo(right - 8, y);
          ctx.stroke();
        }
      }

      // ---- filter (mouthpiece) ----
      // capsule shape: rectangle + bottom semicircle
      const filterTop = FILTER_TOP_Y;     // 560
      const filterBot = CIG_BOTTOM_Y;     // 760
      const r = CIG_HALF_W;              // 35  (corner radius)

      // gradient: top deep orange-brown → bottom lighter
      const fGrad = ctx.createLinearGradient(0, filterTop, 0, filterBot);
      fGrad.addColorStop(0, "#a0724a");   // deep at top (near paper)
      fGrad.addColorStop(0.6, "#c4905a");
      fGrad.addColorStop(1, "#d4a870");   // lighter at mouth end

      ctx.fillStyle = fGrad;
      // draw filter body (rectangle with rounded bottom)
      ctx.beginPath();
      ctx.moveTo(left + r, filterTop);
      ctx.lineTo(right - r, filterTop);
      // top edge (sharp)
      ctx.lineTo(right, filterTop);
      ctx.lineTo(right, filterBot - r);
      // bottom-right arc
      ctx.arcTo(right, filterBot, right - r, filterBot, r);
      // bottom edge
      ctx.lineTo(left + r, filterBot);
      // bottom-left arc
      ctx.arcTo(left, filterBot, left, filterBot - r, r);
      ctx.lineTo(left, filterTop);
      ctx.closePath();
      ctx.fill();

      // ---- boundary line (tipping paper / 接裝紙) ----
      ctx.strokeStyle = "#8a6840";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(left - 1, FILTER_TOP_Y);
      ctx.lineTo(right + 1, FILTER_TOP_Y);
      ctx.stroke();

      // ---- ember tip (when burning) ----
      if (burning.current && burnLength.current > BURN_MIN) {
        const glowR = 25 + Math.random() * 10;
        const eGrad = ctx.createRadialGradient(CIG_CX, top, 5, CIG_CX, top, glowR);
        eGrad.addColorStop(0, "#ff6a20");
        eGrad.addColorStop(0.4, "#ff4400");
        eGrad.addColorStop(0.7, "rgba(255,60,0,0.4)");
        eGrad.addColorStop(1, "rgba(255,30,0,0)");
        ctx.fillStyle = eGrad;
        ctx.fillRect(CIG_CX - glowR, top - glowR * 0.6, glowR * 2, glowR * 1.2);

        // outer glow
        ctx.beginPath();
        ctx.arc(CIG_CX, top, 45 + Math.random() * 15, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,80,20,0.12)";
        ctx.fill();
      }

      // ---- ash (grey tip) ----
      if (ashLength.current > 0 && burnLength.current > BURN_MIN) {
        ctx.fillStyle = "#666";
        ctx.fillRect(left + 8, top - ashLength.current, (CIG_HALF_W - 8) * 2, ashLength.current);
      }

      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  useEffect(() => {
    animate();
  }, [animate]);

  // ── interactions ─────────────────────────────────────
  const handlePointerDown = () => {
    isPressed.current = true;
    pressTimer.current = setInterval(() => {
      if (burnLength.current > BURN_MIN) {
        burning.current = true;
        burnLength.current -= 1.0;
        ashLength.current += 1.0;
      }
      if (burnLength.current <= BURN_MIN) {
        burning.current = false;
        if (pressTimer.current) clearInterval(pressTimer.current);
        pressTimer.current = null;
      }
    }, 100);
  };

  const handlePointerUp = () => {
    isPressed.current = false;
    burning.current = false;
    if (pressTimer.current) {
      clearInterval(pressTimer.current);
      pressTimer.current = null;
    }
  };

  // shake to ash — detect rapid pointer movement
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPressed.current) return;
    const now = Date.now();
    if (now - lastWag.current < 150 && Math.abs(e.movementX) > 10) {
      ashLength.current = 0;
    }
    lastWag.current = now;
  };

  const handleDoubleClick = () => {
    ashLength.current = 0;
    // trigger CSS shake animation
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
  };

  return (
    <div
      ref={containerRef}
      className="cigarette-wrapper"
    >
      <div
        style={{
          cursor: "pointer",
          touchAction: "none",
          animation: shaking ? "cigaretteShake 0.5s ease-in-out" : "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
        onDoubleClick={handleDoubleClick}
      >
        {remoteState && remoteState.isBurning && remoteState.smokerName !== smokerName && (
          <div
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "rgba(255,160,60,0.7)",
              marginBottom: 4,
              textShadow: "0 0 8px rgba(255,100,20,0.3)",
              fontWeight: 500,
              letterSpacing: "0.03em",
            }}
          >
            {remoteState.smokerName} 담배 피우는 중
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={CIG_CANVAS_W}
          height={CIG_CANVAS_H}
          className="cigarette-canvas"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255,130,50,0.2))",
            transition: "filter 0.8s ease",
          }}
        />
        <div
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            marginTop: 4,
          }}
        >
          길게 눌러 점화
        </div>
      </div>
    </div>
  );
}

// ── Main ChatRoom ──────────────────────────────────────
export default function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [online, setOnline] = useState(1);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [smokingId, setSmokingId] = useState<string | null>(null);
  const { bubbles, addBubble } = useFloatBubbles();

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch("/api/messages");
      if (!res.ok) return;
      const json = await res.json();
      // API returns { ok, count, messages[] } — extract the messages array
      const data: Message[] = Array.isArray(json) ? json : (json.messages ?? []);
      setMessages(data);
      // estimate online: users who posted in last 2 min
      const now = Date.now();
      const activeUsers = new Set(data.filter((m) => now - m.timestamp < 120_000).map((m) => m.name));
      setOnline(Math.max(1, activeUsers.size));
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval);
  }, [fetchMessages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedText = text.trim();
    if (!trimmedName || !trimmedText || sending) return;
    setSending(true);
    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, text: trimmedText }),
      });
      setText("");
      addBubble(trimmedText);
      await fetchMessages();
    } catch {
      // silent
    } finally {
      setSending(false);
    }
  };

  const handleSmoke = async (e: React.MouseEvent, targetMsgId: string, targetName: string) => {
    e.stopPropagation();
    const trimmedName = name.trim();
    if (!trimmedName || smokingId) return;
    setSmokingId(targetMsgId);
    // trigger smoke visual from click position
    addBubble("", { type: "smoke", originX: e.clientX, originY: e.clientY });
    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, text: `${targetName}님께 담배를 건넸습니다 🚬`, type: "smoke" }),
      });
      await fetchMessages();
    } catch {
      // silent
    } finally {
      // keep feedback visible briefly
      setTimeout(() => setSmokingId(null), 600);
    }
  };

  return (
    <>
      <MarqueeBanner />
      <Particles />

      <main
        className="main-content"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 480,
          margin: "0 auto",
          padding: "40px 16px 120px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 32, paddingTop: 8 }}>
          <h1
            className="title-gradient"
            style={{
              fontSize: "clamp(28px, 8vw, 36px)",
              fontWeight: 800,
              margin: 0,
              letterSpacing: "0.02em",
              lineHeight: 1.3,
            }}
          >
            담배런
          </h1>
          <p style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.25)",
            marginTop: 6,
            fontWeight: 400,
            letterSpacing: "0.03em",
          }}>
            지금 {online}명 쉬는 중 · 담배 한 대 피우세요
          </p>
        </div>

        {/* Message Wall */}
        <div
          style={{
            minHeight: 180,
            maxHeight: "calc(100vh - 320px)",
            overflowY: "auto",
            padding: "6px 2px",
          }}
        >
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : messages.flatMap((msg, i) => {
                const card = (
                <div
                  key={msg.id}
                  className={msg.type === "smoke" ? "glass-card-smoke" : "glass-card"}
                  style={{
                    padding: "12px 16px",
                    marginBottom: 10,
                    animation: `fadeInScale 0.35s ease-out`,
                    animationFillMode: "backwards",
                    animationDelay: `${i * 0.03}s`,
                    position: "relative",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                    <span style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: msg.type === "smoke" ? "#e8a040" : "#d4a860",
                      letterSpacing: "0.01em",
                    }}>
                      {msg.name}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", fontWeight: 400 }}>
                        {new Date(msg.timestamp).toLocaleTimeString("ko-KR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      {msg.type !== "smoke" && (
                        <button
                          onClick={(e) => handleSmoke(e, msg.id, msg.name)}
                          disabled={smokingId === msg.id}
                          title="담배 건네기"
                          className={`smoke-btn${smokingId === msg.id ? " active" : ""}`}
                        >
                          🚬
                        </button>
                      )}
                    </div>
                  </div>
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: msg.type === "smoke" ? "#d4a860" : "rgba(235,230,220,0.78)",
                    fontWeight: 400,
                  }}>
                    {msg.text}
                  </p>
                </div>
                );
                if (i > 0 && i % 8 === 0) {
                  return [<AdBanner key={`ad-${msg.id}`} />, card];
                }
                return [card];
              })}
        </div>

        {/* Input */}
        <form
          className="input-bar"
          onSubmit={handleSubmit}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 5,
            background: "rgba(13,13,20,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "10px 12px",
            display: "flex",
            gap: 6,
            alignItems: "center",
          }}
        >
          <input
            placeholder="닉네임"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            className="nickname-input"
            style={{
              width: 68,
              padding: "10px 10px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              color: "#e0e0e0",
              fontSize: 13,
              fontFamily: "inherit",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,160,100,0.35)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          />
          <input
            placeholder="하고 싶은 말..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={200}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              color: "#e0e0e0",
              fontSize: 13,
              fontFamily: "inherit",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(200,160,100,0.35)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          />
          <button
            type="submit"
            disabled={sending}
            className="btn-gradient"
          >
            남기기
          </button>
        </form>
      </main>

      <StatusBar />
      <FloatBubbles bubbles={bubbles} />
      <Cigarette smokerName={name} />
    </>
  );
}
