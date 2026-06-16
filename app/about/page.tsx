import type { Metadata } from "next";

const SITE_URL = "https://virtual-break-room-318.vercel.app";

export const metadata: Metadata = {
  title: "담배런 소개 | 가상 휴게실 안내",
  description:
    "담배런은 회원가입 없이 이용 가능한 온라인 가상 휴게실입니다. 웹페이지만 열면 담배 한 대 피우며 편하게 대화할 수 있어요.",
  openGraph: {
    title: "담배런 소개",
    description:
      "회원가입 없는 한국 온라인 휴게실, 언제든지 담배 피우며 대화하세요.",
    url: `${SITE_URL}/about`,
    siteName: "담배런",
  },
};

export default function AboutPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0b",
        color: "rgba(235,230,220,0.82)",
        fontFamily: "inherit",
      }}
    >
      {/* Particles background */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 1 + Math.random() * 2,
              height: 1 + Math.random() * 2,
              background: `rgba(220,190,140,${0.06 + Math.random() * 0.1})`,
              borderRadius: "50%",
              left: Math.random() * 100 + "%",
              bottom: -10,
              animation: `particleFloat ${12 + Math.random() * 16}s linear infinite`,
              animationDelay: -Math.random() * 18 + "s",
            }}
          />
        ))}
      </div>

      <main
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 560,
          margin: "0 auto",
          padding: "80px 24px 120px",
          lineHeight: 1.8,
          fontSize: 15,
        }}
      >
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            className="title-gradient"
            style={{
              fontSize: 36,
              fontWeight: 800,
              margin: "0 0 12px",
              letterSpacing: "0.02em",
              lineHeight: 1.3,
            }}
          >
            담배런 소개
          </h1>
          <p style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.25)",
            margin: 0,
            fontWeight: 400,
            letterSpacing: "0.03em",
          }}>
            언제든지 들러서 한숨 돌리세요.
          </p>
        </div>

        {/* Card 1 */}
        <div
          className="glass-card"
          style={{
            padding: "24px 28px",
            marginBottom: 20,
          }}
        >
          <h2 style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#d4a860",
            marginBottom: 10,
            letterSpacing: "0.02em",
          }}>
            여기는 어떤 곳인가요?
          </h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75 }}>
            담배런은 <b>회원가입도 다운로드도 필요 없는</b> 온라인 가상 휴게실입니다. 웹페이지를 열고
            닉네임만 입력하면 바로 참여할 수 있어요. 대화, 흡연, 멍 때리기 — 다 괜찮습니다.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="glass-card"
          style={{
            padding: "24px 28px",
            marginBottom: 20,
          }}
        >
          <h2 style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#d4a860",
            marginBottom: 10,
            letterSpacing: "0.02em",
          }}>
            무엇을 할 수 있나요?
          </h2>
          <ul style={{
            paddingLeft: 0,
            margin: 0,
            fontSize: 14,
            lineHeight: 2,
            listStyle: "none",
          }}>
            <li>
              <span style={{ color: "#c49a5a", marginRight: 8 }}>01</span>
              실시간 채팅 — 온라인에 있는 사람들과 가볍게 인사하세요
            </li>
            <li>
              <span style={{ color: "#c49a5a", marginRight: 8 }}>02</span>
              가상 흡연 — 길게 눌러 점화하고, 흔들어 재를 털어내는 의식을 즐기세요
            </li>
            <li>
              <span style={{ color: "#c49a5a", marginRight: 8 }}>03</span>
              담배 건네기 — 마음에 드는 메시지가 보이면 담배 한 대 건네보세요
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div
          className="glass-card"
          style={{
            padding: "24px 28px",
            marginBottom: 20,
          }}
        >
          <h2 style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#d4a860",
            marginBottom: 10,
            letterSpacing: "0.02em",
          }}>
            대상 사용자
          </h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75 }}>
            한국의 직장인, 학생, 그리고 일이나 공부 중 잠시 숨 돌리고 싶은 모든 분들을 위한 공간입니다.
            짧은 휴식 시간에 부담 없이 들어와 담배 한 대 피우고 가세요.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="glass-card"
          style={{
            padding: "24px 28px",
            marginBottom: 20,
          }}
        >
          <h2 style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#d4a860",
            marginBottom: 10,
            letterSpacing: "0.02em",
          }}>
            기술
          </h2>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.75 }}>
            Next.js 15 기반, App Router 아키텍처로 제작되었습니다. 인터페이스는 한국어로
            최적화되어 있습니다.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a
            href="/"
            className="btn-gradient"
            style={{
              display: "inline-block",
              padding: "12px 32px",
              borderRadius: 14,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            지금 바로 들어오기
          </a>
        </div>

        <p
          style={{
            marginTop: 48,
            textAlign: "center",
            fontSize: 13,
            color: "rgba(255,255,255,0.15)",
          }}
        >
          &copy; 2026 담배런
        </p>
      </main>
    </div>
  );
}