"use client";

import { useEffect, useState, useRef, useCallback, forwardRef, useImperativeHandle } from "react";
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
const CIG_CANVAS_W = 200;
const CIG_CANVAS_H = 800;
const CIG_RENDER_W = 150;
const CIG_RENDER_H = 600;
const CIG_CX = CIG_CANVAS_W / 2;
const CIG_HALF_W = 35;
const FILTER_H = 200;
const PAPER_H = 480;
const TOTAL_H = FILTER_H + PAPER_H;
const CIG_BOTTOM_Y = CIG_CANVAS_H - 40;
const CIG_TOP_Y = CIG_BOTTOM_Y - TOTAL_H;
const FILTER_TOP_Y = CIG_BOTTOM_Y - FILTER_H;
const BURN_INIT = PAPER_H;
const BURN_MIN = FILTER_H;

export interface CigaretteRef {
  reset: () => void;
  isBurnedOut: () => boolean;
}

const Cigarette = forwardRef<CigaretteRef, { smokerName: string; isUnlocked: boolean }>(function Cigarette({ smokerName, isUnlocked }, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const smokeParticles = useRef<{ x: number; y: number; vx: number; vy: number; life: number; size: number }[]>([]);
  const burning = useRef(false);
  const burnLength = useRef(BURN_INIT);
  const ashLength = useRef(0);
  const pressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPressed = useRef(false);
  const lastWag = useRef(0);
  const [shaking, setShaking] = useState(false);
  const [remoteState, setRemoteState] = useState<{ isBurning: boolean; burnLevel: number; smokerName: string; lastUpdate: number; } | null>(null);
  const postTimer = useRef<ReturnType<typeof setInterval> | null>(null);

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

  useEffect(() => {
    const poll = () => {
      fetch("/api/cigarette")
        .then((r) => r.json())
        .then((data) => {
          if (data && data.isBurning !== undefined) setRemoteState(data);
        })
        .catch(() => {});
    };
    poll();
    const id = setInterval(poll, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    return () => {
      if (postTimer.current) clearInterval(postTimer.current);
    };
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, CIG_CANVAS_W, CIG_CANVAS_H);
      if (!burning.current && burnLength.current <= BURN_MIN) {
        burnLength.current += 0.3;
        if (burnLength.current > BURN_INIT) burnLength.current = BURN_INIT;
        if (ashLength.current > 0) ashLength.current = Math.max(0, ashLength.current - 0.15);
      }
      if (!burning.current && burnLength.current >= BURN_INIT && ashLength.current > 0) {
        ashLength.current = Math.max(0, ashLength.current - 0.5);
      }
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
      if (remoteState && remoteState.isBurning && remoteState.smokerName !== smokerName) {
        const remoteBurnLength = BURN_INIT - remoteState.burnLevel * (BURN_INIT - BURN_MIN);
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
      for (let i = smokeParticles.current.length - 1; i >= 0; i--) {
        const p = smokeParticles.current[i];
        p.x += p.vx; p.y += p.vy; p.vx += (Math.random() - 0.5) * 0.02;
        p.life -= 0.006; p.size += 0.08;
        if (p.life <= 0) { smokeParticles.current.splice(i, 1); continue; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = \`rgba(180,170,160,\${p.life * 0.4})\`; ctx.fill();
      }
      const top = CIG_BOTTOM_Y - burnLength.current;
      const left = CIG_CX - CIG_HALF_W;
      const right = CIG_CX + CIG_HALF_W;
      const paperBot = FILTER_TOP_Y;
      const paperVisibleH = Math.max(0, paperBot - top);
      if (paperVisibleH > 0) {
        ctx.fillStyle = "#f0ece6";
        ctx.fillRect(left, top, CIG_HALF_W * 2, paperVisibleH);
        if (!burning.current && burnLength.current < BURN_INIT) {
          const recoveryFactor = burnLength.current / BURN_INIT;
          const tintAlpha = (1 - recoveryFactor) * 0.4;
          if (tintAlpha > 0.01) {
            const tintH = Math.min(40, paperVisibleH);
            const tintGrad = ctx.createLinearGradient(0, top, 0, top + tintH);
            tintGrad.addColorStop(0, \`rgba(80,75,70,\${tintAlpha})\`);
            tintGrad.addColorStop(1, "rgba(80,75,70,0)");
            ctx.fillStyle = tintGrad;
            ctx.fillRect(left, top, CIG_HALF_W * 2, tintH);
          }
        }
        ctx.strokeStyle = "rgba(0,0,0,0.06)"; ctx.lineWidth = 1;
        for (let y = top + 16; y < paperBot - 8; y += 30) {
          ctx.beginPath(); ctx.moveTo(left + 8, y); ctx.lineTo(right - 8, y); ctx.stroke();
        }
      }
      const filterTop = FILTER_TOP_Y;
      const filterBot = CIG_BOTTOM_Y;
      const r = CIG_HALF_W;
      const fGrad = ctx.createLinearGradient(0, filterTop, 0, filterBot);
      fGrad.addColorStop(0, "#a0724a"); fGrad.addColorStop(0.6, "#c4905a"); fGrad.addColorStop(1, "#d4a870");
      ctx.fillStyle = fGrad;
      ctx.beginPath(); ctx.moveTo(left + r, filterTop); ctx.lineTo(right - r, filterTop);
      ctx.lineTo(right, filterTop); ctx.lineTo(right, filterBot - r);
      ctx.arcTo(right, filterBot, right - r, filterBot, r);
      ctx.lineTo(left + r, filterBot); ctx.arcTo(left, filterBot, left, filterBot - r, r);
      ctx.lineTo(left, filterTop); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "#8a6840"; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(left - 1, FILTER_TOP_Y); ctx.lineTo(right + 1, FILTER_TOP_Y); ctx.stroke();
      if (burning.current && burnLength.current > BURN_MIN) {
        const glowR = 25 + Math.random() * 10;
        const eGrad = ctx.createRadialGradient(CIG_CX, top, 5, CIG_CX, top, glowR);
        eGrad.addColorStop(0, "#ff6a20"); eGrad.addColorStop(0.4, "#ff4400"); eGrad.addColorStop(0.7, "rgba(255,60,0,0.4)"); eGrad.addColorStop(1, "rgba(255,30,0,0)");
        ctx.fillStyle = eGrad; ctx.fillRect(CIG_CX - glowR, top - glowR * 0.6, glowR * 2, glowR * 1.2);
        ctx.beginPath(); ctx.arc(CIG_CX, top, 45 + Math.random() * 15, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,80,20,0.12)"; ctx.fill();
      }
      if (ashLength.current > 0 && burnLength.current > BURN_MIN) {
        ctx.fillStyle = "#666"; ctx.fillRect(left + 8, top - ashLength.current, (CIG_HALF_W - 8) * 2, ashLength.current);
      }
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  useEffect(() => { animate(); }, [animate]);

  const handlePointerDown = () => {
    isPressed.current = true;
    pressTimer.current = setInterval(() => {
      if (burnLength.current > BURN_MIN) {
        burning.current = true; burnLength.current -= 1.0; ashLength.current += 1.0;
      }
      if (burnLength.current <= BURN_MIN) {
        burning.current = false;
        if (pressTimer.current) clearInterval(pressTimer.current);
        pressTimer.current = null;
      }
    }, 100);
  };

  const handlePointerUp = () => {
    isPressed.current = false; burning.current = false;
    if (pressTimer.current) { clearInterval(pressTimer.current); pressTimer.current = null; }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPressed.current) return;
    const now = Date.now();
    if (now - lastWag.current < 150 && Math.abs(e.movementX) > 10) { ashLength.current = 0; }
    lastWag.current = now;
  };

  const handleDoubleClick = () => {
    ashLength.current = 0; setShaking(true); setTimeout(() => setShaking(false), 500);
  };

  useImperativeHandle(ref, () => ({
    reset() { burnLength.current = BURN_INIT; ashLength.current = 0; burning.current = false; },
    isBurnedOut() { return burnLength.current <= BURN_MIN; },
  }), []);

  return (
    <div
      ref={containerRef}
      className={\`cigarette-wrapper \${isUnlocked ? 'cigarette-side' : 'cigarette-center'}\`}
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
          <div style={{ textAlign: "center", fontSize: 11, color: "rgba(255,160,60,0.7)", marginBottom: 4, textShadow: "0 0 8px rgba(255,100,20,0.3)", fontWeight: 500, letterSpacing: "0.03em" }}>
            {remoteState.smokerName} 담배 피우는 중
          </div>
        )}
        <canvas ref={canvasRef} width={CIG_CANVAS_W} height={CIG_CANVAS_H} className="cigarette-canvas" style={{ filter: "drop-shadow(0 0 30px rgba(255,130,50,0.2))", transition: "filter 0.8s ease" }} />
        <div style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>길게 눌러 점화</div>
      </div>
    </div>
  );
});

export default function ChatRoom() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [online, setOnline] = useState(1);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [smokingId, setSmokingId] = useState<string | null>(null);
  const { bubbles, addBubble } = useFloatBubbles();
  const cigRef = useRef<CigaretteRef>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [reportTarget, setReportTarget] = useState<{ id: string; name: string; text: string } | null>(null);
  const [reportReason, setReportReason] = useState("");
  const [reportSent, setReportSent] = useState(false);

  const fetchMessages = useCallback(async () => {
    try {
      const res = await fetch("/api/messages");
      if (!res.ok) return;
      const json = await res.json();
      const data: Message[] = Array.isArray(json) ? json : (json.messages ?? []);
      setMessages(data);
      const now = Date.now();
      const activeUsers = new Set(data.filter((m) => now - m.timestamp < 120_000).map((m) => m.name));
      setOnline(Math.max(1, activeUsers.size));
    } catch {
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
    } finally {
      setSending(false);
    }
  };

  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 1, 
        cursor: isUnlocked ? 'default' : 'pointer' 
      }}
      onClick={() => !isUnlocked && setIsUnlocked(true)}
    >
      <Particles />
      
      <Cigarette ref={cigRef} smokerName={name} isUnlocked={isUnlocked} />

      <div className={isUnlocked ? 'ritual-visible' : 'ritual-hidden'}>
        <main className="main-content" style={{ 
          position: 'relative', 
          zIndex: 1, 
          maxWidth: '420px', 
          margin: '0 auto', 
          padding: '40px 16px 120px' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px', paddingTop: '8px', position: 'relative' }}>
            <button title="기능 설명" onClick={(e) => { e.stopPropagation(); setShowHelp(true); }} style={{ position: 'absolute', left: 0, top: '8px', width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}>?</button>
            <h1 className="title-gradient" style={{ fontSize: 'clamp(28px, 8vw, 36px)', fontWeight: 800, margin: 0, letterSpacing: '0.02em', lineHeight: 1.3 }}>공유 담배 채팅 플랫폼</h1>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', marginTop: '6px', fontWeight: 400, letterSpacing: '0.03em' }}>지금 {online}명 쉬는 중 · 담배 한 대 피우세요</p>
          </div>

          <div style={{ minHeight: '180px', maxHeight: 'calc(100vh - 320px)', overflowY: 'auto', padding: '6px 2px' }}>
            {loading ? (
              [1, 2, 3, 4].map((i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.04)', padding: '14px 16px', marginBottom: '10px', animation: 'pulse 1.4s ease-in-out infinite' }}>
                  <div style={{ height: '10px', width: '56px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', marginBottom: '10px' }}></div>
                  <div style={{ height: '12px', width: '75%', background: 'rgba(255,255,255,0.04)', borderRadius: '4px' }}></div>
                </div>
              ))
            ) : (
              messages.map((m) => (
                <div key={m.id} style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.04)', padding: '14px 16px', marginBottom: '10px', position: 'relative' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#d4a860', marginBottom: '4px' }}>{m.name}</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>{m.text}</div>
                </div>
              ))
            )}
          </div>

          <form className="input-bar" onSubmit={handleSubmit} style={{ 
            position: 'fixed', 
            bottom: 0, 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: 'calc(100% - 32px)', 
            maxWidth: '420px', 
            zIndex: 5, 
            background: 'rgba(13,13,20,0.85)', 
            backdropFilter: 'blur(20px)', 
            WebkitBackdropFilter: 'blur(20px)', 
            borderTop: '1px solid rgba(255,255,255,0.05)', 
            padding: '10px 12px', 
            display: 'flex', 
            gap: '6px', 
            alignItems: 'center',
            borderRadius: '16px 16px 0 0'
          }}>
            <input placeholder="닉네임" maxLength="20" className="nickname-input" style={{ width: '68px', padding: '10px 10px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: '#e0e0e0', fontSize: '13px', fontFamily: 'inherit' }} value={name} onChange={(e) => setName(e.target.value)} />
            <input placeholder="하고 싶은 말..." maxLength="200" style={{ flex: 1, padding: '10px 14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: '#e0e0e0', fontSize: '13px', fontFamily: 'inherit' }} value={text} onChange={(e) => setName(e.target.value)} />
            <button type="submit" className="btn-gradient" disabled={sending}>남기기</button>
          </form>
        </main>

        <div style={{ position: 'fixed', bottom: '64px', left: 0, right: 0, zIndex: 6, padding: '7px 20px', textAlign: 'center', background: 'rgba(18,16,22,0.72)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
          <span style={{ fontSize: '11px', fontWeight: 300, color: 'rgba(200,185,155,0.55)', letterSpacing: '0.04em' }}>옥상에서 담배 피우는 중 {online}명 / 39명 · 오늘 주운 담배꽁초 5963개</span>
        </div>
      </div>
    </div>
  );
}
